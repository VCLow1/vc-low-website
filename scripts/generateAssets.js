import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Base64 logo from Logo.tsx
const base64Data = "iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAQAElEQVR4Aey9B4BdR33v/5s55dbtVauVtLLlJlcQGAwYBCShhRDCsxMIxUBC8khIIOEPJOS9p5SXngAhpJCQ+IXQYoIJzXRMcUxGY5Bt2bJVVtJqtX339lNn/t85W7QrreRdSXe15Xc1c+ecOTO/mfkc3fud38y9dyXxgwkwASbABJgAE1jzBFjQ1/wt5AEwASbABJgAEyCqr6AzYSbABJgAE2ACTGBFCLRgrwhmboQJMAEmwASYQH0JrGV";
const buffer = Buffer.from(base64Data, 'base64');

fs.writeFileSync(path.join(publicDir, 'favicon.png'), buffer);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), buffer);

// 2. Favicon SVG
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="128" fill="#0A0A0A"/>
  <rect x="32" y="32" width="448" height="448" rx="96" fill="none" stroke="#6C5CE7" stroke-width="16"/>
  <path d="M120 180 L200 340 L240 340 L320 180 H270 L220 290 L170 180 Z" fill="#6C5CE7"/>
  <path d="M300 340 L390 180 H340 L275 300 L290 340 Z" fill="#FDCB6E"/>
  <text x="256" y="440" text-anchor="middle" fill="#FFFFFF" font-family="Montserrat, sans-serif" font-weight="900" font-size="42" letter-spacing="4">VC LOW</text>
</svg>`;
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg);

// 3. og-image SVG / visual representation
const ogImageSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A0A0A"/>
      <stop offset="50%" stop-color="#120E24"/>
      <stop offset="100%" stop-color="#6C5CE7"/>
    </linearGradient>
    <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FDCB6E"/>
      <stop offset="100%" stop-color="#FFEAA7"/>
    </linearGradient>
  </defs>
  
  <rect width="1200" height="630" fill="url(#bg)"/>
  
  <!-- Decorative grid lines & shapes -->
  <circle cx="1000" cy="150" r="300" fill="#6C5CE7" opacity="0.15"/>
  <circle cx="200" cy="500" r="250" fill="#FDCB6E" opacity="0.08"/>
  <rect x="80" y="80" width="1040" height="470" rx="40" fill="none" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="2"/>
  
  <!-- Logo / Badge -->
  <g transform="translate(140, 140)">
    <rect width="90" height="90" rx="24" fill="#6C5CE7"/>
    <text x="45" y="58" text-anchor="middle" fill="#FDCB6E" font-family="Montserrat, sans-serif" font-weight="900" font-size="44">VC</text>
  </g>
  <text x="250" y="195" fill="#FFFFFF" font-family="Montserrat, sans-serif" font-weight="900" font-size="52" letter-spacing="6">VC LOW</text>
  <text x="250" y="225" fill="#FDCB6E" font-family="Inter, sans-serif" font-weight="700" font-size="18" letter-spacing="3">INGÉNIERIE DIGITALE &amp; SOLUTIONS SUR MESURE</text>
  
  <!-- Tagline / Title -->
  <text x="140" y="340" fill="#FFFFFF" font-family="Montserrat, sans-serif" font-weight="900" font-size="48">Transformez votre PME ou Startup</text>
  <text x="140" y="400" fill="url(#yellowGrad)" font-family="Montserrat, sans-serif" font-weight="900" font-size="48">avec des Outils Web Sur-Mesure</text>
  
  <!-- Subtitle -->
  <text x="140" y="460" fill="#E2E8F0" font-family="Inter, sans-serif" font-weight="400" font-size="24">Sites Vitrines, E-Commerce, CRM &amp; Applications Mobiles en Tunisie</text>
  
  <!-- Footer Badge -->
  <rect x="140" y="495" width="260" height="42" rx="12" fill="#6C5CE7" opacity="0.3"/>
  <text x="270" y="522" text-anchor="middle" fill="#FFFFFF" font-family="Inter, sans-serif" font-weight="700" font-size="16" letter-spacing="1">www.vclow.com</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'og-image.svg'), ogImageSvg);
fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), ogImageSvg);

console.log("Assets générés avec succès dans public/");
