import React from 'react';
import SEO from './SEO';
import { Lock, Database, UserCheck, Eye, ShieldAlert } from 'lucide-react';

const PolitiqueConfidentialite: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO
        title="Politique de Confidentialité | VC LOW"
        description="Découvrez comment VC LOW protège vos données personnelles et respecte votre vie privée."
        path="/politique-de-confidentialite"
        noindex={true}
      />

      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-vclow-purple/10 text-vclow-purple mb-6">
          <Lock size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-4 text-vclow-black">
          Politique de Confidentialité
        </h1>
        <p className="text-gray-500 font-medium">
          Dernière mise à jour : {new Date().getFullYear()}
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">
        {/* Section 1 : Introduction */}
        <section className="bg-vclow-gray p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-black mb-4 text-vclow-black">
            1. Engagement et protection des données
          </h2>
          <p>
            VC LOW s'engage fermement à respecter et protéger la vie privée de l'ensemble de ses clients, prospects et visiteurs. La présente politique décrit comment nous collectons, utilisons et protégeons les informations confidentielles recueillies sur notre plateforme.
          </p>
        </section>

        {/* Section 2 : Données collectées */}
        <section className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-vclow-black flex items-center gap-3">
            <Database className="text-vclow-purple" size={24} />
            2. Données collectées et bases de données
          </h2>
          <p className="mb-4">
            Dans le cadre de nos services et via nos formulaires en ligne (stockés de façon sécurisée dans Google Firebase Cloud Firestore), nous collectons les données suivantes :
          </p>
          <div className="space-y-4">
            <div className="bg-vclow-gray/60 p-4 rounded-2xl">
              <strong className="text-vclow-purple">Formulaire de contact (`contacts`) :</strong>
              <p className="text-sm text-gray-600 mt-1">Nom, prénom, adresse e-mail, numéro de téléphone, nom d'entreprise et contenu du message projet.</p>
            </div>
            <div className="bg-vclow-gray/60 p-4 rounded-2xl">
              <strong className="text-vclow-purple">Demande de rendez-vous (`appointments`) :</strong>
              <p className="text-sm text-gray-600 mt-1">Nom, e-mail, numéro de téléphone, créneau horaire sélectionné, type de consultation souhaité.</p>
            </div>
            <div className="bg-vclow-gray/60 p-4 rounded-2xl">
              <strong className="text-vclow-purple">Inscription Newsletter (`newsletter_subscriptions`) :</strong>
              <p className="text-sm text-gray-600 mt-1">Adresse e-mail et date d'abonnement.</p>
            </div>
            <div className="bg-vclow-gray/60 p-4 rounded-2xl">
              <strong className="text-vclow-purple">Inscription VC Low Learning (`course_registrations`) :</strong>
              <p className="text-sm text-gray-600 mt-1">Nom, e-mail, numéro de téléphone, formation sélectionnée (FlutterFlow/Firebase, Power BI, IA).</p>
            </div>
          </div>
        </section>

        {/* Section 3 : Finalités & Conservations */}
        <section className="bg-vclow-gray p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-black mb-4 text-vclow-black">
            3. Finalité du traitement et durée de conservation
          </h2>
          <p className="mb-4">
            Vos données personnelles sont traitées exclusivement pour :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Répondre à vos demandes de devis et d'informations.</li>
            <li>Organiser et confirmer vos rendez-vous stratégiques avec notre équipe technique.</li>
            <li>Vous transmettre notre newsletter technique et nos analyses de rentabilité (si consenti).</li>
            <li>Gérer les inscriptions et le suivi des sessions de formation VC Low Learning.</li>
          </ul>
          <p>
            Vos données sont conservées pendant une durée maximale de <strong>3 ans</strong> après votre dernier contact ou jusqu'à la demande explicite de suppression de votre part.
          </p>
        </section>

        {/* Section 4 : Cookies et Analytics */}
        <section className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black mb-4 text-vclow-black flex items-center gap-3">
            <Eye className="text-vclow-purple" size={24} />
            4. Cookies et outils d'analyse
          </h2>
          <p className="mb-4">
            Ce site utilise des outils de mesure d'audience et de performance marketing (Google Analytics 4, Meta Pixel). Ces scripts ne s'activent qu'avec votre consentement préalable exprès via notre bandeau de gestion des cookies.
          </p>
          <p>
            Vous pouvez modifier vos choix en matière de cookies à tout moment en réinitialisant vos préférences de navigation.
          </p>
        </section>

        {/* Section 5 : Droits des utilisateurs */}
        <section className="bg-vclow-black text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl">
          <h2 className="text-2xl font-black mb-4 text-vclow-yellow flex items-center gap-3">
            <UserCheck size={24} />
            5. Vos droits (Accès, Modification, Suppression)
          </h2>
          <p className="mb-4 text-gray-300">
            Conformément à la réglementation sur la protection des données personnelles, vous disposez à tout moment d'un droit d'accès, de rectification, de portabilité et de suppression de vos données.
          </p>
          <p className="text-gray-300">
            Pour exercer ces droits, adressez votre demande accompagnée de votre nom et e-mail à : <br />
            <strong className="text-white">contact@vclow.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
