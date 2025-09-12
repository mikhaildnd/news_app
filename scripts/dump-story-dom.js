/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function dumpStory(page, url, outDir, name) {
    await page.goto(url, { waitUntil: 'networkidle0' });

    // ждём шрифты
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);

    // сохраняем HTML
    const html = await page.content();
    fs.writeFileSync(path.join(outDir, `${name}.html`), html);

    // сохраняем PNG
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });

    console.log(`✅ Saved dump for ${name}`);
}

async function main() {
    const baseUrl = process.argv[2] || 'http://localhost:6006';
    const outDir = process.argv[3] || './artifacts';

    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    // смотрим какие сторисы упали — в difference хранятся PNG
    const diffDir = path.resolve('.loki/difference');
    if (!fs.existsSync(diffDir)) {
        console.log('⚠️ No .loki/difference directory found, nothing to dump');
        process.exit(0);
    }

    const failedStories = fs.readdirSync(diffDir)
        .filter((f) => f.endsWith('.png'))
        .map((f) => path.basename(f, '.png')); // убираем расширение

    if (failedStories.length === 0) {
        console.log('✅ No failed stories detected');
        process.exit(0);
    }

    console.log(`📸 Found failed stories: ${failedStories.join(', ')}`);

    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();

    for (const id of failedStories) {
        const url = `${baseUrl}/iframe.html?id=${id}&viewMode=story`;
        const safeName = id.replace(/[^a-z0-9-_]/gi, '_');

        try {
            await dumpStory(page, url, outDir, safeName);
        } catch (e) {
            console.error(`❌ Failed to dump ${id}`, e);
        }
    }

    await browser.close();
}

main().catch((err) => {
    console.error('❌ Unexpected error in dump-story-dom.js', err);
    process.exit(1);
});
