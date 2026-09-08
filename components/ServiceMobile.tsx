
import React from 'react';
import { PageId } from '../App';
import { Smartphone, Globe, Shield, Zap, Heart, Layers, Code2, Rocket } from 'lucide-react';

interface ServicePageProps {
  onNavigate: (page: PageId) => void;
}

const ServiceMobile: React.FC<ServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 reveal">
        <div>
          <h2 className="text-vclow-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">Applications Web & Mobiles</h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-8 leading-tight">
            Innovez sans<br />
            <span className="text-vclow-purple">Compromis.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            Nous transformons vos idées les plus ambitieuses en produits digitaux performants. De l'UX stratégique au déploiement scalable, nous créons des apps qui marquent les esprits.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 bg-vclow-black text-white font-black rounded-2xl hover:bg-vclow-purple transition-all shadow-xl"
            >
              Développer mon App
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-vclow-gray rounded-[3rem] p-4 aspect-square flex items-center justify-center overflow-hidden border border-gray-100 shadow-inner">
             {/* TODO: remplacer par vraie photo (équipe / écran de projet réel / bureau VC LOW) */}
             <img 
               src="/images/service-mobile.svg" 
               alt="Applications Web & Mobiles VC LOW" 
               loading="lazy"
               className="rounded-[2rem] shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-700"
             />
          </div>
          <div className="absolute -top-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-50 animate-float">
             <Heart className="text-red-500 mb-2" size={32} />
             <p className="text-2xl font-black">UX/UI</p>
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">User Centric Design</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="mb-32 reveal">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Pourquoi développer une application sur mesure ?</h2>
          <p className="text-xl text-gray-600">Dans un monde saturé, seule l'excellence de l'expérience utilisateur permet de se démarquer.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-8 p-10 bg-vclow-gray rounded-[3rem]">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-vclow-purple flex-shrink-0 shadow-sm">
              <Layers size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-black mb-4">Scalabilité Totale</h4>
              <p className="text-gray-500 leading-relaxed">Nos architectures sont conçues pour supporter des milliers d'utilisateurs simultanés sans perte de performance.</p>
            </div>
          </div>
          <div className="flex gap-8 p-10 bg-vclow-gray rounded-[3rem]">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-vclow-purple flex-shrink-0 shadow-sm">
              <Code2 size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-black mb-4">Code Propre & Durable</h4>
              <p className="text-gray-500 leading-relaxed">Nous utilisons les technologies les plus modernes (React, Node, Flutter) pour garantir la pérennité de votre investissement.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-vclow-black text-white rounded-[4rem] p-12 md:p-24 mb-32 reveal">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">Notre Processus de Développement</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Stratégie UX", desc: "Définition des personas et des parcours utilisateurs." },
            { step: "02", title: "UI Design", desc: "Création d'une interface visuelle moderne et impactante." },
            { step: "03", title: "Dev Agile", desc: "Développement itératif avec des tests continus." },
            { step: "04", title: "Déploiement", desc: "Mise en production sécurisée et monitoring." }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-black text-white/10 mb-6">{item.step}</div>
              <h4 className="text-xl font-bold mb-4 text-vclow-yellow">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-white/10"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 reveal">
        <div className="p-10 border border-gray-100 rounded-[3rem] hover:border-vclow-purple/20 transition-all">
          <Shield className="text-vclow-purple mb-6" size={40} />
          <h4 className="text-2xl font-black mb-4">Sécurité Native</h4>
          <p className="text-gray-500">Protection des données utilisateurs et conformité RGPD intégrées dès le départ.</p>
        </div>
        <div className="p-10 border border-gray-100 rounded-[3rem] hover:border-vclow-purple/20 transition-all">
          <Zap className="text-vclow-purple mb-6" size={40} />
          <h4 className="text-2xl font-black mb-4">Vitesse de Réponse</h4>
          <p className="text-gray-500">Optimisation des requêtes et du cache pour une fluidité absolue.</p>
        </div>
        <div className="p-10 border border-gray-100 rounded-[3rem] hover:border-vclow-purple/20 transition-all">
          <Rocket className="text-vclow-purple mb-6" size={40} />
          <h4 className="text-2xl font-black mb-4">Support & Évolution</h4>
          <p className="text-gray-500">Nous vous accompagnons après le lancement pour faire évoluer votre app.</p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-vclow-purple text-white rounded-[4rem] p-12 md:p-24 text-center reveal">
        <h2 className="text-4xl md:text-6xl font-black mb-8">Donnez vie à votre vision digitale.</h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Que ce soit pour une startup ou une grande entreprise, nous avons l'expertise pour bâtir votre succès mobile.
        </p>
        <button 
          onClick={() => onNavigate('contact')}
          className="px-12 py-6 bg-vclow-yellow text-vclow-black font-black text-xl rounded-2xl hover:bg-white transition-all shadow-2xl"
        >
          Démarrer mon projet d'App
        </button>
      </div>
    </div>
  );
};

export default ServiceMobile;
