const puppeteer = require('puppeteer');
const ptp = require('pdf-to-printer');
const outputPath = 'output.pdf';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/', {
    waitUntil: 'networkidle0',
  });
  await page.pdf({
    path: outputPath,
    printBackground: true,
    width: 2970,
    height: 2100,
  });
  await browser.close();
  // do print
  ptp.print(outputPath).then(console.log).catch(console.error);
})();
