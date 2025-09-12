const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function dumpStory(storyUrl, outDir) {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    console.log(`🔎 Открываю сторибук: ${storyUrl}`);
    await page.goto(storyUrl, { waitUntil: 'networkidle0' });

    // HTML
    const html = await page.content();
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'story.html'), html, 'utf8');

    // PNG
    const screenshotPath = path.join(outDir, 'story.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });

    // Все <img>
    const images = await page.$$eval('img', (imgs) => imgs.map((i) => i.src));
    fs.writeFileSync(
        path.join(outDir, 'images.json'),
        JSON.stringify(images, null, 2),
        'utf8',
    );

    // index.html для удобного просмотра
    const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Story debug</title>
  <style>
    body { font-family: sans-serif; display: flex; gap: 20px; }
    iframe { width: 50%; height: 90vh; border: 1px solid #ccc; }
    .preview { width: 50%; }
    img { max-width: 100%; border: 1px solid #ccc; }
  </style>
</head>
<body>
  <div class="preview">
    <h2>Screenshot</h2>
    <img src="story.png" alt="screenshot"/>
  </div>
  <div>
    <h2>DOM</h2>
    <iframe src="story.html"></iframe>
  </div>
</body>
</html>`;
    fs.writeFileSync(path.join(outDir, 'index.html'), indexHtml, 'utf8');

    console.log(`✅ Сохранил дамп в ${outDir}`);
    await browser.close();
}

const [url, outDir] = process.argv.slice(2);
if (!url || !outDir) {
    console.error('Usage: node dump-story-dom.js <url> <outDir>');
    process.exit(1);
}

dumpStory(url, outDir).catch((err) => {
    console.error(err);
    process.exit(1);
});
