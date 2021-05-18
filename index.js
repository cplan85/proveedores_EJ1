const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto('https://web.gencat.cat/ca/inici');
  await page.click('//a[@title="Agenda cultural"]');
  await page.screenshot({ path: `example.png` });
})();