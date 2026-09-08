import React from 'react';
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { PageId } from '../App';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61587312005031&locale=fr_FR" },
    { Icon: Linkedin, url: "https://www.linkedin.com/company/vc-low/?viewAsMember=true" },
    { Icon: Instagram, url: "https://www.instagram.com/_vclow_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" }
  ];

  const navLinks: { labelKey: string; id: PageId }[] = [
    { labelKey: 'nav.home', id: 'home' },
    { labelKey: 'nav.about', id: 'about' },
    { labelKey: 'nav.services', id: 'services' },
    { labelKey: 'nav.realisations', id: 'realisations' },
    { labelKey: 'nav.faq', id: 'faq' },
    { labelKey: 'nav.blog', id: 'blog' },
  ];

  const serviceLinks: { labelKey: string; id: PageId }[] = [
    { labelKey: 'services.items.vitrine.title', id: 'service-vitrine' },
    { labelKey: 'services.items.ecommerce.title', id: 'service-ecommerce' },
    { labelKey: 'services.items.crm.title', id: 'service-crm' },
    { labelKey: 'services.items.mobile.title', id: 'service-mobile' },
    { labelKey: 'services.items.mvp.title', id: 'service-mvp' },
    { labelKey: 'services.items.seo.title', id: 'service-seo' },
    { labelKey: 'services.items.sponsoring.title', id: 'service-sponsoring' },
    { labelKey: 'services.items.shooting.title', id: 'service-shooting' },
    { labelKey: 'services.items.branding.title', id: 'service-branding' },
  ];

  return (
    <footer className="bg-vclow-black text-white pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Logo className="h-20 w-auto" light={true} />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              {t('footer.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-vclow-purple transition-all hover:-translate-y-2 border border-white/5 group"
                  aria-label="Réseau social"
                >
                  <Icon size={20} className="group-hover:text-vclow-yellow transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 relative">
              {t('footer.navigation')}
              <div className="absolute -bottom-3 left-0 w-10 h-1 bg-vclow-yellow"></div>
            </h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => onNavigate(link.id)} className="hover:text-vclow-yellow transition-colors flex items-center gap-2">
                    <span>•</span> {t(link.labelKey)}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => onNavigate('learning')} className="hover:text-vclow-yellow transition-colors flex items-center gap-2">
                  <span>•</span> VC Low Learning
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 relative">
              {t('footer.expertise')}
              <div className="absolute -bottom-3 left-0 w-10 h-1 bg-vclow-yellow"></div>
            </h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              {serviceLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => onNavigate(link.id)} className="hover:text-vclow-yellow transition-colors text-left">
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 relative">
              {t('footer.contact')}
              <div className="absolute -bottom-3 left-0 w-10 h-1 bg-vclow-yellow"></div>
            </h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-start gap-4">
                <MapPin className="text-vclow-yellow w-6 h-6 flex-shrink-0" />
                <span className="text-lg">Montplaisir, Tunis</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-vclow-yellow w-6 h-6 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-bold">+216 52 882 880</span>
                  <span className="text-lg font-bold">+216 52 882 930</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-vclow-yellow w-6 h-6 flex-shrink-0" />
                <span className="text-lg">contact@vclow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 font-medium text-sm">© {new Date().getFullYear()} VC LOW – {t('footer.rights')}</p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 font-medium">
            <button onClick={() => onNavigate('mentions-legales')} className="hover:text-vclow-yellow transition-colors">
              {t('footer.legal')}
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('politique-confidentialite')} className="hover:text-vclow-yellow transition-colors">
              {t('footer.privacy')}
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('cgv')} className="hover:text-vclow-yellow transition-colors">
              {t('footer.cgv')}
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-vclow-yellow font-black uppercase text-xs tracking-widest hover:text-white transition-colors"
          >
            {t('footer.backToTop')}
            <div className="w-10 h-10 border border-vclow-yellow rounded-full flex items-center justify-center group-hover:bg-vclow-yellow group-hover:text-black transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>

      <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] bg-vclow-purple opacity-10 rounded-full blur-[120px]"></div>
    </footer>
  );
};

export default Footer;
