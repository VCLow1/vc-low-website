import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '..', 'public', 'images', 'realisations');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const targets = [
  { name: 'hotbox.jpg', url: 'https://hotbox-menu.vercel.app' },
  { name: 'hermoor-caishen.jpg', url: 'https://hermoor-caishen.vercel.app' },
  { name: 'sys-gest.jpg', url: 'https://sys-gest-demo.vercel.app' },
  { name: 'thirtythreespace.jpg', url: 'https://thirtythreespace.com/' },
];

async function captureAll() {
  console.log("Launching browser to capture real screenshots from live client websites...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  for (const target of targets) {
    const destPath = path.join(outputDir, target.name);
    console.log(`Navigating to ${target.url}...`);
    try {
      await page.goto(target.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Wait slightly for animations/fonts to settle
      await new Promise(r => setTimeout(r, 2000));

      await page.screenshot({
        path: destPath,
        type: 'jpeg',
        quality: 90,
        clip: { x: 0, y: 0, width: 1440, height: 900 }
      });
      console.log(`Saved real screenshot to ${destPath}`);
    } catch (err) {
      console.error(`Error capturing ${target.url}:`, err.message);
    }
  }

  await browser.close();
  console.log("All real client screenshots captured successfully!");
}

captureAll();
