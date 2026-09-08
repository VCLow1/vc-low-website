
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import SEO from './SEO';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, i18n } = useTranslation();

  const faqsFr = [
    {
      question: "Qu'est-ce que VC LOW et que fait votre société ?",
      answer: "VC LOW est une agence de développement web et de solutions digitales en Tunisie. Nous concevons des sites web professionnels, des plateformes e-commerce, des applications web et des systèmes de gestion sur mesure pour entreprises, startups et PME."
    },
    {
      question: "Quels services propose VC LOW en développement digital ?",
      answer: "Nous proposons : Création de sites web vitrine professionnels, Développement de sites e-commerce avec paiement en ligne, Conception de logiciels de gestion personnalisés, Automatisation des processus métiers, Développement d'applications web et plateformes SaaS, Maintenance et support technique."
    },
    {
      question: "Combien coûte la création d'un site web en Tunisie avec VC LOW ?",
      answer: "Le prix dépend du type de projet : Site vitrine simple : à partir de 1200 DT. Site e-commerce avec paiement en ligne : tarif personnalisé selon fonctionnalités. Solution sur mesure : devis détaillé après analyse."
    },
    {
      question: "Combien de temps faut-il pour développer un site ou une application ?",
      answer: "Les délais varient selon la complexité : Site vitrine : 1 à 3 semaines. Site e-commerce : 3 à 6 semaines. Application ou système sur mesure : selon cahier des charges."
    },
    {
      question: "VC LOW travaille-t-elle uniquement avec des entreprises en Tunisie ?",
      answer: "VC LOW est basée en Tunisie, mais nous accompagnons également des clients à l'international. Nos solutions digitales sont accessibles partout grâce aux technologies web."
    },
    {
      question: "Proposez-vous des solutions pour PME, startups et petites entreprises ?",
      answer: "Oui. Nous accompagnons les PME, startups, associations, cabinets professionnels, commerces et e-commerce. Nos solutions sont adaptées aux budgets et objectifs des petites et moyennes entreprises."
    },
    {
      question: "Est-ce que vous développez des logiciels de gestion personnalisés ?",
      answer: "Oui. Nous créons des systèmes de gestion sur mesure : gestion des clients, gestion des réservations, systèmes de recrutement, gestion financière et tableaux de bord, plateformes internes d'entreprise."
    },
    {
      question: "Assurez-vous la maintenance et le support après livraison ?",
      answer: "Oui. VC LOW propose un support technique, des mises à jour, des corrections de bugs et des améliorations évolutives. Nous restons disponibles après la mise en production."
    },
    {
      question: "Comment obtenir un devis pour un projet digital ?",
      answer: "Vous pouvez nous contacter via le formulaire sur le site, nous appeler directement ou envoyer un email avec votre besoin. Après analyse, nous vous envoyons un devis détaillé et personnalisé."
    },
    {
      question: "Pourquoi choisir VC LOW comme agence digitale en Tunisie ?",
      answer: "Choisir VC LOW, c'est bénéficier de solutions digitales sur mesure, d'une approche orientée performance, d'une expertise technique moderne et d'un accompagnement stratégique à des tarifs adaptés au marché tunisien."
    }
  ];

  const faqsAr = [
    {
      question: "ما هي VC LOW وماذا تفعل شركتكم؟",
      answer: "VC LOW هي وكالة تطوير ويب وحلول رقمية في تونس. نصمم مواقع ويب احترافية، ومنصات تجارة إلكترونية، وتطبيقات ويب وأنظمة إدارة مخصصة للشركات والناشئة والمؤسسات الصغيرة والمتوسطة."
    },
    {
      question: "ما هي الخدمات التي تقدمها VC LOW في التطوير الرقمي؟",
      answer: "نقدم: إنشاء مواقع عرض احترافية، تطوير مواقع تجارة إلكترونية مع الدفع الإلكتروني، تصميم برامج إدارة مخصصة، أتمتة العمليات التجارية، تطوير تطبيقات الويب ومنصات SaaS، الصيانة والدعم الفني."
    },
    {
      question: "كم يكلف إنشاء موقع ويب احترافي في تونس مع VC LOW؟",
      answer: "يعتمد السعر على نوع المشروع: موقع عرض بسيط: ابتداءً من 1200 دينار. موقع تجارة إلكترونية مع الدفع الإلكتروني: سعر مخصص حسب الوظائف. حل مخصص: عرض تفصيلي بعد التحليل."
    },
    {
      question: "كم من الوقت يستغرق تطوير موقع أو تطبيق؟",
      answer: "تتفاوت المهل حسب التعقيد: موقع عرض: من 1 إلى 3 أسابيع. موقع تجارة إلكترونية: من 3 إلى 6 أسابيع. التطبيق أو النظام المخصص: حسب المواصفات."
    },
    {
      question: "هل تعمل VC LOW فقط مع شركات في تونس؟",
      answer: "VC LOW مقرها تونس، لكننا نرافق أيضاً عملاء على المستوى الدولي. حلولنا الرقمية متاحة في كل مكان بفضل تقنيات الويب."
    },
    {
      question: "هل تقدمون حلولاً للمؤسسات الصغيرة والمتوسطة والشركات الناشئة؟",
      answer: "نعم. نرافق الشركات الصغيرة والمتوسطة، الشركات الناشئة، الجمعيات، المكاتب المهنية والتجارة الإلكترونية. حلولنا مكيّفة مع ميزانيات وأهداف الشركات الصغيرة والمتوسطة."
    },
    {
      question: "هل تطورون برامج إدارة مخصصة؟",
      answer: "نعم. ننشئ أنظمة إدارة مخصصة: إدارة العملاء، إدارة الحجوزات، أنظمة التوظيف، الإدارة المالية ولوحات التحكم، المنصات الداخلية للمؤسسات."
    },
    {
      question: "هل تضمنون الصيانة والدعم بعد التسليم؟",
      answer: "نعم. تقدم VC LOW الدعم الفني والتحديثات وإصلاح الأخطاء والتحسينات التطورية. نبقى متاحين بعد الإطلاق لضمان استقرار المشروع."
    },
    {
      question: "كيف أحصل على عرض سعر لمشروع رقمي؟",
      answer: "يمكنك التواصل معنا عبر نموذج الموقع، الاتصال بنا مباشرة أو إرسال بريد إلكتروني بحاجتك. بعد التحليل، نرسل لك عرضاً تفصيلياً ومخصصاً."
    },
    {
      question: "لماذا تختار VC LOW كوكالة رقمية في تونس؟",
      answer: "اختيار VC LOW يعني الاستفادة من حلول رقمية مخصصة، ونهج موجه نحو الأداء، وخبرة تقنية حديثة، ومرافقة استراتيجية بأسعار مناسبة للسوق التونسي."
    }
  ];

  const faqs = i18n.language === 'ar' ? faqsAr : faqsFr;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsFr.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="FAQ | Questions fréquentes sur nos services digitaux - VC LOW"
        description="Prix, délais, zone géographique, maintenance : toutes les réponses aux questions fréquentes sur les services de VC LOW en Tunisie."
        path="/faq"
        jsonLd={faqJsonLd}
      />
      <div className="text-center mb-20 reveal">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-vclow-purple/10 text-vclow-purple rounded-2xl mb-6">
          <HelpCircle size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-6">{t('faq.title')}</h1>
        <p className="text-xl text-gray-600">{t('faq.subtitle')}</p>
      </div>

      <div className="space-y-4 mb-32 reveal">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-[2rem] transition-all duration-300 ${openIndex === index ? 'border-vclow-purple bg-white shadow-xl' : 'border-gray-100 bg-vclow-gray hover:border-gray-200'}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-8 text-left"
            >
              <span className={`text-lg font-bold ${openIndex === index ? 'text-vclow-purple' : 'text-vclow-black'}`}>
                {faq.question}
              </span>
              <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-vclow-purple text-white rotate-180' : 'bg-white text-gray-400'}`}>
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-8 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
