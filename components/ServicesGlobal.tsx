
import React from 'react';
import { PageId } from '../App';
import { CheckCircle2, ArrowRight, Zap, BarChart3, ShieldCheck, Globe, Rocket, Search, Megaphone, Camera, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServicesGlobalProps {
  onNavigate: (page: PageId) => void;
}

const ServicesGlobal: React.FC<ServicesGlobalProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'service-vitrine' as PageId,
      titleKey: 'services.items.vitrine.title',
      descKey: 'services.items.vitrine.description',
      b1Key: 'services.items.vitrine.b1',
      b2Key: 'services.items.vitrine.b2',
      b3Key: 'services.items.vitrine.b3',
      icon: <Globe className="w-12 h-12 text-vclow-purple" />,
    },
    {
      id: 'service-ecommerce' as PageId,
      titleKey: 'services.items.ecommerce.title',
      descKey: 'services.items.ecommerce.description',
      b1Key: 'services.items.ecommerce.b1',
      b2Key: 'services.items.ecommerce.b2',
      b3Key: 'services.items.ecommerce.b3',
      icon: <Zap className="w-12 h-12 text-vclow-yellow" />,
    },
    {
      id: 'service-crm' as PageId,
      titleKey: 'services.items.crm.title',
      descKey: 'services.items.crm.description',
      b1Key: 'services.items.crm.b1',
      b2Key: 'services.items.crm.b2',
      b3Key: 'services.items.crm.b3',
      icon: <BarChart3 className="w-12 h-12 text-vclow-purple" />,
    },
    {
      id: 'service-mobile' as PageId,
      titleKey: 'services.items.mobile.title',
      descKey: 'services.items.mobile.description',
      b1Key: 'services.items.mobile.b1',
      b2Key: 'services.items.mobile.b2',
      b3Key: 'services.items.mobile.b3',
      icon: <ShieldCheck className="w-12 h-12 text-vclow-yellow" />,
    },
    {
      id: 'service-mvp' as PageId,
      titleKey: 'services.items.mvp.title',
      descKey: 'services.items.mvp.description',
      b1Key: 'services.items.mvp.b1',
      b2Key: 'services.items.mvp.b2',
      b3Key: 'services.items.mvp.b3',
      icon: <Rocket className="w-12 h-12 text-vclow-purple" />,
    },
    {
      id: 'service-seo' as PageId,
      titleKey: 'services.items.seo.title',
      descKey: 'services.items.seo.description',
      b1Key: 'services.items.seo.b1',
      b2Key: 'services.items.seo.b2',
      b3Key: 'services.items.seo.b3',
      icon: <Search className="w-12 h-12 text-vclow-yellow" />,
    },
    {
      id: 'service-sponsoring' as PageId,
      titleKey: 'services.items.sponsoring.title',
      descKey: 'services.items.sponsoring.description',
      b1Key: 'services.items.sponsoring.b1',
      b2Key: 'services.items.sponsoring.b2',
      b3Key: 'services.items.sponsoring.b3',
      icon: <Megaphone className="w-12 h-12 text-vclow-purple" />,
    },
    {
      id: 'service-shooting' as PageId,
      titleKey: 'services.items.shooting.title',
      descKey: 'services.items.shooting.description',
      b1Key: 'services.items.shooting.b1',
      b2Key: 'services.items.shooting.b2',
      b3Key: 'services.items.shooting.b3',
      icon: <Camera className="w-12 h-12 text-vclow-yellow" />,
    },
    {
      id: 'service-branding' as PageId,
      titleKey: 'services.items.branding.title',
      descKey: 'services.items.branding.description',
      b1Key: 'services.items.branding.b1',
      b2Key: 'services.items.branding.b2',
      b3Key: 'services.items.branding.b3',
      icon: <Palette className="w-12 h-12 text-vclow-purple" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20 reveal">
        <h2 className="text-vclow-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">{t('services.badge')}</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">{t('services.title')}</h1>
        <p className="text-xl text-gray-600 leading-relaxed">{t('services.description')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-vclow-gray p-10 rounded-[3rem] border border-transparent hover:border-vclow-purple/20 transition-all hover:shadow-2xl reveal"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="mb-8 p-4 bg-white rounded-3xl w-fit shadow-sm group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-black mb-4">{t(service.titleKey)}</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t(service.descKey)}</p>
            <ul className="space-y-3 mb-10">
              {[service.b1Key, service.b2Key, service.b3Key].map((bKey, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-vclow-purple w-5 h-5" />
                  {t(bKey)}
                </li>
              ))}
            </ul>
            <button
              onClick={() => onNavigate(service.id)}
              className="flex items-center gap-2 text-vclow-purple font-black uppercase text-sm tracking-widest group/btn"
            >
              {t('services.learnMore')}
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-vclow-black text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden reveal">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-8">{t('services.whyTitle')}</h2>
            <div className="space-y-8">
              {[
                { num: '01', titleKey: 'services.step1Title', descKey: 'services.step1Desc' },
                { num: '02', titleKey: 'services.step2Title', descKey: 'services.step2Desc' },
                { num: '03', titleKey: 'services.step3Title', descKey: 'services.step3Desc' },
              ].map((step) => (
                <div key={step.num} className="flex gap-6">
                  <div className="w-12 h-12 bg-vclow-purple rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="font-black">{step.num}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{t(step.titleKey)}</h4>
                    <p className="text-gray-400">{t(step.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
            <h3 className="text-2xl font-black mb-6 text-vclow-yellow">{t('services.impactTitle')}</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-gray-400 font-medium">{t('services.productivity')}</span>
                <span className="text-3xl font-black">+45%</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-gray-400 font-medium">{t('services.costs')}</span>
                <span className="text-3xl font-black text-vclow-yellow">-30%</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-gray-400 font-medium">{t('services.conversion')}</span>
                <span className="text-3xl font-black">+25%</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full mt-10 py-5 bg-vclow-purple text-white font-black rounded-2xl hover:bg-white hover:text-vclow-black transition-all"
            >
              {t('services.auditBtn')}
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-vclow-purple opacity-20 blur-[100px]"></div>
      </div>
    </div>
  );
};

export default ServicesGlobal;
