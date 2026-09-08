
import React from 'react';
import { PageId } from '../App';
import { Search, Smartphone, Zap, Shield, Target, MousePointer2, BarChart } from 'lucide-react';

interface ServicePageProps {
  onNavigate: (page: PageId) => void;
}

const ServiceVitrine: React.FC<ServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 reveal">
        <div>
          <h2 className="text-vclow-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">Site Vitrine Stratégique</h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-8 leading-tight">
            Votre Image de Marque,<br />
            <span className="text-vclow-purple">Propulsée.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            Un site vitrine ne doit pas seulement être "beau". Il doit être un outil de persuasion massif qui transforme vos visiteurs en prospects qualifiés.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 bg-vclow-black text-white font-black rounded-2xl hover:bg-vclow-purple transition-all shadow-xl"
            >
              Lancer mon site
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-vclow-gray rounded-[3rem] p-4 aspect-square flex items-center justify-center overflow-hidden border border-gray-100 shadow-inner">
             {/* TODO: remplacer par vraie photo (équipe / écran de projet réel / bureau VC LOW) */}
             <img 
               src="/images/service-vitrine.svg" 
               alt="Site Vitrine Premium VC LOW" 
               loading="lazy"
               className="rounded-[2rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700"
             />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-50 animate-float">
             <Target className="text-vclow-purple mb-2" size={32} />
             <p className="text-2xl font-black">98%</p>
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Score SEO Technique</p>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-vclow-gray rounded-[4rem] p-12 md:p-24 mb-32 reveal">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Pourquoi 90% des sites vitrines échouent ?</h2>
          <p className="text-lg text-gray-600">
            La plupart des entreprises commettent l'erreur de créer un site "carte de visite" passif. Chez VC LOW, nous corrigeons ces failles critiques :
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="text-red-500 mb-6 font-black text-4xl opacity-20">01</div>
            <h4 className="text-xl font-bold mb-4">Absence de Stratégie SEO</h4>
            <p className="text-gray-500">Un beau site que personne ne trouve est un investissement perdu.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="text-red-500 mb-6 font-black text-4xl opacity-20">02</div>
            <h4 className="text-xl font-bold mb-4">Lenteur de Chargement</h4>
            <p className="text-gray-500">3 secondes d'attente = 50% de vos visiteurs qui partent chez la concurrence.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="text-red-500 mb-6 font-black text-4xl opacity-20">03</div>
            <h4 className="text-xl font-bold mb-4">UX Non-Optimisée</h4>
            <p className="text-gray-500">Si le visiteur ne sait pas quoi faire en 5 secondes, il quitte la page.</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-32 reveal">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">L'Approche VC LOW</h2>
          <p className="text-xl text-gray-600">Une méthodologie rigoureuse pour une autorité digitale forte.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Search />, title: "SEO Intégré", desc: "Optimisation sémantique et technique dès la conception." },
            { icon: <Smartphone />, title: "Mobile First", desc: "Une expérience parfaite sur tous les écrans." },
            { icon: <Zap />, title: "Performance", desc: "Temps de chargement ultra-rapides pour un meilleur ranking." },
            { icon: <Shield />, title: "Sécurité", desc: "Certificats SSL et protection contre les cyber-attaques." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-vclow-purple/20 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 bg-vclow-gray rounded-2xl flex items-center justify-center text-vclow-purple mb-6 group-hover:bg-vclow-purple group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-vclow-purple text-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden reveal">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Prêt à dominer votre marché ?</h2>
          <p className="text-xl text-white/80 mb-12">
            Ne laissez pas vos concurrents prendre l'avantage. Obtenez une infrastructure digitale qui travaille pour vous.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-12 py-6 bg-vclow-yellow text-vclow-black font-black text-xl rounded-2xl hover:bg-white transition-all shadow-2xl"
          >
            Demander mon devis gratuit
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default ServiceVitrine;
