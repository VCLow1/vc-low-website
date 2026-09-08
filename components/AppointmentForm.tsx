
import React, { useState } from 'react';
import { Send, Calendar, User, Mail, MessageSquare, Building, Phone, Briefcase, MousePointer2, Loader2 } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { trackConversion } from './Analytics';
import { useTranslation } from 'react-i18next';

const AppointmentForm: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = (data: Record<string, any>) => {
    const errors: Record<string, string> = {};
    if (!data.fullName || data.fullName.length < 3) errors.fullName = t('appointment.errName');
    if (!data.companyName || data.companyName.length < 2) errors.companyName = t('appointment.errCompany');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) errors.email = t('appointment.errEmail');
    const phoneRegex = /^[0-9+\s-]{8,}$/;
    if (!data.phone || !phoneRegex.test(data.phone)) errors.phone = t('appointment.errPhone');
    if (!data.activity || data.activity.length < 2) errors.activity = t('appointment.errActivity');
    if (!data.description || data.description.length < 10) errors.description = t('appointment.errDesc');
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
      companyName: formData.get('companyName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      activity: formData.get('activity') as string,
      description: formData.get('description') as string,
      appointmentType: formData.get('appointmentType') as string,
      createdAt: serverTimestamp(),
    };

    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, 'appointments'), data);
      trackConversion('appointment_form_submit', { appointmentType: data.appointmentType });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      if (err.code === 'permission-denied') {
        setError(t('appointment.errFirebase'));
      } else {
        setError(t('appointment.errGeneric'));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="reveal">
          <h2 className="text-vclow-yellow font-bold tracking-[0.2em] uppercase text-sm mb-4">{t('appointment.badge')}</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight">{t('appointment.title')}</h3>
          <p className="text-xl text-purple-100 mb-12 font-light">{t('appointment.subtitle')}</p>

          <div className="space-y-6">
            <div className="flex items-center gap-5 bg-white/10 p-6 rounded-[2rem] border border-white/5 hover:bg-white/15 transition-all">
              <div className="w-14 h-14 bg-vclow-yellow rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <MousePointer2 className="text-vclow-black" />
              </div>
              <div>
                <p className="font-black text-lg">{t('appointment.diagnosticTitle')}</p>
                <p className="text-sm text-purple-200">{t('appointment.diagnosticDesc')}</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-white/10 p-6 rounded-[2rem] border border-white/5 hover:bg-white/15 transition-all">
              <div className="w-14 h-14 bg-vclow-purple text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20">
                <Calendar />
              </div>
              <div>
                <p className="font-black text-lg">{t('appointment.flexTitle')}</p>
                <p className="text-sm text-purple-200">{t('appointment.flexDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] text-vclow-black reveal" style={{transitionDelay: '0.2s'}}>
          {isSubmitted ? (
            <div className="text-center py-16 animate-in fade-in zoom-in">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Send className="w-12 h-12" />
              </div>
              <h4 className="text-3xl font-black mb-4">{t('appointment.successTitle')}</h4>
              <p className="text-gray-500 text-lg">{t('appointment.successText')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100">{error}</div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <div className="relative">
                    <User className={`absolute left-4 top-4 ${formErrors.fullName ? 'text-red-400' : 'text-gray-400'}`} size={18} />
                    <input name="fullName" type="text" placeholder={t('appointment.namePlaceholder')} className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 ${formErrors.fullName ? 'border-red-200 focus:ring-red-500 bg-red-50' : 'border-transparent focus:ring-vclow-purple'} rounded-2xl transition-all outline-none`} />
                  </div>
                  {formErrors.fullName && <p className="text-xs text-red-500 ml-2 font-bold">{formErrors.fullName}</p>}
                </div>
                <div className="space-y-1">
                  <div className="relative">
                    <Building className={`absolute left-4 top-4 ${formErrors.companyName ? 'text-red-400' : 'text-gray-400'}`} size={18} />
                    <input name="companyName" type="text" placeholder={t('appointment.companyPlaceholder')} className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 ${formErrors.companyName ? 'border-red-200 focus:ring-red-500 bg-red-50' : 'border-transparent focus:ring-vclow-purple'} rounded-2xl transition-all outline-none`} />
                  </div>
                  {formErrors.companyName && <p className="text-xs text-red-500 ml-2 font-bold">{formErrors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <div className="relative">
                    <Mail className={`absolute left-4 top-4 ${formErrors.email ? 'text-red-400' : 'text-gray-400'}`} size={18} />
                    <input name="email" type="email" placeholder={t('appointment.emailPlaceholder')} className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 ${formErrors.email ? 'border-red-200 focus:ring-red-500 bg-red-50' : 'border-transparent focus:ring-vclow-purple'} rounded-2xl transition-all outline-none`} />
                  </div>
                  {formErrors.email && <p className="text-xs text-red-500 ml-2 font-bold">{formErrors.email}</p>}
                </div>
                <div className="space-y-1">
                  <div className="relative">
                    <Phone className={`absolute left-4 top-4 ${formErrors.phone ? 'text-red-400' : 'text-gray-400'}`} size={18} />
                    <input name="phone" type="tel" placeholder={t('appointment.phonePlaceholder')} className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 ${formErrors.phone ? 'border-red-200 focus:ring-red-500 bg-red-50' : 'border-transparent focus:ring-vclow-purple'} rounded-2xl transition-all outline-none`} />
                  </div>
                  {formErrors.phone && <p className="text-xs text-red-500 ml-2 font-bold">{formErrors.phone}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <div className="relative">
                  <Briefcase className={`absolute left-4 top-4 ${formErrors.activity ? 'text-red-400' : 'text-gray-400'}`} size={18} />
                  <input name="activity" type="text" placeholder={t('appointment.activityPlaceholder')} className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 ${formErrors.activity ? 'border-red-200 focus:ring-red-500 bg-red-50' : 'border-transparent focus:ring-vclow-purple'} rounded-2xl transition-all outline-none`} />
                </div>
                {formErrors.activity && <p className="text-xs text-red-500 ml-2 font-bold">{formErrors.activity}</p>}
              </div>

              <div className="space-y-1">
                <div className="relative">
                  <MessageSquare className={`absolute left-4 top-4 ${formErrors.description ? 'text-red-400' : 'text-gray-400'}`} size={18} />
                  <textarea name="description" rows={3} placeholder={t('appointment.descPlaceholder')} className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 ${formErrors.description ? 'border-red-200 focus:ring-red-500 bg-red-50' : 'border-transparent focus:ring-vclow-purple'} rounded-2xl transition-all outline-none resize-none`}></textarea>
                </div>
                {formErrors.description && <p className="text-xs text-red-500 ml-2 font-bold">{formErrors.description}</p>}
              </div>

              <div className="space-y-3">
                <p className="text-sm font-black text-gray-400 uppercase tracking-widest">{t('appointment.typeLabel')}</p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { key: 'typeCall', val: 'Appel' },
                    { key: 'typeVisio', val: 'Visio' },
                    { key: 'typeMeeting', val: 'Rencontre' },
                  ].map((type) => (
                    <label key={type.val} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="appointmentType" value={type.val} defaultChecked={type.val === 'Appel'} className="w-4 h-4 text-vclow-purple border-gray-300 focus:ring-vclow-purple" />
                      <span className="text-sm font-bold group-hover:text-vclow-purple transition-colors">{t(`appointment.${type.key}`)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-vclow-black text-white font-black text-xl rounded-2xl hover:bg-vclow-purple transition-all shadow-xl hover:shadow-vclow-purple/30 flex items-center justify-center gap-3 transform active:scale-95 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : t('appointment.submitBtn')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
