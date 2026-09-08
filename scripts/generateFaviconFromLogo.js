import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

/**
 * Exact SVG recreating the uploaded VC LOW logo:
 * - Yellow inverted triangle at top center
 * - Purple "V" with distinct left and right arms
 * - Bold black "C" interlocked on the right
 * - Clean white card background with rounded corners for high visibility in all browser themes (light & dark)
 */
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="128" fill="#FFFFFF"/>
  <rect x="16" y="16" width="480" height="480" rx="112" fill="none" stroke="#F3F4F6" stroke-width="12"/>
  
  <g transform="translate(0, 10)">
    <!-- Yellow Triangle -->
    <polygon points="215,85 297,85 256,165" fill="#FFC107"/>

    <!-- Purple V -->
    <path d="M 125 165 L 180 165 L 256 340 L 315 165 L 358 165 L 278 395 L 234 395 Z" fill="#7226A1"/>

    <!-- Black C -->
    <path d="M 375 165 
             C 440 165, 455 210, 455 270 
             C 455 330, 440 375, 375 375 
             C 320 375, 290 340, 290 270 
             C 290 200, 320 165, 375 165 Z
             M 370 218 
             C 340 218, 332 240, 332 270 
             C 332 300, 340 322, 370 322 
             C 398 322, 408 305, 412 288 
             L 450 295 
             C 442 335, 412 375, 370 375 
             Z" fill="#000000" fill-rule="evenodd"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg);

// Also generate full logo SVG including text for og-image and high-res use
const fullLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAFAFA"/>
      <stop offset="100%" stop-color="#F3F4F6"/>
    </linearGradient>
  </defs>
  
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  
  <g transform="translate(600, 260) scale(1.1)">
    <!-- Yellow Triangle -->
    <polygon points="-41,-145 41,-145 0,-65" fill="#FFC107"/>

    <!-- Purple V -->
    <path d="M -131,-65 L -76,-65 L 0,110 L 59,-65 L 102,-65 L 22,165 L -22,165 Z" fill="#7226A1"/>

    <!-- Black C -->
    <path d="M 75,-65 C 150,-65 175,-15 175,50 C 175,115 150,165 75,165 C 10,165 -20,115 -20,50 C -20,-15 10,-65 75,-65 Z M 70,-12 C 35,-12 25,15 25,50 C 25,85 35,112 70,112 C 100,112 118,90 122,70 L 165,75 C 155,120 120,165 70,165 Z" fill="#000000" fill-rule="evenodd"/>
  </g>
  
  <!-- Text VC LOW -->
  <text x="600" y="475" text-anchor="middle" fill="#000000" font-family="Montserrat, sans-serif" font-weight="900" font-size="56" letter-spacing="4">VC LOW</text>
  
  <!-- Subtitle FASTER THAN YOU THINK -->
  <text x="600" y="520" text-anchor="middle" fill="#000000" font-family="Inter, sans-serif" font-weight="800" font-size="20" letter-spacing="6">FASTER THAN YOU THINK</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'og-image.svg'), fullLogoSvg);

// Create favicon.png & apple-touch-icon.png using embedded SVG or Buffer
fs.writeFileSync(path.join(publicDir, 'favicon.png'), Buffer.from(faviconSvg));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), Buffer.from(faviconSvg));

console.log("Favicon et assets générés à partir du logo exact dans public/");
