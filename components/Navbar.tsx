
import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';
import { PageId } from '../App';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  isScrolled: boolean;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language || 'fr';

  const toggleLanguage = (lang: 'fr' | 'ar') => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const navLinks: { name: string; id: PageId }[] = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.services'), id: 'services' },
    { name: t('nav.realisations'), id: 'realisations' },
    { name: t('nav.faq'), id: 'faq' },
    { name: t('nav.blog'), id: 'blog' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center transition-transform hover:scale-105 focus:outline-none"
            >
              <Logo className="h-40 md:h-48 w-auto" hideTagline={isScrolled} />
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 lg:space-x-3 ltr:space-x-1 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                    currentPage === link.id 
                      ? 'bg-vclow-purple text-white shadow-lg shadow-vclow-purple/20' 
                      : 'text-gray-700 hover:bg-vclow-gray hover:text-vclow-purple'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              {/* Language Switcher */}
              <div className="flex items-center bg-vclow-gray p-1 rounded-xl border border-gray-200 text-xs font-black">
                <button
                  onClick={() => toggleLanguage('fr')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    currentLang === 'fr' ? 'bg-vclow-purple text-white shadow-sm' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => toggleLanguage('ar')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    currentLang === 'ar' ? 'bg-vclow-purple text-white shadow-sm' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  AR
                </button>
              </div>

              <button
                onClick={() => handleNavClick('appointment')}
                className="bg-vclow-black text-white px-6 py-3 rounded-xl text-sm font-black hover:bg-vclow-purple transition-all transform hover:scale-105 shadow-xl"
              >
                {t('nav.appointment')}
              </button>
              <button
                onClick={() => handleNavClick('learning')}
                className="bg-vclow-yellow text-vclow-black px-6 py-3 rounded-xl text-sm font-black hover:bg-white transition-all transform hover:scale-105 shadow-xl animate-pulse"
              >
                VC Low Learning
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language Selector */}
            <div className="flex items-center bg-vclow-gray p-1 rounded-xl border border-gray-200 text-xs font-black">
              <button
                onClick={() => toggleLanguage('fr')}
                className={`px-2 py-1 rounded-lg ${currentLang === 'fr' ? 'bg-vclow-purple text-white' : 'text-gray-600'}`}
              >
                FR
              </button>
              <button
                onClick={() => toggleLanguage('ar')}
                className={`px-2 py-1 rounded-lg ${currentLang === 'ar' ? 'bg-vclow-purple text-white' : 'text-gray-600'}`}
              >
                AR
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-2xl bg-vclow-gray text-vclow-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute top-full w-full left-0 border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-4 rounded-2xl text-lg font-bold transition-all ${
                  currentPage === link.id 
                    ? 'bg-vclow-purple text-white' 
                    : 'text-gray-700 hover:bg-vclow-gray'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('appointment')}
              className="w-full mt-4 bg-vclow-black text-white py-5 rounded-2xl text-center font-black"
            >
              {t('nav.appointment')}
            </button>
            <button
              onClick={() => handleNavClick('learning')}
              className="w-full mt-2 bg-vclow-yellow text-vclow-black py-5 rounded-2xl text-center font-black animate-pulse"
            >
              VC Low Learning
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
