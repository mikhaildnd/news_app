const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function dumpStory(url, outDir) {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    console.log(`🔎 Открываю сторибук: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

    // дамп HTML
    const html = await page.content();
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'story.html'), html);

    // скриншот
    await page.screenshot({
        path: path.join(outDir, 'story.png'),
        fullPage: true,
    });

    // список всех изображений
    const images = await page.$$eval('img', (imgs) => imgs.map((img) => ({
        src: img.src,
        alt: img.alt,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
    })));
    fs.writeFileSync(
        path.join(outDir, 'images.json'),
        JSON.stringify(images, null, 2),
    );

    console.log(`Сохранил дамп в ${outDir}`);
    await browser.close();
}

const [,, url, outDir] = process.argv;

if (!url || !outDir) {
    console.error('Usage: node dump-story-dom.js <url> <outDir>');
    process.exit(1);
}

dumpStory(url, outDir).catch((err) => {
    console.error('Ошибка при дампе сторибука:', err);
    process.exit(1);
});
