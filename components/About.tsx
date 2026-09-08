
import React from 'react';
import { Target, Zap, Eye, Rocket, Quote, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Qui sommes-nous */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="reveal">
          <h2 className="text-vclow-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">{t('about.badge')}</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black mb-8 leading-tight">
            {t('about.title')}
          </h3>
          <div className="space-y-6 text-lg text-gray-700">
            <p>{t('about.subtitle')}</p>
            <p className="font-medium text-vclow-black border-l-4 border-vclow-yellow pl-6 py-2 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6">
              {t('about.p1')}
            </p>
            <p>{t('about.p2')}</p>
          </div>
        </div>
        
        <div className="relative reveal" style={{transitionDelay: '0.2s'}}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="bg-vclow-purple p-8 rounded-[2.5rem] text-white shadow-xl transform hover:-rotate-2 transition-transform">
                <Eye className="mb-4 text-vclow-yellow" size={32} />
                <h4 className="font-black text-xl mb-2">{t('about.visionTitle')}</h4>
                <p className="text-sm opacity-80">{t('about.visionDesc')}</p>
              </div>
              <div className="bg-vclow-gray p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-lg transition-all">
                <ShieldCheck className="mb-4 text-vclow-purple" size={32} />
                <h4 className="font-black text-xl mb-2">{t('about.qualityTitle')}</h4>
                <p className="text-sm text-gray-500">{t('about.qualityDesc')}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-vclow-yellow p-8 rounded-[2.5rem] text-vclow-black shadow-xl transform hover:rotate-2 transition-transform">
                <Rocket className="mb-4 text-vclow-purple" size={32} />
                <h4 className="font-black text-xl mb-2">{t('about.missionTitle')}</h4>
                <p className="text-sm opacity-80">{t('about.missionDesc')}</p>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] border-2 border-vclow-purple/10 flex flex-col items-center justify-center text-center">
                <p className="text-4xl font-black text-vclow-purple">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{t('about.roiFocus')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophie */}
      <div className="reveal bg-vclow-black text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Quote className="text-vclow-yellow mx-auto mb-8 opacity-50" size={60} />
          <h4 className="text-vclow-yellow font-heading text-3xl md:text-5xl font-black mb-8">
            {t('about.quote')}
          </h4>
          <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
            {t('about.quoteText')} <span className="text-white font-bold">{t('about.quoteHighlight')}</span>
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-vclow-purple opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-vclow-yellow opacity-10 blur-[100px]"></div>
      </div>
    </div>
  );
};

export default About;
