import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.log("dist/index.html non trouvé. Le prerendering doit être exécuté après `vite build`.");
  process.exit(0);
}

const templateHtml = fs.readFileSync(templatePath, 'utf-8');

const routeMetadata = [
  {
    path: '/',
    title: 'VC LOW | Agence de développement web & outils de gestion sur mesure en Tunisie',
    description: 'VC LOW conçoit des sites web, e-commerce, applications et systèmes de gestion sur mesure pour PME et startups en Tunisie. Devis rapide, délais courts.',
  },
  {
    path: '/a-propos',
    title: 'À Propos de VC LOW | Notre mission et notre approche',
    description: "Découvrez la mission, la vision et l'approche de VC LOW : une ingénierie digitale pensée pour le ROI des PME et startups tunisiennes.",
  },
  {
    path: '/services',
    title: 'Nos Services | Sites Web, E-commerce, CRM, Apps Mobiles - VC LOW',
    description: 'Sites vitrine, e-commerce, systèmes de gestion sur mesure et applications mobiles. Découvrez les services de VC LOW pour votre transformation digitale.',
  },
  {
    path: '/services/site-vitrine',
    title: 'Site Vitrine Professionnel en Tunisie | VC LOW',
    description: 'Création de sites vitrine professionnels, optimisés SEO et conçus pour convertir. Délais courts, tarifs adaptés aux PME tunisiennes.',
  },
  {
    path: '/services/e-commerce',
    title: 'Création de Site E-commerce en Tunisie | VC LOW',
    description: 'Plateformes e-commerce haute performance avec paiement en ligne, gestion de stock et marketing automatisé, sur mesure pour votre activité.',
  },
  {
    path: '/services/crm-gestion',
    title: 'Systèmes de Gestion & CRM sur mesure | VC LOW',
    description: "Automatisez vos processus métier avec un système de gestion ou un CRM sur mesure : dashboard KPI, centralisation des données, gain de productivité.",
  },
  {
    path: '/services/applications-mobiles',
    title: "Développement d'Applications Web & Mobiles | VC LOW",
    description: "Applications web et mobiles sur mesure, scalables et centrées sur l'expérience utilisateur, pour iOS et Android.",
  },
  {
    path: '/services/mvp-express',
    title: 'MVP Express | VC LOW',
    description: 'Lancez votre produit minimum viable en temps record avec la méthodologie agile VC LOW.',
  },
  {
    path: '/services/seo',
    title: 'Référencement Naturel & SEO | VC LOW',
    description: 'Optimisez votre visibilité sur Google et générez du trafic qualifié de façon pérenne.',
  },
  {
    path: '/services/sponsoring-publicite',
    title: 'Sponsoring & Publicité Digitale | VC LOW',
    description: 'Campagnes publicitaires ciblées sur Meta, Google et LinkedIn avec un ROI mesurable.',
  },
  {
    path: '/services/shooting-produits',
    title: 'Shooting & Visuels Produits | VC LOW',
    description: 'Valorisez vos produits et vos services grâce à des visuels professionnels haute définition.',
  },
  {
    path: '/services/branding',
    title: 'Branding & Identité Visuelle | VC LOW',
    description: "Création d'identité de marque forte et mémorable pour marquer votre secteur d'activité.",
  },
  {
    path: '/faq',
    title: 'Foire Aux Questions (FAQ) | VC LOW',
    description: 'Toutes les réponses à vos questions sur nos processus, délais, tarifs et garanties.',
  },
  {
    path: '/blog',
    title: 'Blog VC LOW | Insights & Stratégies Digitales',
    description: 'Conseils, analyses et actualités pour réussir votre transformation digitale.',
  },
  {
    path: '/realisations',
    title: 'Nos Réalisations | Projets & Études de Cas - VC LOW',
    description: 'Découvrez les projets récents livrés par VC LOW pour des PME et startups.',
  },
  {
    path: '/contact',
    title: 'Contact | Demandez votre devis - VC LOW',
    description: 'Contactez VC LOW pour un devis personnalisé : site web, e-commerce, application ou système de gestion sur mesure.',
  },
  {
    path: '/rendez-vous',
    title: 'Prendre Rendez-vous | Analyse Gratuite - VC LOW',
    description: 'Réservez une analyse gratuite et personnalisée de votre organisation avec VC LOW.',
  },
  {
    path: '/vc-low-learning',
    title: 'VC Low Learning | Formations Dev Mobile, Power BI & IA',
    description: "Formations pratiques VC LOW : FlutterFlow & Firebase, Power BI, et développement web avec l'IA.",
  },
  {
    path: '/mentions-legales',
    title: 'Mentions Légales | VC LOW',
    description: 'Mentions légales et informations réglementaires de VC LOW SARL.',
  },
  {
    path: '/politique-de-confidentialite',
    title: 'Politique de Confidentialité | VC LOW',
    description: 'Protection de vos données personnelles et politique de confidentialité VC LOW.',
  },
  {
    path: '/cgv',
    title: 'Conditions Générales de Vente | VC LOW',
    description: 'Conditions générales de vente et de prestations de services numériques de VC LOW.',
  },
];

const baseUrl = 'https://www.vclow.com';

routeMetadata.forEach((meta) => {
  let html = templateHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  
  // Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${meta.description}" />`);
  
  // Replace OG Title & Description & URL
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${meta.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${baseUrl}${meta.path}" />`);
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${baseUrl}${meta.path}" />`);

  if (meta.path === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), html);
  } else {
    const routeDir = path.join(distDir, meta.path.slice(1));
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  }
});

console.log(`Prerendering terminé : ${routeMetadata.length} routes générées dans dist/ avec métadonnées SEO statiques.`);
