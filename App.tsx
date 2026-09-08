
import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Methodology from './components/Methodology';
import Learning from './components/Learning';
import ServicesGlobal from './components/ServicesGlobal';
import ServiceVitrine from './components/ServiceVitrine';
import ServiceEcommerce from './components/ServiceEcommerce';
import ServiceCRM from './components/ServiceCRM';
import ServiceMobile from './components/ServiceMobile';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Realisations from './components/Realisations';
import ServiceDetail from './components/ServiceDetail';
import SEO from './components/SEO';
import NotFound from './components/NotFound';
import WhatsAppButton from './components/WhatsAppButton';
import MentionsLegales from './components/MentionsLegales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite';
import CGV from './components/CGV';
import Analytics from './components/Analytics';
import CookieBanner from './components/CookieBanner';
import Testimonials from './components/Testimonials';

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'service-vitrine'
  | 'service-ecommerce'
  | 'service-crm'
  | 'service-mobile'
  | 'service-mvp'
  | 'service-seo'
  | 'service-sponsoring'
  | 'service-shooting'
  | 'service-branding'
  | 'faq'
  | 'blog'
  | 'realisations'
  | 'contact'
  | 'appointment'
  | 'learning'
  | 'mentions-legales'
  | 'politique-confidentialite'
  | 'cgv';

// Mapping PageId <-> vraie URL. C'est ce qui manquait dans la v1 :
// chaque "page" a maintenant sa propre adresse indexable par Google.
const PAGE_TO_PATH: Record<PageId, string> = {
  'home': '/',
  'about': '/a-propos',
  'services': '/services',
  'service-vitrine': '/services/site-vitrine',
  'service-ecommerce': '/services/e-commerce',
  'service-crm': '/services/crm-gestion',
  'service-mobile': '/services/applications-mobiles',
  'service-mvp': '/services/mvp-express',
  'service-seo': '/services/seo',
  'service-sponsoring': '/services/sponsoring-publicite',
  'service-shooting': '/services/shooting-produits',
  'service-branding': '/services/branding',
  'faq': '/faq',
  'blog': '/blog',
  'realisations': '/realisations',
  'contact': '/contact',
  'appointment': '/rendez-vous',
  'learning': '/vc-low-learning',
  'mentions-legales': '/mentions-legales',
  'politique-confidentialite': '/politique-de-confidentialite',
  'cgv': '/cgv',
};

const PATH_TO_PAGE: Record<string, PageId> = Object.entries(PAGE_TO_PATH).reduce(
  (acc, [pageId, path]) => {
    acc[path] = pageId as PageId;
    return acc;
  },
  {} as Record<string, PageId>
);

const HomePage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => (
  <div className="animate-in fade-in duration-500">
    <SEO
      title="VC LOW | Agence de développement web & outils de gestion sur mesure en Tunisie"
      description="VC LOW conçoit des sites web, e-commerce, applications et systèmes de gestion sur mesure pour PME et startups en Tunisie. Devis rapide, délais courts."
      path="/"
    />
    <Hero onNavigate={onNavigate} />
    <div className="py-24 bg-vclow-gray">
      <About />
    </div>
    <Testimonials />
    <div className="py-24 bg-vclow-black text-white rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-4 text-center mb-20">
        <h3 className="text-4xl md:text-6xl font-black relative z-10">Nos Chiffres Clés</h3>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white/5 p-16 rounded-[4rem] text-center border border-white/10 hover:bg-vclow-purple transition-all group">
          <span className="text-8xl md:text-9xl font-black text-vclow-yellow block group-hover:scale-110 transition-transform">-70%</span>
          <span className="text-xl font-bold text-gray-400 mt-4 block">De réduction du temps de développement</span>
        </div>
        <div className="bg-white/5 p-16 rounded-[4rem] text-center border border-white/10 hover:bg-vclow-purple transition-all group">
          <span className="text-8xl md:text-9xl font-black text-vclow-yellow block group-hover:scale-110 transition-transform">-30%</span>
          <span className="text-xl font-bold text-gray-400 mt-4 block">De coûts opérationnels grâce à l'automatisation</span>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage: PageId = PATH_TO_PAGE[location.pathname] ?? 'home';

  const onNavigate = (page: PageId) => {
    navigate(PAGE_TO_PATH[page]);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      (window as any).setupReveal?.();
    }, 100);
  }, [location.pathname]);

  const withTransition = (el: React.ReactNode) => (
    <div className="pt-32 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">{el}</div>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Analytics />
      <Navbar isScrolled={isScrolled} currentPage={currentPage} onNavigate={onNavigate} />

      <main className="flex-grow pt-40 pb-20">
        <Routes>
          <Route path="/" element={<HomePage onNavigate={onNavigate} />} />
          <Route
            path="/a-propos"
            element={withTransition(
              <>
                <SEO
                  title="À Propos de VC LOW | Notre mission et notre approche"
                  description="Découvrez la mission, la vision et l'approche de VC LOW : une ingénierie digitale pensée pour le ROI des PME et startups tunisiennes."
                  path="/a-propos"
                />
                <About />
              </>
            )}
          />
          <Route
            path="/services"
            element={withTransition(
              <>
                <SEO
                  title="Nos Services | Sites Web, E-commerce, CRM, Apps Mobiles - VC LOW"
                  description="Sites vitrine, e-commerce, systèmes de gestion sur mesure et applications mobiles. Découvrez les services de VC LOW pour votre transformation digitale."
                  path="/services"
                />
                <ServicesGlobal onNavigate={onNavigate} />
              </>
            )}
          />
          <Route
            path="/services/site-vitrine"
            element={withTransition(
              <>
                <SEO
                  title="Site Vitrine Professionnel en Tunisie | VC LOW"
                  description="Création de sites vitrine professionnels, optimisés SEO et conçus pour convertir. Délais courts, tarifs adaptés aux PME tunisiennes."
                  path="/services/site-vitrine"
                />
                <ServiceVitrine onNavigate={onNavigate} />
              </>
            )}
          />
          <Route
            path="/services/e-commerce"
            element={withTransition(
              <>
                <SEO
                  title="Création de Site E-commerce en Tunisie | VC LOW"
                  description="Plateformes e-commerce haute performance avec paiement en ligne, gestion de stock et marketing automatisé, sur mesure pour votre activité."
                  path="/services/e-commerce"
                />
                <ServiceEcommerce onNavigate={onNavigate} />
              </>
            )}
          />
          <Route
            path="/services/crm-gestion"
            element={withTransition(
              <>
                <SEO
                  title="Systèmes de Gestion & CRM sur mesure | VC LOW"
                  description="Automatisez vos processus métier avec un système de gestion ou un CRM sur mesure : dashboard KPI, centralisation des données, gain de productivité."
                  path="/services/crm-gestion"
                />
                <ServiceCRM onNavigate={onNavigate} />
              </>
            )}
          />
          <Route
            path="/services/applications-mobiles"
            element={withTransition(
              <>
                <SEO
                  title="Développement d'Applications Web & Mobiles | VC LOW"
                  description="Applications web et mobiles sur mesure, scalables et centrées sur l'expérience utilisateur, pour iOS et Android."
                  path="/services/applications-mobiles"
                />
                <ServiceMobile onNavigate={onNavigate} />
              </>
            )}
          />
          {/* Chaque service marketing (MVP Express, SEO, Sponsoring, Shooting, Branding) est
              défini une seule fois dans servicesData.ts et rendu par cette route générique :
              ajouter un futur service ne demande qu'une entrée de données, pas une nouvelle route. */}
          <Route path="/services/:slug" element={withTransition(<ServiceDetail onNavigate={onNavigate} />)} />
          <Route
            path="/faq"
            element={withTransition(<FAQ />)}
          />
          <Route
            path="/blog"
            element={withTransition(<Blog onNavigate={onNavigate} />)}
          />
          <Route
            path="/blog/:postId"
            element={withTransition(<Blog onNavigate={onNavigate} />)}
          />
          <Route
            path="/contact"
            element={withTransition(
              <>
                <SEO
                  title="Contact | Demandez votre devis - VC LOW"
                  description="Contactez VC LOW pour un devis personnalisé : site web, e-commerce, application ou système de gestion sur mesure. Réponse en moins de 24h."
                  path="/contact"
                />
                <Contact />
              </>
            )}
          />
          <Route
            path="/rendez-vous"
            element={
              <div className="pt-32 pb-20 bg-vclow-purple text-white animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-screen flex items-center">
                <SEO
                  title="Prendre Rendez-vous | Analyse Gratuite - VC LOW"
                  description="Réservez une analyse gratuite et personnalisée de votre organisation avec VC LOW. Appel, visio ou rencontre directe."
                  path="/rendez-vous"
                />
                <AppointmentForm />
              </div>
            }
          />
          <Route
            path="/vc-low-learning"
            element={withTransition(<Learning />)}
          />
          <Route
            path="/realisations"
            element={withTransition(<Realisations />)}
          />
          <Route path="/mentions-legales" element={withTransition(<MentionsLegales />)} />
          <Route path="/politique-de-confidentialite" element={withTransition(<PolitiqueConfidentialite />)} />
          <Route path="/cgv" element={withTransition(<CGV />)} />
          <Route path="*" element={<NotFound onNavigate={onNavigate} />} />
        </Routes>
      </main>

      <CookieBanner />
      <WhatsAppButton />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default App;
