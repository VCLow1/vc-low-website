import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, Plus, Minus, Sparkles } from 'lucide-react';
import { PageId } from '../App';
import { servicesContent } from './servicesData';
import SEO from './SEO';

interface ServiceDetailProps {
  onNavigate: (page: PageId) => void;
}

// Template unique pour les services "marketing / croissance" (MVP Express, SEO,
// Sponsoring, Shooting Produits, Branding). Le contenu vient de servicesData.ts :
// pour ajouter un futur service, il suffit d'ajouter une entrée aux données,
// pas de dupliquer un composant entier.
const ServiceDetail: React.FC<ServiceDetailProps> = ({ onNavigate }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const service = servicesContent.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <SEO title="Service introuvable | VC LOW" description="Ce service n'existe pas ou a été déplacé." path={`/services/${slug ?? ''}`} />
        <h1 className="text-3xl font-black mb-6">Service introuvable</h1>
        <button onClick={() => navigate('/services')} className="text-vclow-purple font-black uppercase text-xs tracking-widest">
          ← Retour à nos services
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO title={service.metaTitle} description={service.metaDescription} path={service.path} />

      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 reveal">
        <div>
          <h2 className="text-vclow-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">{service.category}</h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-8 leading-tight">
            {service.titleLine1}<br />
            <span className="text-vclow-purple">{service.titleHighlight}</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">{service.intro}</p>
          <div className="flex gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 bg-vclow-black text-white font-black rounded-2xl hover:bg-vclow-purple transition-all shadow-xl"
            >
              {service.ctaLabel}
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-vclow-gray rounded-[3rem] p-4 aspect-square flex items-center justify-center overflow-hidden border border-gray-100 shadow-inner">
            <img
              src={service.heroImage}
              alt={service.titleHighlight}
              loading="lazy"
              className="rounded-[2rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-50 animate-float">
            <Sparkles className="text-vclow-purple mb-2" size={32} />
            <p className="text-2xl font-black">{service.heroStatValue}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{service.heroStatLabel}</p>
          </div>
        </div>
      </div>

      {/* Processus */}
      <div className="mb-32 reveal">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Notre méthode</h2>
          <p className="text-xl text-gray-600">Un process clair, en 4 étapes, du premier échange à la livraison.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.process.map((step, i) => (
            <div key={i} className="p-8 bg-vclow-gray rounded-[2.5rem] border border-transparent hover:border-vclow-purple/20 transition-all hover:bg-white hover:shadow-xl group relative">
              <div className="text-vclow-purple/20 font-black text-5xl mb-4 group-hover:text-vclow-purple/40 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tarifs */}
      <div className="bg-vclow-black text-white rounded-[4rem] p-12 md:p-24 mb-32 text-center reveal">
        <h2 className="text-3xl md:text-5xl font-black mb-6">Tarification</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">{service.pricingNote}</p>
        <button
          onClick={() => onNavigate('appointment')}
          className="px-10 py-5 bg-vclow-purple text-white font-black rounded-2xl hover:bg-white hover:text-vclow-black transition-all shadow-xl"
        >
          Demander un devis gratuit
        </button>
      </div>

      {/* Mini FAQ */}
      <div className="max-w-3xl mx-auto mb-32 reveal">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Questions fréquentes</h2>
        </div>
        <div className="space-y-4">
          {service.faqs.map((faq, i) => (
            <div key={i} className="bg-vclow-gray rounded-[2rem] overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-lg"
              >
                {faq.q}
                {openFaq === i ? <Minus className="text-vclow-purple flex-shrink-0" /> : <Plus className="text-vclow-purple flex-shrink-0" />}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div className="bg-vclow-purple text-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden reveal">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Discutons de votre projet</h2>
          <p className="text-xl text-white/80 mb-12">
            Chaque besoin est différent. Parlons du vôtre pour construire une solution qui vous correspond vraiment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-12 py-6 bg-vclow-yellow text-vclow-black font-black text-xl rounded-2xl hover:bg-white transition-all shadow-2xl"
            >
              Demander mon devis gratuit
            </button>
            <button
              onClick={() => onNavigate('realisations')}
              className="px-12 py-6 bg-white/10 border-2 border-white/30 text-white font-black text-xl rounded-2xl hover:bg-white/20 transition-all"
            >
              Voir nos réalisations
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default ServiceDetail;
