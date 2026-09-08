import fs from 'fs';
import path from 'path';

const sourceImagePath = 'C:/Users/msi/.gemini/antigravity-ide/brain/204a3600-6796-405c-a73b-a94eb26bad15/media__1787230457756.jpg';
const publicDir = 'c:/Users/msi/Desktop/VC Low/vc-low-WEBSITE/public';

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const imageBuffer = fs.readFileSync(sourceImagePath);

// Write exact image to favicon and assets
fs.writeFileSync(path.join(publicDir, 'favicon.png'), imageBuffer);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), imageBuffer);
fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), imageBuffer);
fs.writeFileSync(path.join(publicDir, 'logo.jpg'), imageBuffer);

console.log("L'image exacte téléchargée a été copiée vers public/favicon.png, public/apple-touch-icon.png et public/og-image.jpg");
