import React from 'react';

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  path: string;
  category: string;
  titleLine1: string;
  titleHighlight: string;
  intro: string;
  heroImage: string;
  heroStatValue: string;
  heroStatLabel: string;
  ctaLabel: string;
  process: ServiceStep[];
  pricingNote: string;
  faqs: ServiceFaq[];
  metaTitle: string;
  metaDescription: string;
}

// Note tarifs : par honnêteté, on ne publie pas de fourchette de prix inventée pour ces
// services (contrairement au Site Vitrine, dont le prix vient d'un vrai comparatif).
// "Sur devis" + CTA reste la version la plus fiable tant qu'un vrai prix n'est pas fixé.

export const servicesContent: ServiceContent[] = [
  {
    slug: 'mvp-express',
    path: '/services/mvp-express',
    category: 'Time-to-Market',
    titleLine1: 'Lancez votre',
    titleHighlight: 'MVP en semaines',
    intro: "Développement ultra-rapide pour les startups qui veulent valider leur concept sur le marché en un temps record, sans sacrifier la qualité.",
    // TODO: remplacer par vraie photo (équipe / écran de projet réel / bureau VC LOW)
    heroImage: '/images/service-mvp.svg',
    heroStatValue: 'Semaines',
    heroStatLabel: 'et non des mois',
    ctaLabel: 'Lancer mon MVP',
    process: [
      { title: 'Cadrage & priorisation', desc: "On isole les fonctionnalités essentielles pour tester votre hypothèse business, sans superflu." },
      { title: 'Prototype cliquable', desc: "Un premier aperçu visuel et interactif avant même la première ligne de code." },
      { title: 'Développement itératif', desc: "Sprints courts, retours rapprochés, adaptation continue selon vos retours." },
      { title: 'Lancement & retours', desc: "Mise en ligne rapide pour commencer à collecter de vrais retours utilisateurs." },
    ],
    pricingNote: "Sur devis, selon le périmètre fonctionnel retenu pour votre MVP.",
    faqs: [
      { q: 'Combien de temps pour développer mon MVP ?', a: "Cela dépend du périmètre, mais l'objectif est de compter en semaines plutôt qu'en mois, en se concentrant sur l'essentiel." },
      { q: 'Pourrai-je faire évoluer mon MVP par la suite ?', a: "Oui, le MVP est pensé comme une première brique solide, capable d'évoluer vers un produit complet." },
      { q: 'Quelles technologies utilisez-vous ?', a: "La stack est choisie selon votre projet, généralement orientée vers des outils qui permettent d'aller vite (React, Firebase...)." },
    ],
    metaTitle: 'MVP Express | Développement rapide de startup - VC LOW',
    metaDescription: "Validez votre concept en quelques semaines avec un MVP développé rapidement par VC LOW, sans compromis sur la qualité.",
  },
  {
    slug: 'seo',
    path: '/services/seo',
    category: 'Référencement Naturel',
    titleLine1: 'Soyez trouvé',
    titleHighlight: 'avant vos concurrents',
    intro: "Un site n'a de valeur que si vos clients potentiels le trouvent. Nous optimisons votre présence sur les moteurs de recherche, techniquement et sur le contenu.",
    heroImage: '/images/service-seo.svg',
    heroStatValue: 'SEO',
    heroStatLabel: 'Technique & Contenu',
    ctaLabel: 'Améliorer ma visibilité',
    process: [
      { title: 'Audit SEO & concurrentiel', desc: "Analyse technique de votre site et de son positionnement face à la concurrence." },
      { title: 'Optimisation on-page', desc: "Structure, balises, vitesse de chargement : les fondations techniques du référencement." },
      { title: 'Stratégie de contenu', desc: "Identification des recherches pertinentes pour votre activité et plan de contenu associé." },
      { title: 'Suivi & ajustements', desc: "Suivi des positions dans le temps et ajustements continus de la stratégie." },
    ],
    pricingNote: "Sur devis, selon votre secteur d'activité et vos objectifs de visibilité.",
    faqs: [
      { q: 'En combien de temps voit-on des résultats en SEO ?', a: "Le référencement naturel est un travail de fond ; les premiers effets se voient généralement sur plusieurs mois, pas du jour au lendemain." },
      { q: 'Le SEO est-il inclus dans la création de mon site ?', a: "Les fondations techniques SEO sont intégrées dès la conception de votre site. Un accompagnement SEO continu est un service complémentaire." },
      { q: 'Travaillez-vous le SEO local en Tunisie ?', a: "Oui, l'optimisation pour les recherches locales fait partie de notre approche pour les entreprises tunisiennes." },
    ],
    metaTitle: 'SEO & Référencement Naturel en Tunisie | VC LOW',
    metaDescription: "Améliorez votre visibilité sur Google grâce à une stratégie SEO technique et de contenu adaptée à votre activité.",
  },
  {
    slug: 'sponsoring-publicite',
    path: '/services/sponsoring-publicite',
    category: 'Acquisition & Publicité',
    titleLine1: 'Accélérez votre',
    titleHighlight: 'acquisition client',
    intro: "Des campagnes publicitaires ciblées (Meta Ads, Google Ads) pour générer des prospects qualifiés et accélérer votre croissance.",
    heroImage: '/images/service-sponsoring.svg',
    heroStatValue: 'Ads',
    heroStatLabel: 'Meta & Google',
    ctaLabel: 'Lancer mes campagnes',
    process: [
      { title: 'Définition des objectifs', desc: "Clarification de votre cible, de votre budget et de vos objectifs d'acquisition." },
      { title: 'Création des campagnes', desc: "Conception des visuels et messages publicitaires adaptés à chaque plateforme." },
      { title: 'Diffusion & optimisation', desc: "Lancement des campagnes avec suivi et optimisation continue des performances." },
      { title: 'Reporting', desc: "Rapports réguliers pour suivre le retour sur investissement de vos campagnes." },
    ],
    pricingNote: "Honoraires de gestion sur devis ; le budget publicitaire diffusé reste séparé et défini avec vous.",
    faqs: [
      { q: 'Quel budget prévoir pour une campagne ?', a: "Le budget publicitaire est défini ensemble selon vos objectifs, indépendamment de nos honoraires de gestion." },
      { q: 'Sur quelles plateformes travaillez-vous ?', a: "Principalement Meta Ads (Facebook/Instagram) et Google Ads, selon où se trouve votre audience." },
      { q: 'Puis-je arrêter une campagne à tout moment ?', a: "Oui, les campagnes publicitaires peuvent être ajustées ou arrêtées à tout moment selon vos résultats." },
    ],
    metaTitle: 'Sponsoring & Publicité en ligne (Meta Ads, Google Ads) | VC LOW',
    metaDescription: "Campagnes publicitaires ciblées pour générer des prospects qualifiés et accélérer votre croissance en Tunisie.",
  },
  {
    slug: 'shooting-produits',
    path: '/services/shooting-produits',
    category: 'Contenu Visuel',
    titleLine1: 'Des visuels qui',
    titleHighlight: 'vendent vraiment',
    intro: "Photos et vidéos professionnelles de vos produits, pensées pour vos réseaux sociaux et vos fiches e-commerce.",
    heroImage: '/images/service-shooting.svg',
    heroStatValue: 'Photo',
    heroStatLabel: '& Vidéo Produit',
    ctaLabel: 'Organiser mon shooting',
    process: [
      { title: 'Brief créatif', desc: "Définition de l'univers visuel souhaité et des supports finaux (site, réseaux, catalogue)." },
      { title: 'Séance shooting', desc: "Prise de vue en studio ou directement sur votre lieu d'activité." },
      { title: 'Retouche & optimisation', desc: "Post-traitement des visuels et optimisation pour le web et l'impression." },
      { title: 'Livraison multi-formats', desc: "Fichiers livrés dans les formats adaptés à chaque usage (site, réseaux sociaux, e-commerce)." },
    ],
    pricingNote: "Sur devis, selon le nombre de produits et le lieu du shooting.",
    faqs: [
      { q: 'Le shooting se fait-il en studio ou chez nous ?', a: "Les deux options sont possibles selon vos produits et vos contraintes." },
      { q: 'Les visuels sont-ils optimisés pour le e-commerce ?', a: "Oui, nous livrons des formats adaptés aux fiches produits, aux réseaux sociaux et à l'impression si besoin." },
      { q: 'Peut-on combiner ce service avec la création de mon site e-commerce ?', a: "Oui, c'est même recommandé pour avoir des visuels cohérents dès le lancement de votre boutique." },
    ],
    metaTitle: 'Shooting Produits Professionnel | VC LOW',
    metaDescription: "Photos et vidéos professionnelles de vos produits pour vos réseaux sociaux et votre boutique en ligne.",
  },
  {
    slug: 'branding',
    path: '/services/branding',
    category: 'Image de Marque',
    titleLine1: 'Une identité qui',
    titleHighlight: 'vous ressemble',
    intro: "Logo, charte graphique et supports de communication cohérents pour donner à votre marque une image professionnelle et mémorable.",
    heroImage: '/images/service-branding.svg',
    heroStatValue: 'Identité',
    heroStatLabel: 'Visuelle Complète',
    ctaLabel: 'Construire ma marque',
    process: [
      { title: 'Brief & positionnement', desc: "Compréhension de votre activité, de vos valeurs et de votre positionnement souhaité." },
      { title: 'Propositions de logo', desc: "Plusieurs pistes créatives de logo et de direction artistique." },
      { title: 'Charte graphique', desc: "Couleurs, typographies et règles d'usage réunies dans un document complet." },
      { title: 'Supports de communication', desc: "Déclinaison sur cartes de visite, réseaux sociaux, signature email et autres supports." },
    ],
    pricingNote: "Sur devis, selon l'étendue des supports à créer.",
    faqs: [
      { q: 'Qu\'est-ce qui est inclus dans une charte graphique ?', a: "Le logo, les couleurs, les typographies et les règles d'usage pour garder une image cohérente partout." },
      { q: 'Puis-je juste demander un logo, sans charte complète ?', a: "Oui, le branding peut être limité au logo seul ou étendu à une identité complète selon vos besoins." },
      { q: 'Le branding est-il lié à la création de mon site ?', a: "Il peut être fait en amont pour garantir une cohérence visuelle dès la conception de votre site." },
    ],
    metaTitle: 'Branding & Identité Visuelle | VC LOW',
    metaDescription: "Logo, charte graphique et supports de communication pour construire une image de marque professionnelle et cohérente.",
  },
];
