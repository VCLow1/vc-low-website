import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  UtensilsCrossed,
  ShoppingBag,
  Truck,
  Building2,
  CheckCircle2,
  Sparkles,
  Search,
  Filter,
  Layers,
  ArrowRight,
  X,
  Code2,
  Zap,
  TrendingUp,
  Globe
} from 'lucide-react';
import SEO from './SEO';
import Testimonials from './Testimonials';
import { useTranslation } from 'react-i18next';

export interface Project {
  id: string;
  name: string;
  category: 'Restauration' | 'E-commerce' | 'Gestion & Logistique' | 'Coworking & Services';
  description: string;
  detailedDescription?: string;
  status: 'Client actif' | 'En développement';
  link?: string;
  result?: string;
  screenshot?: string;
  icon: React.ReactNode;
  accent: string;
  tags: string[];
  features: string[];
  year: string;
}

const projectsData: Project[] = [
  {
    id: 'hotbox',
    name: 'HOTBOX',
    category: 'Restauration',
    description: "Menu digital via QR code pour restaurant (pizzas, plats chauds, burgers, sandwichs, bowls) : consultation instantanée du menu et structuration des offres sur mobile.",
    detailedDescription: "HOTBOX est une enseigne de restauration rapide exigeante. VC LOW a conçu une plateforme web mobile-first ultra-rapide permettant aux clients d'accéder instantanément au menu via QR code, de consulter les visuels des plats en haute définition et de naviguer par catégories avec zéro temps de chargement.",
    status: 'Client actif',
    link: 'https://hotbox-menu.vercel.app',
    result: '+35% de commandes en ligne',
    screenshot: '/images/realisations/hotbox.jpg',
    icon: <UtensilsCrossed size={26} />,
    accent: 'from-orange-500/20 via-amber-500/10 to-vclow-purple/10',
    tags: ['Menu QR Code', 'React', 'Tailwind CSS', 'Mobile First'],
    features: [
      'Consultation instantanée sans téléchargement d’application',
      'Mise à jour des tarifs et plats en temps réel',
      'Navigation optimisée pour smartphone avec catégories dynamiques',
      'Temps de chargement inférieur à 0.8 seconde'
    ],
    year: '2025'
  },
  {
    id: 'hermoor-caishen',
    name: 'Hermoor Caishen',
    category: 'E-commerce',
    description: "Plateforme e-commerce haute performance dédiée à la cosmétique et aux produits de soin, avec catalogue interactif et parcours d'achat optimisé.",
    detailedDescription: "Hermoor Caishen est une marque de produits cosmétiques. Nous avons développé une plateforme e-commerce moderne et sécurisée offrant un catalogue produit filtrable, un panier dynamique et une prise de commande fluide avec confirmation automatisée.",
    status: 'Client actif',
    link: 'https://hermoor-caishen.vercel.app',
    result: '+45% de conversion web',
    screenshot: '/images/realisations/hermoor-caishen.jpg',
    icon: <ShoppingBag size={26} />,
    accent: 'from-pink-500/20 via-purple-500/10 to-vclow-purple/10',
    tags: ['E-commerce', 'Paiement Sécurisé', 'Catalogue Produits', 'Vite / React'],
    features: [
      'Catalogue produits avec filtres avancés par gamme',
      'Tunnel de commande optimisé sans friction',
      'Gestion des paniers et stocks synchronisée',
      'Design responsive élégant adapté aux visuels cosmétiques'
    ],
    year: '2025'
  },
  {
    id: 'sys-gest',
    name: 'SYS-GEST',
    category: 'Gestion & Logistique',
    description: "Système de gestion sur mesure pour sociétés de livraison : suivi des colis, gestion des agences, répartition des coursiers et dashboards en temps réel.",
    detailedDescription: "SYS-GEST est une solution métier conçue pour répondre aux défis logistiques des entreprises de livraison en Tunisie. L'application centralise les opérations, permet d'imprimer les bordereaux et offre un suivi des colis étape par étape.",
    status: 'Client actif',
    link: 'https://sys-gest-demo.vercel.app',
    result: 'Suivi colis 100% automatisé',
    screenshot: '/images/realisations/sys-gest.jpg',
    icon: <Truck size={26} />,
    accent: 'from-yellow-500/20 via-amber-500/10 to-vclow-purple/10',
    tags: ['Système de Gestion', 'Dashboard KPI', 'Logistique', 'Scan QR/Code-barres'],
    features: [
      'Suivi en temps réel des colis (en attente, en cours, livré, retour)',
      'Espace d’administration multi-agences et coursiers',
      'Import / Export automatique des bordereaux et factures',
      'Statistiques de performance et tableaux de bord KPI'
    ],
    year: '2025'
  },
  {
    id: '33s',
    name: '33S — Thirty Three Space',
    category: 'Coworking & Services',
    description: "Site web pour espace de coworking : présentation des espaces, formules d'abonnement, équipement et système de réservation en ligne pour membres et visiteurs.",
    detailedDescription: "Thirty Three Space est un espace de coworking et d'événementiel moderne. VC LOW a réalisé le site vitrine officiel permettant aux professionnels de découvrir les bureaux privatifs, les salles de réunion et d'effectuer des réservations directes.",
    status: 'Client actif',
    link: 'https://thirtythreespace.com/',
    result: 'Réservation en ligne 24/7',
    screenshot: '/images/realisations/thirtythreespace.jpg',
    icon: <Building2 size={26} />,
    accent: 'from-teal-500/20 via-emerald-500/10 to-vclow-purple/10',
    tags: ['Coworking', 'Réservation Web', 'Vitrine Premium', 'SEO Local'],
    features: [
      'Présentation dynamique des espaces (Bureaux, Salles de réunion, Flex desk)',
      'Module de réservation en ligne pour réserver des créneaux',
      'Présentation des tarifs, équipements et avantages membres',
      'Référencement SEO local optimisé sur la région'
    ],
    year: '2026'
  }
];

const categories = [
  'Tous',
  'Restauration',
  'E-commerce',
  'Gestion & Logistique',
  'Coworking & Services'
] as const;

const Realisations: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const { t, i18n } = useTranslation();

  const allLabel = t('realisations.all');

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'Tous' || project.category === selectedCategory;
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const stats = [
    { label: t('realisations.stat1'), value: '4+', icon: <CheckCircle2 className="text-vclow-purple" size={24} /> },
    { label: t('realisations.stat2'), value: '99.9%', icon: <Zap className="text-vclow-yellow" size={24} /> },
    { label: t('realisations.stat3'), value: '+40%', icon: <TrendingUp className="text-vclow-purple" size={24} /> },
    { label: t('realisations.stat4'), value: '< 1s', icon: <Sparkles className="text-vclow-yellow" size={24} /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="Nos Réalisations | Projets & Études de Cas - VC LOW"
        description="Découvrez nos projets d'ingénierie digitale réels : menus QR code, e-commerce, systèmes de gestion logistique et sites vitrines de coworking."
        path="/realisations"
      />

      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 reveal">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-vclow-purple/10 border border-vclow-purple/20 rounded-full text-vclow-purple font-black text-xs uppercase tracking-widest mb-6">
          <Sparkles size={16} /> {t('realisations.badge')}
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-tight text-vclow-black">
          {t('realisations.title')} <br />
          <span className="text-vclow-purple">{t('realisations.titleHighlight')}</span>
        </h1>
        <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
          {t('realisations.subtitle')}
        </p>
      </div>

      {/* KPI Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 reveal">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-vclow-gray/60 p-6 rounded-[2rem] border border-gray-100/80 flex flex-col items-center text-center shadow-sm">
            <div className="mb-3">{stat.icon}</div>
            <span className="text-3xl md:text-4xl font-heading font-black text-vclow-black">{stat.value}</span>
            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Interactive Controls Bar (Filters + Search) */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white p-4 md:p-6 rounded-[2.5rem] border border-gray-100 shadow-xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => {
            const count =
              cat === 'Tous'
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat).length;
            const isActive = selectedCategory === cat;
            const label = cat === 'Tous' ? t('realisations.all') : cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-black transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-vclow-purple text-white shadow-lg shadow-vclow-purple/30 scale-105'
                    : 'bg-vclow-gray text-gray-600 hover:bg-gray-200/80'
                }`}
              >
                <span>{label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder={t('realisations.search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-vclow-gray rounded-2xl border-none focus:ring-2 focus:ring-vclow-purple text-sm font-medium outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:border-vclow-purple/30 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between reveal active relative"
            >
              {/* Header Gradient Accent */}
              <div className={`h-28 bg-gradient-to-r ${project.accent} p-8 flex items-center justify-between relative overflow-hidden`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-vclow-purple">
                    {project.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-vclow-purple block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-black text-vclow-black">{project.name}</h3>
                  </div>
                </div>

                <span className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 bg-green-100 text-green-700 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                  {project.status}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Result Badge */}
                {project.result && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-vclow-yellow/20 text-vclow-black text-xs font-black rounded-xl border border-vclow-yellow/50 shadow-sm">
                      <Zap size={14} className="text-vclow-purple fill-current" />
                      {project.result}
                    </span>
                  </div>
                )}

                {/* Screenshot Frame */}
                {project.screenshot && (
                  <div 
                    onClick={() => setActiveModalProject(project)}
                    className="relative my-4 rounded-2xl overflow-hidden border border-gray-200/80 bg-gray-900 shadow-md group-hover:shadow-2xl transition-all cursor-pointer group/frame"
                  >
                    {/* Browser Header Bar */}
                    <div className="h-7 bg-gray-900 border-b border-gray-800 flex items-center px-4 justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <div className="bg-gray-800/80 px-4 py-0.5 rounded-full text-[10px] text-gray-400 font-mono flex items-center gap-1">
                        <Globe size={10} className="text-green-400" />
                        <span className="truncate max-w-[200px]">{project.link || 'vclow.com'}</span>
                      </div>
                      <div className="w-8"></div>
                    </div>

                    {/* Screenshot Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.screenshot}
                        alt={`Aperçu ${project.name}`}
                        className="w-full h-full object-cover object-top opacity-90 group-hover/frame:opacity-100 group-hover/frame:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/frame:opacity-100 transition-opacity flex items-end justify-center p-4">
                        <span className="px-4 py-2 bg-white text-vclow-black font-black text-xs rounded-xl shadow-lg flex items-center gap-2">
                          <Search size={14} /> Découvrir la fiche projet
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-vclow-gray text-gray-700 text-[11px] font-bold rounded-lg border border-gray-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Actions Bar */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-black uppercase tracking-wider text-vclow-purple hover:text-vclow-black transition-colors flex items-center gap-1"
                  >
                    {t('realisations.details')}
                  </button>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-vclow-black hover:bg-vclow-purple text-white font-black text-xs rounded-xl transition-all shadow-md hover:scale-105"
                    >
                      {t('realisations.visit')} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-vclow-gray rounded-[3rem] mb-24">
          <Layers className="mx-auto text-gray-300 mb-4" size={56} />
          <h3 className="text-2xl font-black text-vclow-black">{t('realisations.noResult')}</h3>
          <p className="text-gray-500 mt-2">{t('realisations.noResultSub')}</p>
          <button
            onClick={() => {
              setSelectedCategory('Tous');
              setSearchQuery('');
            }}
            className="mt-6 px-6 py-3 bg-vclow-purple text-white font-black text-xs uppercase tracking-widest rounded-xl"
          >
            {t('realisations.reset')}
          </button>
        </div>
      )}

      {/* Modal / Drawer Detail Project */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-[3rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-100 shadow-2xl relative animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-gray-100 hover:bg-vclow-purple hover:text-white rounded-full flex items-center justify-center transition-all shadow-md"
            >
              <X size={20} />
            </button>

            {/* Modal Image Header */}
            {activeModalProject.screenshot && (
              <div className="relative h-72 md:h-96 w-full bg-gray-900 overflow-hidden">
                <img
                  src={activeModalProject.screenshot}
                  alt={activeModalProject.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
                  <div>
                    <span className="px-3 py-1 bg-vclow-purple text-white text-[10px] font-black uppercase tracking-widest rounded-md mb-2 inline-block">
                      {activeModalProject.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-black text-white">{activeModalProject.name}</h2>
                  </div>
                  {activeModalProject.result && (
                    <span className="px-4 py-2 bg-vclow-yellow text-vclow-black text-xs font-black rounded-xl shadow-lg flex items-center gap-1.5">
                      <Zap size={14} /> {activeModalProject.result}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Modal Content Body */}
            <div className="p-8 md:p-10 space-y-8">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-vclow-purple mb-2">{t('realisations.presentation')}</h4>
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  {activeModalProject.detailedDescription || activeModalProject.description}
                </p>
              </div>

              {/* Features List */}
              {activeModalProject.features && (
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-vclow-purple mb-4">{t('realisations.features')}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeModalProject.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 bg-vclow-gray p-4 rounded-2xl border border-gray-100">
                        <CheckCircle2 size={18} className="text-vclow-purple flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-gray-800">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-vclow-purple mb-3">{t('realisations.technologies')}</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-vclow-purple/10 text-vclow-purple text-xs font-black rounded-xl">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
                {activeModalProject.link && (
                  <a
                    href={activeModalProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 bg-vclow-purple hover:bg-vclow-black text-white font-black rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    {t('realisations.access')} <ExternalLink size={18} />
                  </a>
                )}
                <Link
                  to="/rendez-vous"
                  onClick={() => setActiveModalProject(null)}
                  className="w-full sm:w-auto px-8 py-4 bg-vclow-yellow text-vclow-black hover:bg-vclow-black hover:text-white font-black rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  {t('realisations.similar')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <Testimonials />

      {/* Bottom Banner CTA */}
      <div className="bg-vclow-black text-white rounded-[4rem] p-12 md:p-20 text-center reveal my-16 relative overflow-hidden">
        <h3 className="text-3xl md:text-5xl font-black mb-6 relative z-10">{t('realisations.ctaTitle')}</h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 relative z-10 font-light">
          {t('realisations.ctaText')}
        </p>
        <Link
          to="/rendez-vous"
          className="inline-flex px-10 py-5 bg-vclow-purple text-white font-black rounded-2xl hover:bg-white hover:text-vclow-black transition-all shadow-2xl shadow-vclow-purple/30 relative z-10"
        >
          {t('realisations.ctaBtn')}
        </Link>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-vclow-purple/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Realisations;
