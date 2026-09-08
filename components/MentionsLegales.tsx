import React from 'react';
import SEO from './SEO';
import { ShieldCheck, Building, Mail, Phone, MapPin, Globe } from 'lucide-react';

const MentionsLegales: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO
        title="Mentions Légales | VC LOW"
        description="Consultez les mentions légales et informations réglementaires de VC LOW SARL (Tunisie)."
        path="/mentions-legales"
        noindex={true}
      />

      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-vclow-purple/10 text-vclow-purple mb-6">
          <ShieldCheck size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-4 text-vclow-black">
          Mentions Légales
        </h1>
        <p className="text-gray-500 font-medium">
          Dernière mise à jour : {new Date().getFullYear()}
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">
        {/* Section 1 : Éditeur du site */}
        <section className="bg-vclow-gray p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-vclow-black flex items-center gap-3">
            <Building className="text-vclow-purple" size={24} />
            1. Éditeur du site
          </h2>
          <p className="mb-4">
            Le site web <strong>www.vclow.com</strong> est édité et exploité par la société <strong>VC LOW SARL</strong>, société à responsabilité limitée de droit tunisien.
          </p>
          <ul className="space-y-3 font-medium">
            <li className="flex items-center gap-3">
              <MapPin className="text-vclow-purple flex-shrink-0" size={18} />
              <span><strong>Siège social :</strong> Montplaisir, Tunis, Tunisie</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-vclow-purple flex-shrink-0" size={18} />
              <span><strong>Adresse e-mail :</strong> contact@vclow.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-vclow-purple flex-shrink-0" size={18} />
              <span><strong>Téléphones :</strong> +216 52 882 880 / +216 52 882 930</span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="text-vclow-purple flex-shrink-0" size={18} />
              <span><strong>Directeur de la publication :</strong> Amine (Fondateur & Lead Engineer)</span>
            </li>
          </ul>
        </section>

        {/* Section 2 : Hébergement */}
        <section className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black mb-4 text-vclow-black">
            2. Hébergement du site
          </h2>
          <p className="mb-3">
            Le site est hébergé sur des infrastructures cloud haute disponibilité assurant la sécurité et la continuité du service :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 font-medium">
            <li><strong>Hébergeur principal :</strong> Vercel Inc. / Hostinger Inc.</li>
            <li><strong>Base de données :</strong> Google Cloud Platform / Firebase Cloud Firestore (Région Europe / Global)</li>
          </ul>
        </section>

        {/* Section 3 : Propriété intellectuelle */}
        <section className="bg-vclow-gray p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-black mb-4 text-vclow-black">
            3. Propriété intellectuelle
          </h2>
          <p className="mb-4">
            L'ensemble des contenus présents sur le site <strong>www.vclow.com</strong> (notamment la marque VC LOW, le logo, les textes, graphismes, illustrations, code source, éléments d'interface et concepts logiciciels) est la propriété exclusive de VC LOW SARL ou fait l'objet d'une autorisation d'utilisation accordée par ses partenaires.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou adaptation totale ou partielle de ces éléments, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l'autorisation écrite préalable de VC LOW.
          </p>
        </section>

        {/* Section 4 : Limites de responsabilité */}
        <section className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black mb-4 text-vclow-black">
            4. Limitation de responsabilité
          </h2>
          <p className="mb-4">
            VC LOW s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, VC LOW ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
          </p>
          <p>
            En conséquence, VC LOW décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MentionsLegales;
