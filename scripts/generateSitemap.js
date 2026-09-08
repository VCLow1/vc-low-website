/**
 * Script Node.js de génération dynamique du sitemap.xml
 * Régénère public/sitemap.xml avec toutes les pages statiques et inclut
 * dynamiquement les URLs de blog (/blog/:postId).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

const staticRoutes = [
  { url: 'https://www.vclow.com/', priority: '1.0' },
  { url: 'https://www.vclow.com/a-propos', priority: '0.7' },
  { url: 'https://www.vclow.com/services', priority: '0.9' },
  { url: 'https://www.vclow.com/services/site-vitrine', priority: '0.8' },
  { url: 'https://www.vclow.com/services/e-commerce', priority: '0.8' },
  { url: 'https://www.vclow.com/services/crm-gestion', priority: '0.8' },
  { url: 'https://www.vclow.com/services/applications-mobiles', priority: '0.8' },
  { url: 'https://www.vclow.com/services/mvp-express', priority: '0.7' },
  { url: 'https://www.vclow.com/services/seo', priority: '0.7' },
  { url: 'https://www.vclow.com/services/sponsoring-publicite', priority: '0.7' },
  { url: 'https://www.vclow.com/services/shooting-produits', priority: '0.7' },
  { url: 'https://www.vclow.com/services/branding', priority: '0.7' },
  { url: 'https://www.vclow.com/faq', priority: '0.8' },
  { url: 'https://www.vclow.com/blog', priority: '0.9' },
  { url: 'https://www.vclow.com/realisations', priority: '0.8' },
  { url: 'https://www.vclow.com/contact', priority: '0.6' },
  { url: 'https://www.vclow.com/rendez-vous', priority: '0.7' },
  { url: 'https://www.vclow.com/vc-low-learning', priority: '0.6' },
];

export async function generateSitemap(blogPosts = []) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  staticRoutes.forEach((route) => {
    xml += `  <url><loc>${route.url}</loc><priority>${route.priority}</priority></url>\n`;
  });

  blogPosts.forEach((post) => {
    xml += `  <url><loc>https://www.vclow.com/blog/${post.id}</loc><priority>0.7</priority></url>\n`;
  });

  xml += `</urlset>\n`;

  fs.writeFileSync(sitemapPath, xml);
  console.log(`sitemap.xml régénéré avec succès (${staticRoutes.length} pages statiques + ${blogPosts.length} articles blog).`);
}

generateSitemap();
