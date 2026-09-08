
import React from 'react';
import { PageId } from '../App';
import { Database, BarChart3, Settings, Users, LayoutDashboard, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

interface ServicePageProps {
  onNavigate: (page: PageId) => void;
}

const ServiceCRM: React.FC<ServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 reveal">
        <div>
          <h2 className="text-vclow-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">Systèmes de Gestion & CRM</h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-8 leading-tight">
            Pilotez votre<br />
            <span className="text-vclow-purple">Performance.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            Dites adieu aux fichiers Excel éparpillés et aux processus manuels chronophages. Nous développons des solutions de gestion intelligentes qui centralisent vos données et automatisent vos opérations.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 bg-vclow-black text-white font-black rounded-2xl hover:bg-vclow-purple transition-all shadow-xl"
            >
              Digitaliser ma gestion
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-vclow-gray rounded-[3rem] p-4 aspect-square flex items-center justify-center overflow-hidden border border-gray-100 shadow-inner">
             {/* TODO: remplacer par vraie photo (équipe / écran de projet réel / bureau VC LOW) */}
             <img 
               src="/images/service-crm.svg" 
               alt="Systèmes de Gestion & CRM Sur-Mesure VC LOW" 
               loading="lazy"
               className="rounded-[2rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700"
             />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-50 animate-float">
             <TrendingUp className="text-vclow-purple mb-2" size={32} />
             <p className="text-2xl font-black">+40%</p>
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Gain de Productivité</p>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-vclow-black text-white rounded-[4rem] p-12 md:p-24 mb-32 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8">La gestion manuelle est le frein n°1 de votre croissance.</h2>
            <p className="text-xl text-gray-400 mb-10">
              Perte d'informations, erreurs de saisie, manque de visibilité sur les KPI... Ces inefficacités coûtent cher à votre entreprise.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-vclow-yellow">
                <Zap size={24} />
                <span className="text-lg font-bold">Automatisation des tâches répétitives</span>
              </div>
              <div className="flex items-center gap-4 text-vclow-yellow">
                <Users size={24} />
                <span className="text-lg font-bold">Centralisation de la relation client (CRM)</span>
              </div>
              <div className="flex items-center gap-4 text-vclow-yellow">
                <LayoutDashboard size={24} />
                <span className="text-lg font-bold">Dashboards décisionnels en temps réel</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 text-center">
              <p className="text-4xl font-black text-vclow-purple mb-2">0%</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Erreur de Saisie</p>
            </div>
            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 text-center">
              <p className="text-4xl font-black text-vclow-purple mb-2">100%</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Visibilité Data</p>
            </div>
            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 text-center">
              <p className="text-4xl font-black text-vclow-purple mb-2">24/7</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Accès Cloud</p>
            </div>
            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 text-center">
              <p className="text-4xl font-black text-vclow-purple mb-2">ROI</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Immédiat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-32 reveal">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Des solutions métier sur mesure</h2>
          <p className="text-xl text-gray-600">Nous ne forçons pas votre métier à s'adapter à un logiciel. Nous créons le logiciel qui s'adapte à votre métier.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: <Users />, title: "CRM Personnalisé", desc: "Gérez vos prospects, vos ventes et votre service client sur une interface unique." },
            { icon: <Database />, title: "Gestion de Stock & ERP", desc: "Suivez vos flux de marchandises et automatisez vos réapprovisionnements." },
            { icon: <BarChart3 />, title: "Reporting Avancé", desc: "Générez des rapports automatiques pour prendre des décisions basées sur des faits." },
            { icon: <Settings />, title: "Automatisation Workflow", desc: "Éliminez les goulots d'étranglement en automatisant vos processus de validation." },
            { icon: <ShieldCheck />, title: "Sécurité & Droits", desc: "Contrôlez finement qui accède à quoi avec une gestion des rôles granulaire." },
            { icon: <LayoutDashboard />, title: "Multi-Plateforme", desc: "Accédez à vos outils de gestion depuis votre bureau ou en déplacement sur mobile." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-vclow-gray rounded-[3rem] border border-transparent hover:border-vclow-purple/20 transition-all hover:bg-white hover:shadow-2xl group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-vclow-purple mb-8 group-hover:bg-vclow-purple group-hover:text-white transition-all shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black mb-4">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-vclow-purple text-white rounded-[4rem] p-12 md:p-24 text-center reveal">
        <h2 className="text-4xl md:text-6xl font-black mb-8">Reprenez le contrôle de votre activité.</h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Ne laissez plus la complexité administrative freiner votre ambition. Passez à la gestion 2.0 avec VC LOW.
        </p>
        <button 
          onClick={() => onNavigate('contact')}
          className="px-12 py-6 bg-vclow-yellow text-vclow-black font-black text-xl rounded-2xl hover:bg-white transition-all shadow-2xl"
        >
          Demander une démo personnalisée
        </button>
      </div>
    </div>
  );
};

export default ServiceCRM;
