
import React from 'react';
import { PageId } from '../App';
import { ShoppingCart, CreditCard, Package, BarChart3, Users, Zap, ShieldCheck } from 'lucide-react';

interface ServicePageProps {
  onNavigate: (page: PageId) => void;
}

const ServiceEcommerce: React.FC<ServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 reveal">
        <div>
          <h2 className="text-vclow-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">E-commerce Haute Performance</h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-8 leading-tight">
            Vendez Partout,<br />
            <span className="text-vclow-purple">Sans Limites.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            Nous concevons des boutiques en ligne robustes, rapides et optimisées pour la conversion. Votre succès e-commerce commence par une infrastructure technique irréprochable.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 bg-vclow-black text-white font-black rounded-2xl hover:bg-vclow-purple transition-all shadow-xl"
            >
              Lancer ma boutique
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-vclow-gray rounded-[3rem] p-4 aspect-square flex items-center justify-center overflow-hidden border border-gray-100 shadow-inner">
             {/* TODO: remplacer par vraie photo (équipe / écran de projet réel / bureau VC LOW) */}
             <img 
               src="/images/service-ecommerce.svg" 
               alt="Plateforme E-commerce Haute Performance VC LOW" 
               loading="lazy"
               className="rounded-[2rem] shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-700"
             />
          </div>
          <div className="absolute -top-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-50 animate-float">
             <BarChart3 className="text-vclow-purple mb-2" size={32} />
             <p className="text-2xl font-black">+150%</p>
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Croissance Moyenne CA</p>
          </div>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 reveal">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">Une architecture pensée pour le profit</h2>
          <p className="text-lg text-gray-600">
            L'e-commerce ne se résume pas à un catalogue de produits. C'est une machine complexe qui doit fonctionner sans friction.
          </p>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-vclow-gray rounded-2xl flex items-center justify-center text-vclow-purple flex-shrink-0">
                <ShoppingCart size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Parcours d'Achat Fluide</h4>
                <p className="text-gray-500">Réduction drastique des abandons de panier grâce à un checkout optimisé.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-vclow-gray rounded-2xl flex items-center justify-center text-vclow-purple flex-shrink-0">
                <CreditCard size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Paiement Multi-Canal</h4>
                <p className="text-gray-500">Intégration des solutions locales et internationales (Stripe, Konnect, etc.).</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-vclow-gray rounded-2xl flex items-center justify-center text-vclow-purple flex-shrink-0">
                <Package size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Gestion Logistique</h4>
                <p className="text-gray-500">Synchronisation automatique des stocks et suivi des commandes.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-vclow-black text-white p-12 rounded-[3rem] flex flex-col justify-center">
           <h3 className="text-2xl font-black mb-8 text-vclow-yellow">Nos engagements E-commerce</h3>
           <ul className="space-y-6">
              <li className="flex items-center gap-4">
                 <Zap className="text-vclow-yellow" />
                 <span className="text-lg">Vitesse de chargement &lt; 2s</span>
              </li>
              <li className="flex items-center gap-4">
                 <ShieldCheck className="text-vclow-yellow" />
                 <span className="text-lg">Sécurité transactionnelle maximale</span>
              </li>
              <li className="flex items-center gap-4">
                 <Users className="text-vclow-yellow" />
                 <span className="text-lg">Fidélisation client automatisée</span>
              </li>
              <li className="flex items-center gap-4">
                 <BarChart3 className="text-vclow-yellow" />
                 <span className="text-lg">Analytics & Tracking avancés</span>
              </li>
           </ul>
           <button 
             onClick={() => onNavigate('contact')}
             className="mt-12 py-5 bg-white text-vclow-black font-black rounded-2xl hover:bg-vclow-yellow transition-all"
           >
             Analyser mon potentiel e-commerce
           </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="text-center mb-32 reveal">
        <h2 className="text-3xl md:text-5xl font-black mb-12">L'E-commerce qui convertit vraiment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-12 bg-vclow-gray rounded-[3rem]">
            <p className="text-5xl font-black text-vclow-purple mb-4">+35%</p>
            <p className="text-gray-600 font-bold uppercase tracking-widest text-sm">Taux de Conversion</p>
          </div>
          <div className="p-12 bg-vclow-gray rounded-[3rem]">
            <p className="text-5xl font-black text-vclow-purple mb-4">-50%</p>
            <p className="text-gray-600 font-bold uppercase tracking-widest text-sm">Abandons de Panier</p>
          </div>
          <div className="p-12 bg-vclow-gray rounded-[3rem]">
            <p className="text-5xl font-black text-vclow-purple mb-4">+20%</p>
            <p className="text-gray-600 font-bold uppercase tracking-widest text-sm">Panier Moyen</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-vclow-purple text-white rounded-[4rem] p-12 md:p-24 text-center reveal">
        <h2 className="text-4xl md:text-6xl font-black mb-8">Votre empire digital commence ici.</h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Ne vous contentez pas d'un site e-commerce basique. Offrez-vous une machine de guerre commerciale.
        </p>
        <button 
          onClick={() => onNavigate('contact')}
          className="px-12 py-6 bg-vclow-yellow text-vclow-black font-black text-xl rounded-2xl hover:bg-white transition-all shadow-2xl"
        >
          Démarrer ma transformation
        </button>
      </div>
    </div>
  );
};

export default ServiceEcommerce;
