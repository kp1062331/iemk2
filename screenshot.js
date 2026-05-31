const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new"
    });
    const page = await browser.newPage();
    
    // Set viewport to desktop size
    await page.setViewport({ width: 1440, height: 2500 });
    
    // Go to Wix template
    console.log('Navigating to Wix template...');
    await page.goto('https://www.wix.com/website-template/view/html/3280', {
      waitUntil: 'domcontentloaded',
      timeout: 120000
    });
    
    // Wait a bit for the iframe to load
    console.log('Waiting 15 seconds for template to render...');
    await new Promise(r => setTimeout(r, 15000));
    
    // Take a full page screenshot
    const screenshotPath = path.join(__dirname, 'wix-template-3280.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    
    console.log(`Screenshot saved to ${screenshotPath}`);
    await browser.close();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
})();
