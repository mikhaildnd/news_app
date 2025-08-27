module.exports = {
    chromeSelector: '.wrapper > *, #root > *, .story-decorator > *',
    diffingEngine: 'pixelmatch',
    configurations: {
        'chrome.laptop': {
            target: 'chrome.app',
            width: 1366,
            height: 768,
        },
        'chrome.iphone7': {
            target: 'chrome.app',
            preset: 'iPhone 7',
        },
    },
    async beforeScreenshot(page) {
        // Ждём пока все шрифты прогрузятся
        await page.evaluate(() => document.fonts.ready.then(() => true));

        // Дополнительно ждём хотя бы 300мс на отрисовку
        await page.waitForTimeout(300);
    },
};
