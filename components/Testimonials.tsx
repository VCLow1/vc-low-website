import React from 'react';
import { Quote, Star, TrendingUp, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface Testimonial {
  id: string;
  nameKey: string;
  roleKey: string;
  company: string;
  quoteKey: string;
  resultKey: string;
  rating: number;
  avatarInitials: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    nameKey: 'testimonial1.name',
    roleKey: 'testimonial1.role',
    company: 'HOTBOX Restaurant',
    quoteKey: 'testimonial1.quote',
    resultKey: 'testimonial1.result',
    rating: 5,
    avatarInitials: 'HB',
  },
  {
    id: '2',
    nameKey: 'testimonial2.name',
    roleKey: 'testimonial2.role',
    company: 'SYS-GEST',
    quoteKey: 'testimonial2.quote',
    resultKey: 'testimonial2.result',
    rating: 5,
    avatarInitials: 'SG',
  },
  {
    id: '3',
    nameKey: 'testimonial3.name',
    roleKey: 'testimonial3.role',
    company: 'Hermoor Caishen',
    quoteKey: 'testimonial3.quote',
    resultKey: 'testimonial3.result',
    rating: 5,
    avatarInitials: 'HC',
  },
];

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
}

const Testimonials: React.FC<TestimonialsProps> = () => {
  const { t, i18n } = useTranslation();

  const testimonialsFr = [
    {
      id: '1', name: 'Équipe Dirigeante', role: 'Fondateur & Gérant', company: 'HOTBOX Restaurant',
      quote: "Le menu digital QR code développé par VC LOW a totalement fluidifié la prise de commande en salle et sur mobile. Nos clients adorent la rapidité d'affichage.",
      result: '+35% de commandes en ligne', rating: 5, avatarInitials: 'HB',
    },
    {
      id: '2', name: 'Direction Logistique', role: 'Directeur des Opérations', company: 'SYS-GEST',
      quote: "Le système de gestion sur mesure a automatisé le suivi de nos colis et l'affectation aux coursiers, éliminant ainsi les erreurs de saisie manuelle.",
      result: 'Suivi colis 100% automatisé', rating: 5, avatarInitials: 'SG',
    },
    {
      id: '3', name: 'Management', role: 'Gérante', company: 'Hermoor Caishen',
      quote: "Une équipe réactive qui comprend les enjeux e-commerce. La plateforme est fluide, rapide et nos clients passent leurs commandes sans aucun ralentissement.",
      result: '+45% de conversion web', rating: 5, avatarInitials: 'HC',
    },
  ];

  const testimonialsAr = [
    {
      id: '1', name: 'الفريق المؤسس', role: 'المؤسس والمدير', company: 'HOTBOX Restaurant',
      quote: 'القائمة الرقمية عبر رمز QR التي طورتها VC LOW سهّلت تماماً عملية تلقي الطلبات في القاعة وعلى الجوال. يعشق عملاؤنا سرعة العرض.',
      result: '+35% من الطلبات عبر الإنترنت', rating: 5, avatarInitials: 'HB',
    },
    {
      id: '2', name: 'إدارة اللوجستيك', role: 'مدير العمليات', company: 'SYS-GEST',
      quote: 'أتمتة نظام الإدارة المخصص تتبع الطرود وتوزيع السائقين، مما أزال أخطاء الإدخال اليدوي تماماً.',
      result: 'تتبع الطرود بنسبة 100%', rating: 5, avatarInitials: 'SG',
    },
    {
      id: '3', name: 'الإدارة', role: 'المديرة', company: 'Hermoor Caishen',
      quote: 'فريق سريع الاستجابة يفهم تحديات التجارة الإلكترونية. المنصة سلسة وسريعة وعملاؤنا يكملون طلباتهم دون أي تأخير.',
      result: '+45% معدل تحويل ويب', rating: 5, avatarInitials: 'HC',
    },
  ];

  const items = i18n.language === 'ar' ? testimonialsAr : testimonialsFr;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-vclow-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">{t('testimonials.badge')}</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black mb-6 text-vclow-black">
            {t('testimonials.title')}
          </h3>
          <p className="text-xl text-gray-600 font-light">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-vclow-gray p-8 md:p-10 rounded-[2.5rem] border border-gray-100 hover:border-vclow-purple/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-vclow-yellow">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  {item.result && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-vclow-purple/10 text-vclow-purple text-xs font-black uppercase tracking-wider">
                      <TrendingUp size={14} />
                      {item.result}
                    </span>
                  )}
                </div>

                <Quote className="text-vclow-purple/20 w-12 h-12 mb-4 group-hover:text-vclow-purple/40 transition-colors" />

                <p className="text-gray-700 text-lg leading-relaxed font-normal mb-8 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200/60">
                <div className="w-12 h-12 rounded-2xl bg-vclow-purple text-white font-black text-lg flex items-center justify-center shadow-md">
                  {item.avatarInitials}
                </div>
                <div>
                  <h4 className="font-black text-vclow-black text-base flex items-center gap-2">
                    {item.name}
                    <CheckCircle size={16} className="text-green-500" />
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {item.role} – <span className="text-vclow-purple font-bold">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
