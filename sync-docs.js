const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const cloudinary = require('cloudinary').v2;
const axios = require('axios');

// --- Configuration ---
const CLOUDINARY_CONFIG = {
    cloud_name: 'dtv7s0fyt',
    api_key: '443197517597731',
    api_secret: 'wj6td_eErdc4eeDjQ-e_Ac8M0mk'
};

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const TOKEN_PATH = path.join(__dirname, 'token.json');
const ARTICLES_JSON_PATH = path.join(__dirname, 'articles.json');

cloudinary.config(CLOUDINARY_CONFIG);

// --- Google Auth ---
async function authorize() {
    if (!fs.existsSync(CREDENTIALS_PATH)) {
        console.error('Error: credentials.json not found. Please follow the instructions to get it.');
        process.exit(1);
    }
    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
    const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    if (fs.existsSync(TOKEN_PATH)) {
        oAuth2Client.setCredentials(JSON.parse(fs.readFileSync(TOKEN_PATH)));
        return oAuth2Client;
    }

    return getNewToken(oAuth2Client);
}

async function getNewToken(oAuth2Client) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/documents.readonly', 'https://www.googleapis.com/auth/drive.readonly'],
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const code = await new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question('Enter the code from that page here: ', (code) => {
            readline.close();
            resolve(code);
        });
    });
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
    return oAuth2Client;
}

// --- Image Handling ---
async function uploadToCloudinary(imageUrl, docId, imageIndex) {
    try {
        const result = await cloudinary.uploader.upload(imageUrl, {
            folder: `blog/${docId}`,
            public_id: `image_${imageIndex}`
        });
        return result.secure_url;
    } catch (error) {
        console.error('Cloudinary upload failed:', error);
        return null;
    }
}

// --- Doc Processing ---
function getDocContent(document) {
    let markdown = '';
    const content = document.body.content;
    const inlineObjects = document.inlineObjects || {};

    for (const element of content) {
        if (element.paragraph) {
            const paragraph = element.paragraph;
            let pText = '';
            for (const run of paragraph.elements) {
                if (run.textRun) {
                    let text = run.textRun.content;
                    const style = run.textRun.textStyle || {};
                    if (style.bold) text = `**${text}**`;
                    if (style.italic) text = `*${text}*`;
                    pText += text;
                } else if (run.inlineObjectElement) {
                    const objId = run.inlineObjectElement.inlineObjectId;
                    const embeddedObj = inlineObjects[objId].inlineObjectProperties.embeddedObject;
                    if (embeddedObj.imageProperties) {
                        pText += `{{IMAGE_${objId}}}`;
                    }
                }
            }

            // Handle headings
            const namedStyle = paragraph.paragraphStyle.namedStyleType;
            if (namedStyle === 'HEADING_1') markdown += `# ${pText}\n`;
            else if (namedStyle === 'HEADING_2') markdown += `## ${pText}\n`;
            else if (namedStyle === 'HEADING_3') markdown += `### ${pText}\n`;
            else markdown += `${pText}\n`;
        }
    }
    return markdown;
}

async function processImages(markdown, document, docId, auth) {
    const inlineObjects = document.inlineObjects || {};
    const drive = google.drive({ version: 'v3', auth });
    let imageCount = 0;

    for (const objId in inlineObjects) {
        const placeholder = `{{IMAGE_${objId}}}`;
        if (markdown.includes(placeholder)) {
            imageCount++;
            console.log(`Uploading image ${imageCount}...`);

            // In a real scenario, we'd need to fetch the image content.
            // Google Docs API doesn't provide a direct public URL for embedded images in the JSON.
            // We usually have to use the Drive API to export or fetch the image if we have the ID,
            // but inline objects are tricky. 
            // A better way is to use the 'export' link if we were converting the whole doc,
            // but here we are parsing the JSON.

            // For now, we'll use a placeholder or a more advanced method if needed.
            // Actually, the 'contentUri' in imageProperties is temporary and expires.
            const contentUri = inlineObjects[objId].inlineObjectProperties.embeddedObject.imageProperties.contentUri;

            if (contentUri) {
                const cloudinaryUrl = await uploadToCloudinary(contentUri, docId, imageCount);
                if (cloudinaryUrl) {
                    markdown = markdown.replace(placeholder, `![Image](${cloudinaryUrl})`);
                }
            }
        }
    }
    return markdown;
}

// --- Main ---
async function sync(docId, lang = 'zh') {
    const auth = await authorize();
    const docs = google.docs({ version: 'v1', auth });

    console.log(`Fetching document ${docId}...`);
    const res = await docs.documents.get({ documentId: docId });
    const document = res.data;

    let markdown = getDocContent(document);
    markdown = await processImages(markdown, document, docId, auth);

    const date = new Date().toISOString().split('T')[0];
    const folderName = date;
    const fileName = `${docId.substring(0, 8)}${lang === 'en' ? '.en' : ''}.md`;
    const dirPath = path.join(__dirname, 'writing', folderName);

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    const filePath = path.join(dirPath, fileName);
    fs.writeFileSync(filePath, markdown);
    console.log(`Markdown saved to ${filePath}`);

    // Update articles.json
    const articles = JSON.parse(fs.readFileSync(ARTICLES_JSON_PATH));
    const relativePath = `writing/${folderName}/${fileName}`;

    let article = articles.find(a => a.id === docId);
    if (!article) {
        article = {
            id: docId,
            date: date,
            tags: ["New"],
            title: { zh: document.title, en: document.title },
            path: relativePath
        };
        articles.unshift(article);
    } else {
        article.path = relativePath; // Update path if it changed
    }

    fs.writeFileSync(ARTICLES_JSON_PATH, JSON.stringify(articles, null, 4));
    console.log('articles.json updated.');
}

const docId = process.argv[2];
const lang = process.argv[3] || 'zh';

if (!docId) {
    console.log('Usage: node sync-docs.js <DOC_ID> [lang]');
    process.exit(1);
}

sync(docId, lang).catch(console.error);
