import React from 'react';
import SEO from './SEO';
import { FileText, CheckCircle, CreditCard, Code, ShieldCheck } from 'lucide-react';

const CGV: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO
        title="Conditions Générales de Vente (CGV) | VC LOW"
        description="Consultez les conditions générales de vente et de prestation de services de VC LOW."
        path="/cgv"
        noindex={true}
      />

      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-vclow-purple/10 text-vclow-purple mb-6">
          <FileText size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-4 text-vclow-black">
          Conditions Générales de Vente
        </h1>
        <p className="text-gray-500 font-medium">
          Prestations de services informatiques & développement logiciel
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">
        {/* Section 1 : Objet */}
        <section className="bg-vclow-gray p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-black mb-4 text-vclow-black">
            1. Champ d'application & Objet
          </h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des prestations de services numériques (création de sites vitrines, plateformes e-commerce, systèmes de gestion CRM/ERP, applications mobiles, intégration d'IA, consulting et formations) conclues entre la société <strong>VC LOW SARL</strong> et ses clients professionnels ou particuliers.
          </p>
        </section>

        {/* Section 2 : Devis & Commandes */}
        <section className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black mb-4 text-vclow-black flex items-center gap-3">
            <CheckCircle className="text-vclow-purple" size={24} />
            2. Devis, commande et délais de livraison
          </h2>
          <p className="mb-4">
            Toute commande fait l'objet d'un devis détaillé spécifiant le cahier des charges, le prix total HT/TTC, l'échéancier de paiement ainsi que les délais d'exécution prévisionnels.
          </p>
          <p className="mb-4">
            La commande n'est définitive qu'à réception du devis signé avec la mention « Bon pour accord », accompagné du versement de l'acompte initial spécifié.
          </p>
          <p>
            VC LOW s'engage à respecter les délais annoncés sous réserve du respect par le client de ses propres engagements (fourniture des contenus, accès aux systèmes, validation des étapes).
          </p>
        </section>

        {/* Section 3 : Modalités de paiement */}
        <section className="bg-vclow-gray p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-black mb-4 text-vclow-black flex items-center gap-3">
            <CreditCard className="text-vclow-purple" size={24} />
            3. Tarifs et modalités de paiement
          </h2>
          <p className="mb-4">
            Sauf accord particulier mentionné sur le devis, le règlement des prestations s'effectue généralement selon l'échéancier suivant :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 font-medium">
            <li><strong>40% d'acompte</strong> à la commande et au démarrage du projet.</li>
            <li><strong>30% de versement intermédiaire</strong> lors de la présentation de la version bêta/maquette fonctionnelle.</li>
            <li><strong>30% de solde</strong> à la livraison finale et mise en production.</li>
          </ul>
          <p>
            Les paiements s'effectuent par virement bancaire, chèque ou selon les modalités convenues sur la facture.
          </p>
        </section>

        {/* Section 4 : Propriété intellectuelle */}
        <section className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black mb-4 text-vclow-black flex items-center gap-3">
            <Code className="text-vclow-purple" size={24} />
            4. Propriété intellectuelle du code livré
          </h2>
          <p className="mb-4">
            VC LOW cède au client l'ensemble des droits d'utilisation et d'exploitation du code source, des bases de données et des créations graphiques développés spécifiquement pour son projet.
          </p>
          <p>
            Cette cession prend effet <strong>exclusivement à compter du paiement intégral du prix</strong> par le client. VC LOW conserve le droit de mentionner la réalisation du projet à titre de référence commerciale dans son portfolio.
          </p>
        </section>

        {/* Section 5 : Garantie et maintenance */}
        <section className="bg-vclow-black text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl">
          <h2 className="text-2xl font-black mb-4 text-vclow-yellow flex items-center gap-3">
            <ShieldCheck size={24} />
            5. Garantie commerciale & maintenance
          </h2>
          <p className="mb-4 text-gray-300">
            Toute prestation livrée bénéficie d'une <strong>garantie corrective de 30 jours</strong> à compter de la livraison en production, couvrant la correction de tout bug ou dysfonctionnement par rapport au cahier des charges initial.
          </p>
          <p className="text-gray-300">
            Au-delà de cette période, les évolutions ou maintenances font l'objet d'un contrat de maintenance ou d'un devis complémentaire.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CGV;
