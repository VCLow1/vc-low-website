import React, { useState } from 'react';
import { BookOpen, Calendar, ChevronRight, X, User, Mail, Loader2, CheckCircle, Smartphone, Database, Lock, Send, Phone, Briefcase, Target, Layers, BarChart3, PieChart, LineChart, Sparkles, Code2, Rocket } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import SEO from './SEO';

interface Session {
  id: string;
  title: string;
  items: string[];
  icon: React.ReactNode;
}

interface Course {
  id: string;
  badge: string;
  badgeIcon: React.ReactNode;
  title: React.ReactNode;
  titlePlain: string;
  description: string;
  durationLabel: string;
  durationValue: string;
  resultText: string;
  sessions: Session[];
}

const courses: Course[] = [
  {
    id: 'flutterflow',
    badge: 'Mobile & Architecture',
    badgeIcon: <Smartphone size={16} />,
    title: <>FlutterFlow <br /><span className="text-vclow-purple">& Firebase</span></>,
    titlePlain: 'FlutterFlow & Firebase',
    description: "Créez votre première application mobile professionnelle de A à Z. Du design à la publication sur les stores, nous vous accompagnons pas à pas.",
    durationLabel: '4 Sessions intensives',
    durationValue: '16 Heures',
    resultText: 'Une App métier complète publiée avec catalogue et authentification.',
    sessions: [
      { id: 'S01', title: 'Découverte & Premiers Pas', items: ['Widgets de base (Container, Column, Row)', 'Mise en page & Design', 'Responsive design', 'Premier écran interactif'], icon: <Layers size={24} /> },
      { id: 'S02', title: 'Navigation & Interactivité', items: ['Navigation entre pages', 'Variables locales (Page State)', 'Actions & Boutons', 'Formulaires & Saisie'], icon: <Smartphone size={24} /> },
      { id: 'S03', title: 'Firebase & Données', items: ['Configuration Firestore', 'Lecture/Écriture en temps réel', 'Listes dynamiques', 'Gestion des images'], icon: <Database size={24} /> },
      { id: 'S04', title: 'Auth & Publication', items: ['Authentification utilisateur', 'Navigation sécurisée', 'Thème global', 'Export APK Android'], icon: <Lock size={24} /> },
    ],
  },
  {
    id: 'powerbi',
    badge: 'Data & Reporting',
    badgeIcon: <BarChart3 size={16} />,
    title: <>Power BI <br /><span className="text-vclow-purple">Data & Reporting</span></>,
    titlePlain: 'Power BI - Data & Reporting',
    description: "Apprenez à transformer vos données brutes en tableaux de bord clairs et exploitables pour piloter votre activité au quotidien.",
    durationLabel: '4 Sessions intensives',
    durationValue: '16 Heures',
    resultText: 'Un tableau de bord Power BI complet, connecté à vos données et prêt à partager avec votre équipe.',
    sessions: [
      { id: 'S01', title: 'Fondamentaux Power BI', items: ['Interface & navigation', 'Connexion aux sources de données', 'Modèle de données', 'Relations entre tables'], icon: <PieChart size={24} /> },
      { id: 'S02', title: 'Nettoyage & Transformation', items: ['Power Query', 'Nettoyage de données', 'Colonnes calculées', 'Mesures DAX de base'], icon: <Database size={24} /> },
      { id: 'S03', title: 'Visualisation & Storytelling', items: ['Choix des bons graphiques', 'Dashboards interactifs', 'Filtres & segments', 'Mise en forme conditionnelle'], icon: <LineChart size={24} /> },
      { id: 'S04', title: 'Publication & Automatisation', items: ['Power BI Service', 'Partage sécurisé', 'Rafraîchissement planifié', 'Bonnes pratiques de gouvernance'], icon: <Rocket size={24} /> },
    ],
  },
  {
    id: 'dev-ia',
    badge: 'Méthode VClow',
    badgeIcon: <Sparkles size={16} />,
    title: <>Développement Web <br /><span className="text-vclow-purple">avec l'IA</span></>,
    titlePlain: "Développement Web avec l'IA (Kiro, Antigravity)",
    description: "La méthode VClow pour concevoir et livrer des solutions digitales en brefs délais, en s'appuyant sur des outils IA comme Kiro et Antigravity.",
    durationLabel: '4 Sessions intensives',
    durationValue: '16 Heures',
    resultText: "Un projet web réel conçu et livré avec la méthode VClow, de l'idée jusqu'au déploiement.",
    sessions: [
      { id: 'S01', title: 'Fondamentaux & Cahier des Charges', items: ['Cadrer un besoin client', 'Découper un projet en composants', "Écrire des prompts efficaces", 'Choisir sa stack'], icon: <Target size={24} /> },
      { id: 'S02', title: 'Construction avec Kiro & Antigravity', items: ['Génération de composants', 'Itération rapide', 'Connexion à Firebase', 'Débogage assisté par IA'], icon: <Code2 size={24} /> },
      { id: 'S03', title: 'Qualité & Déploiement', items: ['Relecture & tests', 'Bonnes pratiques SEO', 'Déploiement (Vercel)', 'Suivi post-lancement'], icon: <Lock size={24} /> },
      { id: 'S04', title: "De l'idée au produit vendable", items: ['Structurer une offre', 'Fixer un prix', 'Présenter à un client', 'Livrer en brefs délais'], icon: <Rocket size={24} /> },
    ],
  },
];

const Learning: React.FC = () => {
  const [activeCourseId, setActiveCourseId] = useState(courses[0].id);
  const activeCourse = courses.find((c) => c.id === activeCourseId)!;

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = (data: Record<string, any>) => {
    const errors: Record<string, string> = {};
    if (!data.fullName || data.fullName.length < 3) errors.fullName = "Le nom est trop court.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) errors.email = "Email invalide.";
    if (!data.phone || data.phone.length < 8) errors.phone = "Téléphone invalide.";
    if (!data.occupation) errors.occupation = "Veuillez préciser votre métier.";
    if (!data.goals || data.goals.length < 10) errors.goals = "Détaillez un peu vos objectifs.";
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
      phone: formData.get('phone') as string,
      occupation: formData.get('occupation') as string,
      experience: formData.get('experience') as string,
      goals: formData.get('goals') as string,
      courseTitle: activeCourse.titlePlain,
      createdAt: serverTimestamp(),
    };

    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, 'course_registrations'), data);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setShowModal(false);
      }, 4000);
    } catch (err: any) {
      setError("Désolé, une erreur est survenue lors de l'envoi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="VC Low Learning | Formations Dev Mobile, Power BI & IA"
        description="Formations pratiques VC LOW : FlutterFlow & Firebase, Power BI (data & reporting), et développement web avec l'IA (Kiro, Antigravity). Places limitées."
        path="/vc-low-learning"
      />
      <div className="text-center max-w-3xl mx-auto mb-12 reveal">
        <h2 className="text-vclow-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">VC LOW Learning</h2>
        <h3 className="text-4xl md:text-6xl font-heading font-black mb-6">Nos Formations</h3>
        <p className="text-xl text-gray-600">
          Trois parcours pratiques pour passer de l'idée au projet livré : mobile, data et développement assisté par IA.
        </p>
      </div>

      {/* Sélecteur de formation */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 reveal">
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => setActiveCourseId(course.id)}
            className={`px-6 py-3 rounded-2xl text-sm font-black transition-all flex items-center gap-2 ${
              activeCourseId === course.id
                ? 'bg-vclow-purple text-white shadow-lg shadow-vclow-purple/20'
                : 'bg-vclow-gray text-gray-600 hover:bg-gray-200'
            }`}
          >
            {course.badgeIcon}
            {course.titlePlain}
          </button>
        ))}
      </div>

      <div className="bg-vclow-black text-white rounded-[4rem] overflow-hidden shadow-2xl relative reveal">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vclow-purple/10 blur-[100px] pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-10 md:p-20 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-vclow-purple/20 rounded-full text-vclow-purple font-black text-xs uppercase tracking-widest mb-8 w-fit border border-vclow-purple/30">
              {activeCourse.badgeIcon} {activeCourse.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight">
              {activeCourse.title}
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg font-light">
              {activeCourse.description}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-3xl font-black text-white mb-1">{activeCourse.durationValue}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">{activeCourse.durationLabel}</div>
              </div>
              <div>
                <div className="text-3xl font-black text-vclow-yellow mb-1">100%</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Pratique & Projet</div>
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="w-fit px-10 py-5 bg-vclow-purple text-white font-black rounded-2xl hover:bg-white hover:text-vclow-black transition-all flex items-center justify-center gap-3 shadow-2xl shadow-vclow-purple/20 group"
            >
              Réserver ma place <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-white/5 p-10 md:p-20 flex flex-col justify-center border-l border-white/5">
            <h4 className="text-2xl font-black mb-12 flex items-center gap-3">
              <BookOpen className="text-vclow-purple" /> Programme de la formation
            </h4>
            <div className="space-y-8">
              {activeCourse.sessions.map((session) => (
                <div key={session.id} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-vclow-purple/10 rounded-xl flex items-center justify-center text-vclow-purple group-hover:bg-vclow-purple group-hover:text-white transition-all">
                    {session.icon}
                  </div>
                  <div>
                    <h5 className="font-black text-lg mb-2 flex items-center gap-3">
                      <span className="text-vclow-purple text-xs">{session.id}</span>
                      {session.title}
                    </h5>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {session.items.map((item, idx) => (
                        <span key={idx} className="text-sm text-gray-500 flex items-center gap-1">
                          <div className="w-1 h-1 bg-vclow-purple rounded-full"></div> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-vclow-purple/5 border border-vclow-purple/10 rounded-3xl">
              <div className="flex items-center gap-4">
                <CheckCircle className="text-vclow-yellow" />
                <span className="text-gray-300 font-medium">Résultat final : {activeCourse.resultText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-vclow-black/90 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => !loading && setShowModal(false)}
          ></div>
          <div className="relative bg-white rounded-[3rem] p-8 md:p-12 max-w-2xl w-full shadow-2xl animate-in zoom-in duration-500 overflow-y-auto max-h-[90vh]">
            <button onClick={() => !loading && setShowModal(false)} className="absolute top-8 right-8 text-gray-400 hover:text-vclow-black transition-colors z-10">
              <X size={32} />
            </button>
            <div className="relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-vclow-purple mb-4 block">Demande de participation</span>
              <h4 className="text-3xl md:text-4xl font-black mb-2 leading-tight">Inscrivez-vous pour <br /> la prochaine session</h4>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-8">{activeCourse.titlePlain}</p>

              <div className="bg-vclow-gray p-8 rounded-[2rem] border border-gray-100 shadow-inner">
                {isSubmitted ? (
                  <div className="text-center py-10 animate-in fade-in zoom-in">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h5 className="text-3xl font-black text-vclow-black">Bienvenue à bord !</h5>
                    <p className="text-gray-500 mt-4 text-lg">Un expert VC LOW vous contactera sous 24h pour finaliser votre inscription.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {error && <p className="p-4 bg-red-100 text-red-600 rounded-2xl text-sm font-bold border border-red-200">{error}</p>}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Nom complet</label>
                        <div className="relative">
                          <User className={`absolute left-4 top-1/2 -translate-y-1/2 ${formErrors.fullName ? 'text-red-400' : 'text-gray-300'}`} size={18} />
                          <input name="fullName" type="text" placeholder="Janette Doe" className={`w-full p-4 pl-12 bg-white border-2 ${formErrors.fullName ? 'border-red-200' : 'border-transparent focus:border-vclow-purple'} rounded-2xl transition-all font-medium outline-none text-sm`} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Téléphone</label>
                        <div className="relative">
                          <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 ${formErrors.phone ? 'text-red-400' : 'text-gray-300'}`} size={18} />
                          <input name="phone" type="tel" placeholder="+216 52 --- ---" className={`w-full p-4 pl-12 bg-white border-2 ${formErrors.phone ? 'border-red-200' : 'border-transparent focus:border-vclow-purple'} rounded-2xl transition-all font-medium outline-none text-sm`} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Professionnel</label>
                      <div className="relative">
                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 ${formErrors.email ? 'text-red-400' : 'text-gray-300'}`} size={18} />
                        <input name="email" type="email" placeholder="votre@adresse.com" className={`w-full p-4 pl-12 bg-white border-2 ${formErrors.email ? 'border-red-200' : 'border-transparent focus:border-vclow-purple'} rounded-2xl transition-all font-medium outline-none text-sm`} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Métier / Poste actuel</label>
                        <div className="relative">
                          <Briefcase className={`absolute left-4 top-1/2 -translate-y-1/2 ${formErrors.occupation ? 'text-red-400' : 'text-gray-300'}`} size={18} />
                          <input name="occupation" type="text" placeholder="Développeur, Manager..." className={`w-full p-4 pl-12 bg-white border-2 ${formErrors.occupation ? 'border-red-200' : 'border-transparent focus:border-vclow-purple'} rounded-2xl transition-all font-medium outline-none text-sm`} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Niveau technique</label>
                        <select name="experience" className="w-full p-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-vclow-purple transition-all font-medium text-sm outline-none">
                          <option value="debutant">Débutant (Curieux)</option>
                          <option value="intermediaire">Intermédiaire (Connais le web)</option>
                          <option value="avance">Avancé (Développeur de métier)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Pourquoi cette formation ?</label>
                      <div className="relative">
                        <Target className={`absolute left-4 top-4 ${formErrors.goals ? 'text-red-400' : 'text-gray-300'}`} size={18} />
                        <textarea name="goals" rows={3} placeholder="Détaillez vos projets ou besoins spécifiques..." className={`w-full p-4 pl-12 bg-white border-2 ${formErrors.goals ? 'border-red-200' : 'border-transparent focus:border-vclow-purple'} rounded-2xl transition-all font-medium outline-none text-sm resize-none`}></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-5 bg-vclow-purple text-white font-black rounded-2xl hover:bg-vclow-black transition-all shadow-xl flex items-center justify-center gap-3 transform active:scale-95 disabled:opacity-50"
                    >
                      {loading ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Envoyer ma candidature</>}
                    </button>
                  </form>
                )}
              </div>
              <p className="mt-8 text-center text-xs text-gray-400 font-medium italic">"Places limitées à 10 participants par session pour un suivi individuel."</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learning;
