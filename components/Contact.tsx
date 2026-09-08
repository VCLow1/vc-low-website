
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign, Loader2 } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { trackConversion } from './Analytics';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = (data: Record<string, any>) => {
    const errors: Record<string, string> = {};
    if (!data.fullName || data.fullName.length < 3) {
      errors.fullName = t('contact.errName');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = t('contact.errEmail');
    }
    if (!data.subject) {
      errors.subject = t('contact.errSubject');
    }
    if (!data.message || data.message.length < 10) {
      errors.message = t('contact.errMessage');
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFormErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      createdAt: serverTimestamp(),
    };

    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, 'contacts'), data);
      trackConversion('contact_form_submit', { subject: data.subject });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      setError(t('contact.errorMsg'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20 reveal">
        <h2 className="text-vclow-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">{t('contact.badge')}</h2>
        <h3 className="text-4xl md:text-5xl font-heading font-black mb-6">{t('contact.title')}</h3>
        <p className="text-xl text-gray-600">{t('contact.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-vclow-gray p-8 rounded-[2rem] hover:shadow-lg transition-all border border-transparent hover:border-vclow-purple/10">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-vclow-purple shadow-sm">
              <Phone size={24} />
            </div>
            <h4 className="text-xl font-black mb-2">{t('contact.phone')}</h4>
            <div className="flex flex-col gap-1">
              <p className="text-gray-600 font-bold">+216 52 882 880</p>
              <p className="text-gray-600 font-bold">+216 52 882 930</p>
            </div>
            <a
              href="https://wa.me/21652882880"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all"
            >
              <MessageSquare size={18} /> {t('contact.whatsapp')}
            </a>
          </div>

          <div className="bg-vclow-gray p-8 rounded-[2rem] hover:shadow-lg transition-all border border-transparent hover:border-vclow-purple/10">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-vclow-purple shadow-sm">
              <Mail size={24} />
            </div>
            <h4 className="text-xl font-black mb-2">{t('contact.email')}</h4>
            <p className="text-gray-600 font-medium">contact@vclow.com</p>
            <p className="text-sm text-gray-400 mt-1">{t('contact.emailReply')}</p>
          </div>

          <div className="bg-vclow-gray p-8 rounded-[2rem] hover:shadow-lg transition-all border border-transparent hover:border-vclow-purple/10">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-vclow-purple shadow-sm">
              <MapPin size={24} />
            </div>
            <h4 className="text-xl font-black mb-2">{t('contact.location')}</h4>
            <p className="text-gray-600 font-medium">Montplaisir, Tunis</p>
            <p className="text-sm text-gray-400 mt-1">{t('contact.locationSub')}</p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-50 reveal">
          {isSubmitted ? (
            <div className="text-center py-20 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={32} />
              </div>
              <h4 className="text-2xl font-black mb-2">{t('contact.successTitle')}</h4>
              <p className="text-gray-500">{t('contact.successText')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {error && <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100">{error}</div>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">{t('contact.nameLabel')}</label>
                  <div className="relative">
                    <User className={`absolute left-4 top-4 ${formErrors.fullName ? 'text-red-400' : 'text-gray-300'}`} size={20} />
                    <input name="fullName" type="text" placeholder={t('contact.namePlaceholder')} className={`w-full pl-12 pr-6 py-4 bg-vclow-gray border-2 ${formErrors.fullName ? 'border-red-200 focus:ring-red-500 bg-red-50' : 'border-transparent focus:ring-vclow-purple'} rounded-2xl transition-all font-medium outline-none`} />
                  </div>
                  {formErrors.fullName && <p className="text-xs text-red-500 ml-2 font-bold">{formErrors.fullName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">{t('contact.emailLabel')}</label>
                  <div className="relative">
                    <AtSign className={`absolute left-4 top-4 ${formErrors.email ? 'text-red-400' : 'text-gray-300'}`} size={20} />
                    <input name="email" type="email" placeholder={t('contact.emailPlaceholder')} className={`w-full pl-12 pr-6 py-4 bg-vclow-gray border-2 ${formErrors.email ? 'border-red-200 focus:ring-red-500 bg-red-50' : 'border-transparent focus:ring-vclow-purple'} rounded-2xl transition-all font-medium outline-none`} />
                  </div>
                  {formErrors.email && <p className="text-xs text-red-500 ml-2 font-bold">{formErrors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">{t('contact.projectLabel')}</label>
                <select name="subject" className={`w-full px-6 py-4 bg-vclow-gray border-2 ${formErrors.subject ? 'border-red-200 focus:ring-red-500 bg-red-50' : 'border-transparent focus:ring-vclow-purple'} rounded-2xl transition-all font-medium outline-none`}>
                  <option value="">{t('contact.projectPlaceholder')}</option>
                  <option value="vitrine">{t('contact.opt1')}</option>
                  <option value="ecommerce">{t('contact.opt2')}</option>
                  <option value="crm">{t('contact.opt3')}</option>
                  <option value="mobile">{t('contact.opt4')}</option>
                  <option value="audit">{t('contact.opt5')}</option>
                </select>
                {formErrors.subject && <p className="text-xs text-red-500 ml-2 font-bold">{formErrors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">{t('contact.messageLabel')}</label>
                <div className="relative">
                  <MessageSquare className={`absolute left-4 top-4 ${formErrors.message ? 'text-red-400' : 'text-gray-300'}`} size={20} />
                  <textarea name="message" rows={5} placeholder={t('contact.messagePlaceholder')} className={`w-full pl-12 pr-6 py-4 bg-vclow-gray border-2 ${formErrors.message ? 'border-red-200 focus:ring-red-500 bg-red-50' : 'border-transparent focus:ring-vclow-purple'} rounded-2xl transition-all font-medium resize-none outline-none`}></textarea>
                </div>
                {formErrors.message && <p className="text-xs text-red-500 ml-2 font-bold">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-vclow-purple text-white font-black text-lg rounded-2xl hover:bg-vclow-black transition-all shadow-xl shadow-vclow-purple/20 flex items-center justify-center gap-3 transform active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <>{t('contact.submitBtn')} <Send size={20} /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
