import React from 'react';
import { Home, ArrowRight, AlertTriangle } from 'lucide-react';
import { PageId } from '../App';
import SEO from './SEO';

interface NotFoundProps {
  onNavigate: (page: PageId) => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center animate-in fade-in zoom-in duration-500">
      <SEO
        title="Page introuvable (404) | VC LOW"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil ou découvrez nos services d'ingénierie digitale."
        path="/404"
      />
      <div className="w-24 h-24 bg-vclow-purple/10 text-vclow-purple rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-vclow-purple/20">
        <AlertTriangle size={48} />
      </div>
      
      <span className="text-vclow-purple font-black uppercase text-sm tracking-[0.2em] mb-4 block">Erreur 404</span>
      <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 text-vclow-black">
        Page introuvable
      </h1>
      <p className="text-xl text-gray-600 max-w-lg mx-auto mb-12 font-light">
        Désolé, la page que vous recherchez n'existe pas, a été déplacée ou son adresse a changé.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <button
          onClick={() => onNavigate('home')}
          className="w-full sm:w-auto px-8 py-4 bg-vclow-black text-white font-black rounded-2xl hover:bg-vclow-purple transition-all shadow-xl flex items-center justify-center gap-3"
        >
          <Home size={20} /> Retour à l'accueil
        </button>

        <button
          onClick={() => onNavigate('services')}
          className="w-full sm:w-auto px-8 py-4 bg-vclow-gray text-vclow-black font-black rounded-2xl hover:bg-gray-200 transition-all flex items-center justify-center gap-3"
        >
          Découvrir nos services <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default NotFound;
