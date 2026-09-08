import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const imagesDir = path.join(publicDir, 'images');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

// Official Logo SVG matching the user's image:
// - Yellow triangle (pointing down) at top center
// - Purple V with sharp arms
// - Black C interlocking on the right
// - Bold "VC LOW" text below emblem
// - "FASTER THAN YOU THINK" subtitle below text
const createOfficialLogoSvg = ({ width = 512, height = 512, light = false, bg = 'transparent' }) => {
  const cColor = light ? '#FFFFFF' : '#000000';
  const textColor = light ? '#FFFFFF' : '#000000';
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="${width}" height="${height}">
    ${bg !== 'transparent' ? `<rect width="512" height="512" fill="${bg}" rx="64"/>` : ''}
    
    <g transform="translate(0, 10)">
      <!-- Yellow Triangle pointing down -->
      <polygon points="220,60 292,60 256,130" fill="#FFC107"/>

      <!-- Purple V -->
      <path d="M 130 135 L 182 135 L 256 310 L 312 135 L 354 135 L 276 365 L 236 365 Z" fill="#7226A1"/>

      <!-- Black or White C -->
      <path d="M 368 135 
               C 432 135, 448 180, 448 240 
               C 448 300, 432 345, 368 345 
               C 315 345, 286 310, 286 240 
               C 286 170, 315 135, 368 135 Z
               M 364 188 
               C 336 188, 328 210, 328 240 
               C 328 270, 336 292, 364 292 
               C 390 292, 400 275, 404 258 
               L 442 265 
               C 434 305, 404 345, 364 345 
               Z" fill="${cColor}" fill-rule="evenodd"/>
    </g>
    
    <!-- VC LOW Text -->
    <text x="256" y="425" text-anchor="middle" fill="${textColor}" font-family="Montserrat, sans-serif" font-weight="900" font-size="44" letter-spacing="2">VC LOW</text>
    
    <!-- FASTER THAN YOU THINK Tagline -->
    <text x="256" y="465" text-anchor="middle" fill="${textColor}" font-family="Inter, sans-serif" font-weight="800" font-size="16" letter-spacing="4">FASTER THAN YOU THINK</text>
  </svg>`;
};

// Social Open Graph Banner SVG (1200x630)
const createOgBannerSvg = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <defs>
      <linearGradient id="ogBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#050505"/>
        <stop offset="60%" stop-color="#0D0D0D"/>
        <stop offset="100%" stop-color="#1A092B"/>
      </linearGradient>
      <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7226A1"/>
        <stop offset="100%" stop-color="#9D4EDD"/>
      </linearGradient>
    </defs>
    
    <rect width="1200" height="630" fill="url(#ogBg)"/>
    <circle cx="1000" cy="150" r="400" fill="url(#purpleGlow)" opacity="0.15"/>
    <circle cx="150" cy="500" r="300" fill="#FFC107" opacity="0.08"/>
    <rect x="40" y="40" width="1120" height="550" rx="36" fill="none" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="2"/>
    
    <!-- Official Logo in OG Banner -->
    <g transform="translate(180, 115) scale(0.9)">
      <!-- Yellow Triangle -->
      <polygon points="220,60 292,60 256,130" fill="#FFC107"/>
      <!-- Purple V -->
      <path d="M 130 135 L 182 135 L 256 310 L 312 135 L 354 135 L 276 365 L 236 365 Z" fill="#7226A1"/>
      <!-- White C -->
      <path d="M 368 135 C 432 135, 448 180, 448 240 C 448 300, 432 345, 368 345 C 315 345, 286 310, 286 240 C 286 170, 315 135, 368 135 Z M 364 188 C 336 188, 328 210, 328 240 C 328 270, 336 292, 364 292 C 390 292, 400 275, 404 258 L 442 265 C 434 305, 404 345, 364 345 Z" fill="#FFFFFF" fill-rule="evenodd"/>
    </g>

    <text x="580" y="270" fill="#FFFFFF" font-family="Montserrat, sans-serif" font-weight="900" font-size="72" letter-spacing="2">VC LOW</text>
    <text x="580" y="325" fill="#FFC107" font-family="Inter, sans-serif" font-weight="800" font-size="24" letter-spacing="6">FASTER THAN YOU THINK</text>
    <text x="580" y="390" fill="#E2E8F0" font-family="Inter, sans-serif" font-weight="600" font-size="28">Ingénierie Digitale pour PME &amp; Startups</text>
    <text x="580" y="435" fill="#A1A1AA" font-family="Inter, sans-serif" font-weight="400" font-size="22">Sites Web • E-commerce • CRM &amp; Apps Sur Mesure</text>
    
    <rect x="580" y="475" width="220" height="48" rx="16" fill="#7226A1"/>
    <text x="690" y="506" text-anchor="middle" fill="#FFFFFF" font-family="Inter, sans-serif" font-weight="800" font-size="18">www.vclow.com</text>
  </svg>`;
};

// Generic Service Visual SVG (1200x800)
const createServiceVisualSvg = (title, subtitle, accentColor = "#7226A1", icon = "❖") => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0A0A0A"/>
        <stop offset="60%" stop-color="#141126"/>
        <stop offset="100%" stop-color="${accentColor}"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bg)"/>
    <circle cx="950" cy="200" r="350" fill="${accentColor}" opacity="0.2"/>
    <circle cx="200" cy="650" r="300" fill="#FFC107" opacity="0.1"/>
    <rect x="60" y="60" width="1080" height="680" rx="36" fill="none" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="2"/>
    
    <g transform="translate(100, 120)">
      <rect width="80" height="80" rx="24" fill="${accentColor}"/>
      <text x="40" y="52" text-anchor="middle" fill="#FFFFFF" font-family="Montserrat, sans-serif" font-weight="900" font-size="36">${icon}</text>
    </g>

    <text x="100" y="320" fill="#FFC107" font-family="Inter, sans-serif" font-weight="800" font-size="22" letter-spacing="4">VC LOW — INGENIERIE DIGITALE</text>
    <text x="100" y="400" fill="#FFFFFF" font-family="Montserrat, sans-serif" font-weight="900" font-size="52">${title}</text>
    <text x="100" y="470" fill="#E2E8F0" font-family="Inter, sans-serif" font-weight="400" font-size="28">${subtitle}</text>
    
    <!-- Mini emblem in visual -->
    <g transform="translate(920, 520) scale(0.6)">
      <polygon points="220,60 292,60 256,130" fill="#FFC107"/>
      <path d="M 130 135 L 182 135 L 256 310 L 312 135 L 354 135 L 276 365 L 236 365 Z" fill="#7226A1"/>
      <path d="M 368 135 C 432 135, 448 180, 448 240 C 448 300, 432 345, 368 345 C 315 345, 286 310, 286 240 C 286 170, 315 135, 368 135 Z M 364 188 C 336 188, 328 210, 328 240 C 328 270, 336 292, 364 292 C 390 292, 400 275, 404 258 L 442 265 C 434 305, 404 345, 364 345 Z" fill="#FFFFFF" fill-rule="evenodd"/>
    </g>

    <rect x="100" y="560" width="220" height="50" rx="16" fill="#FFFFFF" opacity="0.1"/>
    <text x="210" y="592" text-anchor="middle" fill="#FFFFFF" font-family="Inter, sans-serif" font-weight="700" font-size="18">www.vclow.com</text>
  </svg>`;
};

async function generateAll() {
  console.log("Generating official brand assets with Sharp...");

  // 1. Favicon SVG & PNG
  const faviconSvgContent = createOfficialLogoSvg({ width: 512, height: 512, light: false, bg: '#FFFFFF' });
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvgContent);

  const faviconBuffer = await sharp(Buffer.from(faviconSvgContent)).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), faviconBuffer);

  const appleTouchBuffer = await sharp(Buffer.from(faviconSvgContent)).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouchBuffer);

  // 2. Transparent Logo PNG
  const transparentLogoSvg = createOfficialLogoSvg({ width: 800, height: 800, light: false, bg: 'transparent' });
  const logoPngBuffer = await sharp(Buffer.from(transparentLogoSvg)).resize(800, 800).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'logo.png'), logoPngBuffer);

  // 3. OG Image JPG
  const ogSvgContent = createOgBannerSvg();
  fs.writeFileSync(path.join(publicDir, 'og-image.svg'), ogSvgContent);
  
  const ogJpgBuffer = await sharp(Buffer.from(ogSvgContent)).resize(1200, 630).jpeg({ quality: 95 }).toBuffer();
  fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), ogJpgBuffer);

  // 4. Generate all service and blog visuals (both SVG & PNG)
  const visuals = [
    { name: 'hero', title: 'Dashboard &amp; Solutions Sur Mesure', subtitle: 'Ingénierie digitale à haut ROI pour PME et Startups', color: '#7226A1', icon: '🚀' },
    { name: 'service-vitrine', title: 'Site Vitrine Professionnel', subtitle: 'Design moderne, optimisé SEO et haute conversion', color: '#7226A1', icon: '🌐' },
    { name: 'service-ecommerce', title: 'E-commerce Haute Performance', subtitle: 'Paiement en ligne &amp; gestion automatisée', color: '#00CEC9', icon: '🛍️' },
    { name: 'service-crm', title: 'Systèmes de Gestion &amp; CRM', subtitle: 'Centralisation &amp; automatisation des processus métier', color: '#7226A1', icon: '⚙️' },
    { name: 'service-mobile', title: 'Applications Web &amp; Mobiles', subtitle: 'Expérience iOS &amp; Android fluide et sur mesure', color: '#E84393', icon: '📱' },
    { name: 'service-mvp', title: 'MVP Express', subtitle: 'Lancement rapide sur le marché en brefs délais', color: '#FFC107', icon: '⚡' },
    { name: 'service-seo', title: 'SEO &amp; Référencement', subtitle: 'Visibilité et trafic organique qualifié', color: '#00B894', icon: '📈' },
    { name: 'service-sponsoring', title: 'Sponsoring &amp; Publicité', subtitle: 'Campagnes ciblées Meta &amp; Google', color: '#FF7675', icon: '🎯' },
    { name: 'service-shooting', title: 'Shooting Produits', subtitle: 'Visuels professionnels HD pour vos offres', color: '#A29BFE', icon: '📸' },
    { name: 'service-branding', title: 'Branding &amp; Identité', subtitle: 'Identité de marque forte et mémorable', color: '#FD79A8', icon: '🎨' },
    { name: 'blog-ecommerce', title: 'E-commerce en Tunisie', subtitle: 'Opportunités et leviers de croissance PME', color: '#7226A1', icon: '💡' },
    { name: 'blog-crm', title: 'Systèmes de Gestion Sur Mesure', subtitle: 'Optimisation opérationnelle et rentabilité PME', color: '#7226A1', icon: '📊' },
  ];

  for (const item of visuals) {
    const svgStr = createServiceVisualSvg(item.title, item.subtitle, item.color, item.icon);
    fs.writeFileSync(path.join(imagesDir, `${item.name}.svg`), svgStr);
    
    const pngBuf = await sharp(Buffer.from(svgStr)).resize(1200, 800).png().toBuffer();
    fs.writeFileSync(path.join(imagesDir, `${item.name}.png`), pngBuf);
  }

  console.log("Successfully generated all official brand assets and PNG/SVG visuals!");
}

generateAll().catch(console.error);
