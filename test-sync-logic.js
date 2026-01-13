
function extractMetadata(markdown) {
    const lines = markdown.split('\n');
    let date = null;
    let titleZh = null;
    let titleEn = null;

    for (const line of lines) {
        const dateMatch = line.match(/^(?:Date|日期):\s*(\d{4}[-/]\d{1,2}[-/]\d{1,2})/i);
        if (dateMatch) {
            date = dateMatch[1].replace(/\//g, '-');
            // Ensure YYYY-MM-DD format
            const parts = date.split('-');
            if (parts[1].length === 1) parts[1] = '0' + parts[1];
            if (parts[2].length === 1) parts[2] = '0' + parts[2];
            date = parts.join('-');
        }

        const titleZhMatch = line.match(/^Title\s*ZH:\s*(.*)/i);
        if (titleZhMatch) titleZh = titleZhMatch[1].trim();

        const titleEnMatch = line.match(/^Title\s*EN:\s*(.*)/i);
        if (titleEnMatch) titleEn = titleEnMatch[1].trim();
    }

    return { date, titleZh, titleEn };
}

function splitContent(markdown) {
    const parts = markdown.split(/\n---\n/);
    if (parts.length >= 2) {
        return {
            zh: parts[0].trim(),
            en: parts[1].trim()
        };
    }
    return {
        zh: markdown.trim(),
        en: null
    };
}

// Test cases
const testMd = `
Title ZH: AI 时代的产品重构
Title EN: Product Reconstruction in the AI Era
Date: 2026-01-10

# Content Start
This is Chinese content.

---

# Content Start EN
This is English content.
`;

console.log('--- Metadata Extraction Test ---');
const metadata = extractMetadata(testMd);
console.log(metadata);

console.log('\n--- Content Splitting Test ---');
const content = splitContent(testMd);
console.log('ZH Content Length:', content.zh.length);
console.log('EN Content Length:', content.en ? content.en.length : 'N/A');
console.log('EN Content Preview:', content.en ? content.en.substring(0, 50) : 'N/A');

const testMdNoEn = `
Date: 2025/12/12
Only Chinese here.
`;
console.log('\n--- No English Test ---');
console.log(extractMetadata(testMdNoEn));
console.log(splitContent(testMdNoEn).en === null ? 'Success: EN is null' : 'Failed: EN is not null');
