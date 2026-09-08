import React, { useState, useEffect } from 'react';
import { CONSENT_STORAGE_KEY, initAnalytics } from './Analytics';
import { Cookie, Shield, Check, X } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'granted');
    setShowBanner(false);
    initAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'denied');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-vclow-black text-white p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-vclow-purple/20 text-vclow-yellow flex items-center justify-center flex-shrink-0">
            <Cookie size={24} />
          </div>
          <div>
            <h3 className="font-heading font-black text-lg text-white">Vie privée & Analytics</h3>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              Nous utilisons des cookies analytiques anonymes pour mesurer l'audience et améliorer votre expérience sur le site VC LOW.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={handleAccept}
            className="flex-1 py-3 px-4 bg-vclow-purple hover:bg-vclow-yellow hover:text-vclow-black text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Check size={16} /> Accepter
          </button>
          <button
            onClick={handleDecline}
            className="py-3 px-4 bg-white/10 hover:bg-white/20 text-gray-300 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <X size={16} /> Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
