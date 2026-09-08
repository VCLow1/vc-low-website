
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { PageId } from '../App';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-40 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content (Increased to 7 columns with extra right margin) */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10 reveal lg:pr-10">
            <div className="space-y-4">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-vclow-black leading-[0.95] tracking-tighter">
                {t('hero.title1')}<br />
                <span className="text-vclow-purple">{t('hero.title2')}</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 tracking-tight leading-tight uppercase">
                {t('hero.subtitle')}
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
              <button
                onClick={() => onNavigate('appointment')}
                className="btn-3d-push relative overflow-hidden flex items-center justify-center px-10 py-6 bg-vclow-purple text-white font-black text-xl rounded-2xl group transition-all shadow-2xl w-full sm:w-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full skew-x-[-20deg] group-hover:animate-shimmer pointer-events-none"></div>
                <Sparkles className="mr-3 w-6 h-6 text-vclow-yellow" />
                {t('hero.ctaPrimary')}
                <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform rtl:rotate-180" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="flex items-center justify-center px-8 py-6 border-2 border-vclow-black text-vclow-black font-bold rounded-2xl hover:bg-vclow-black hover:text-white transition-all w-full sm:w-auto shadow-sm"
              >
                {t('hero.ctaSecondary')}
              </button>
            </div>
          </div>
          
          {/* Right Side: Image */}
          <div className="lg:col-span-5 relative perspective-1000 hidden lg:block reveal" style={{transitionDelay: '0.3s'}}>
            <div className="preserve-3d transform rotate-y-3 hover:rotate-0 transition-transform duration-1000">
                <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(114,38,161,0.25)] border-[12px] border-white bg-white group">
                  <img 
                    src="/images/hero.jpg" 
                    alt="Infrastructures et solutions digitales VC LOW" 
                    loading="eager"
                    className="w-full h-[500px] object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vclow-purple/30 via-transparent to-transparent pointer-events-none rounded-[2.5rem]"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
