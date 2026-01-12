const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { sync, authorize } = require('./sync-docs');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const app = express();
let PORT = 3001; // Switched to 3001 as 3000 might be busy

const ARTICLES_JSON_PATH = path.join(__dirname, 'articles.json');
const IGNORED_DOCS_PATH = path.join(__dirname, 'ignored-docs.json');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// API to check auth status
app.get('/api/auth-status', async (req, res) => {
    const tokenPath = path.join(__dirname, 'token.json');
    const credentialsPath = path.join(__dirname, 'credentials.json');

    if (!fs.existsSync(credentialsPath)) {
        return res.json({ status: 'no_credentials', message: 'credentials.json missing' });
    }

    if (fs.existsSync(tokenPath)) {
        return res.json({ status: 'authorized' });
    }

    res.json({ status: 'unauthorized' });
});

// API to trigger batch sync
app.post('/api/batch-sync', async (req, res) => {
    const { docs, bilingual } = req.body; // docs is [{ id, date }]

    if (!docs || !Array.isArray(docs) || docs.length === 0) {
        return res.status(400).json({ error: 'At least one Document is required' });
    }

    try {
        const results = [];
        for (const item of docs) {
            const { id, date } = item;
            console.log(`Starting sync for ${id} with date ${date || 'default'}...`);
            await sync(id, 'zh', date);
            if (bilingual) {
                await sync(id, 'en', date);
            }
            results.push(id);
        }
        res.json({ success: true, message: `Successfully synced ${results.length} documents` });
    } catch (error) {
        console.error('Batch sync failed:', error);
        res.status(500).json({ error: error.message });
    }
});

// API to start auth flow
app.get('/api/auth-url', async (req, res) => {
    try {
        const credentials = JSON.parse(fs.readFileSync(path.join(__dirname, 'credentials.json')));
        const { client_id, client_secret, redirect_uris } = credentials.installed || credentials.web;
        const { google } = require('googleapis');
        const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: ['https://www.googleapis.com/auth/documents.readonly', 'https://www.googleapis.com/auth/drive.readonly'],
        });

        res.json({ url: authUrl });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API to exchange code for token
app.post('/api/token', async (req, res) => {
    const { code } = req.body;
    try {
        const credentials = JSON.parse(fs.readFileSync(path.join(__dirname, 'credentials.json')));
        const { client_id, client_secret, redirect_uris } = credentials.installed || credentials.web;
        const { google } = require('googleapis');
        const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

        const { tokens } = await oAuth2Client.getToken(code);
        fs.writeFileSync(path.join(__dirname, 'token.json'), JSON.stringify(tokens));
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API to fetch recent docs
app.get('/api/recent-docs', async (req, res) => {
    try {
        const tokenPath = path.join(__dirname, 'token.json');
        if (!fs.existsSync(tokenPath)) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const credentials = JSON.parse(fs.readFileSync(path.join(__dirname, 'credentials.json')));
        const { client_id, client_secret, redirect_uris } = credentials.installed || credentials.web;
        const { google } = require('googleapis');
        const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        oAuth2Client.setCredentials(JSON.parse(fs.readFileSync(tokenPath)));

        // Load ignored docs
        let ignoredIds = [];
        if (fs.existsSync(IGNORED_DOCS_PATH)) {
            ignoredIds = JSON.parse(fs.readFileSync(IGNORED_DOCS_PATH));
        }

        const drive = google.drive({ version: 'v3', auth: oAuth2Client });

        // Calculate the date 3 days ago
        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        const timeString = threeDaysAgo.toISOString();

        const response = await drive.files.list({
            pageSize: 20, // Fetch more to allow for filtering
            fields: 'files(id, name, modifiedTime)',
            orderBy: 'modifiedTime desc',
            q: `mimeType = 'application/vnd.google-apps.document' and trashed = false and modifiedTime > '${timeString}'`
        });

        // Filter ignored and limit to 5
        const files = response.data.files
            .filter(f => !ignoredIds.includes(f.id))
            .slice(0, 5);

        res.json({ success: true, files });
    } catch (error) {
        console.error('Failed to fetch recent docs:', error);
        res.status(500).json({ error: error.message });
    }
});

// API to ignore a doc
app.post('/api/ignore-doc', async (req, res) => {
    const { docId } = req.body;
    if (!docId) return res.status(400).json({ error: 'Doc ID required' });

    try {
        let ignoredIds = [];
        if (fs.existsSync(IGNORED_DOCS_PATH)) {
            ignoredIds = JSON.parse(fs.readFileSync(IGNORED_DOCS_PATH));
        }
        if (!ignoredIds.includes(docId)) {
            ignoredIds.push(docId);
            fs.writeFileSync(IGNORED_DOCS_PATH, JSON.stringify(ignoredIds));
        }
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API to publish changes to Git
app.post('/api/publish', async (req, res) => {
    try {
        console.log('Publishing changes to GitHub...');

        // 1. Add all changes
        await execPromise('git add .');

        // 2. Commit
        try {
            const timestamp = new Date().toLocaleString();
            await execPromise(`git commit -m "Auto-sync from Google Docs: ${timestamp}"`);
        } catch (commitError) {
            // If nothing to commit, exec will throw. Check output.
            if (commitError.stdout && commitError.stdout.includes('nothing to commit')) {
                return res.json({ success: true, message: 'No changes to publish.' });
            }
            throw commitError;
        }

        // 3. Push
        await execPromise('git push');

        console.log('Successfully published!');
        res.json({ success: true, message: 'Successfully published to live site!' });
    } catch (error) {
        console.error('Publish failed:', error);
        res.status(500).json({ error: error.message });
    }
});

const http = require('http');
const server = http.createServer(app);

server.on('error', (e) => {
    console.error('Server failed to start:', e);
    process.exit(1);
});

server.listen(3001, () => {
    const actualPort = server.address().port;
    console.log('\n=======================================');
    console.log(`同步工具已启动！`);
    console.log(`请手动打开以下链接进行操作:`);
    console.log(`http://localhost:${actualPort}/sync-tool.html`);
    console.log('=======================================\n');
});
