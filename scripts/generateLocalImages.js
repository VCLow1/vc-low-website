import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const createSvg = (title, subtitle, categoryColor = "#6C5CE7", iconSymbol = "❖") => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A0A0A"/>
      <stop offset="60%" stop-color="#141126"/>
      <stop offset="100%" stop-color="${categoryColor}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bgGrad)"/>
  <circle cx="950" cy="200" r="350" fill="${categoryColor}" opacity="0.15"/>
  <circle cx="200" cy="650" r="300" fill="#FDCB6E" opacity="0.08"/>
  <rect x="60" y="60" width="1080" height="680" rx="36" fill="none" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="2"/>
  
  <g transform="translate(100, 120)">
    <rect width="70" height="70" rx="20" fill="${categoryColor}"/>
    <text x="35" y="46" text-anchor="middle" fill="#FFFFFF" font-family="Montserrat, sans-serif" font-weight="900" font-size="32">${iconSymbol}</text>
  </g>

  <text x="100" y="320" fill="#FDCB6E" font-family="Inter, sans-serif" font-weight="800" font-size="22" letter-spacing="4">VC LOW — INGENIERIE DIGITALE</text>
  <text x="100" y="400" fill="#FFFFFF" font-family="Montserrat, sans-serif" font-weight="900" font-size="54">${title}</text>
  <text x="100" y="470" fill="#E2E8F0" font-family="Inter, sans-serif" font-weight="400" font-size="28">${subtitle}</text>
  
  <rect x="100" y="550" width="220" height="50" rx="16" fill="#FFFFFF" opacity="0.1"/>
  <text x="210" y="582" text-anchor="middle" fill="#FFFFFF" font-family="Inter, sans-serif" font-weight="700" font-size="18">vclow.com</text>
</svg>
`;

const imageDefinitions = [
  { name: 'hero.svg', title: 'Dashboard & Solutions Sur Mesure', subtitle: 'Ingénierie digitale à haut ROI pour PME et Startups', color: '#6C5CE7', icon: '🚀' },
  { name: 'service-vitrine.svg', title: 'Site Vitrine Professionnel', subtitle: 'Design moderne, optimisé SEO et haute conversion', color: '#6C5CE7', icon: '🌐' },
  { name: 'service-ecommerce.svg', title: 'E-commerce Haute Performance', subtitle: 'Paiement en ligne & gestion automatisée', color: '#00CEC9', icon: '🛍️' },
  { name: 'service-crm.svg', title: 'Systèmes de Gestion & CRM', subtitle: 'Centralisation & automatisation des processus métier', color: '#6C5CE7', icon: '⚙️' },
  { name: 'service-mobile.svg', title: 'Applications Web & Mobiles', subtitle: 'Expérience iOS & Android fluide et sur mesure', color: '#E84393', icon: '📱' },
  { name: 'service-mvp.svg', title: 'MVP Express', subtitle: 'Lancement rapide sur le marché en brefs délais', color: '#FDCB6E', icon: '⚡' },
  { name: 'service-seo.svg', title: 'SEO & Référencement', subtitle: 'Visibilité et trafic organique qualifié', color: '#00B894', icon: '📈' },
  { name: 'service-sponsoring.svg', title: 'Sponsoring & Publicité', subtitle: 'Campagnes ciblées Meta & Google', color: '#FF7675', icon: '🎯' },
  { name: 'service-shooting.svg', title: 'Shooting Produits', subtitle: 'Visuels professionnels HD pour vos offres', color: '#A29BFE', icon: '📸' },
  { name: 'service-branding.svg', title: 'Branding & Identité', subtitle: 'Identité de marque forte et mémorable', color: '#FD79A8', icon: '🎨' },
  { name: 'blog-ecommerce.svg', title: 'E-commerce en Tunisie', subtitle: 'Opportunités et leviers de croissance PME', color: '#6C5CE7', icon: '💡' },
  { name: 'blog-crm.svg', title: '5 Signes CRM Sur-Mesure', subtitle: 'Optimisation de la relation client', color: '#6C5CE7', icon: '📊' },
];

imageDefinitions.forEach((img) => {
  const content = createSvg(img.title, img.subtitle, img.color, img.icon);
  fs.writeFileSync(path.join(imagesDir, img.name), content);
});

console.log(`${imageDefinitions.length} images locales créées avec succès dans public/images/`);
