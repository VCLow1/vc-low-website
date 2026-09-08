
import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: <Search size={28} />,
      title: "Audit Stratégique",
      desc: "Nous analysons vos goulots d'étranglement et vos opportunités de croissance pour définir une roadmap ROI-centrique."
    },
    {
      num: "02",
      icon: <PenTool size={28} />,
      title: "Architecture UX",
      desc: "Conception d'un parcours utilisateur fluide dont l'unique but est de maximiser vos conversions."
    },
    {
      num: "03",
      icon: <Code2 size={28} />,
      title: "Ingénierie Agile",
      desc: "Développement robuste avec des technologies de pointe pour garantir rapidité, sécurité et scalabilité."
    },
    {
      num: "04",
      icon: <Rocket size={28} />,
      title: "Optimisation & ROI",
      desc: "Lancement, tracking des performances et ajustements continus pour garantir l'atteinte de vos objectifs business."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20 reveal">
        <h2 className="text-vclow-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">Notre Méthodologie</h2>
        <h3 className="text-4xl md:text-5xl font-heading font-black">Comment nous travaillons</h3>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-vclow-gray hidden lg:block -translate-y-1/2 z-0"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((s, i) => (
            <div key={i} className="reveal group bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all" style={{transitionDelay: `${i * 0.1}s`}}>
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 bg-vclow-yellow text-vclow-black rounded-2xl flex items-center justify-center group-hover:bg-vclow-purple group-hover:text-white transition-all transform group-hover:rotate-12">
                  {s.icon}
                </div>
                <span className="text-4xl font-black text-vclow-gray group-hover:text-vclow-yellow/30 transition-colors">{s.num}</span>
              </div>
              <h4 className="text-2xl font-black mb-4">{s.title}</h4>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Methodology;
