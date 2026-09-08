import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageId } from '../App';
import { Calendar, User, ArrowRight, Search, Tag, Loader2, ChevronLeft, CheckCircle, Mail } from 'lucide-react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import SEO from './SEO';
import { trackConversion } from './Analytics';
import { useTranslation } from 'react-i18next';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: any;
  author: string;
  category: string;
  image: string;
}

interface BlogProps {
  onNavigate: (page: PageId) => void;
}

// TODO: Articles de démarrage à remplacer en production par du contenu managé directement dans Firestore
const STARTER_BLOG_POSTS: Post[] = [
  {
    id: 'prix-site-web-tunisie-2026',
    title: 'Combien coûte un site web professionnel en Tunisie en 2026 ?',
    category: 'Stratégie',
    author: 'Amine – VC LOW Engineering',
    image: '/images/blog-ecommerce.svg',
    date: new Date('2026-02-15'),
    excerpt: 'Prix réels, facteurs de variation (vitrine, e-commerce, logiciel sur mesure), pièges des offres au rabais et conseils pour investir intelligemment.',
    content: `Le prix d'un site web en Tunisie varie considérablement selon la nature du projet, le niveau de sur-mesure et l'architecture technique choisie. Pour une PME ou une startup tunisienne en 2026, comprendre la grille tarifaire réelle du marché est indispensable pour effectuer un investissement rentable sans se faire piéger par des offres opaques.

### 1. La grille de prix indicative en Tunisie (2026)

On distingue généralement trois grandes catégories de projets web sur le marché tunisien :

• **Le Site Vitrine Professionnel (1 200 DT – 3 500 DT)** :
Conçu pour présenter l'entreprise, ses services, son équipe et capturer des prospects via un formulaire. Idéal pour les cabinets de conseil, prestataires de services, cliniques et artisans. Il doit être parfaitement optimisé pour le référencement naturel (SEO local) et s'afficher de manière instantanée sur mobile.

• **Le Site E-commerce Performant (2 500 DT – 7 500 DT)** :
Intègre le catalogue produits, la gestion des paniers, le paiement en ligne sécurisé (GDT / Flouci / Konnect), la gestion des stocks et la prise en charge du paiement à la livraison (Cash on Delivery).

• **L'Application Web & Système de Gestion Sur Mesure (5 000 DT – 20 000 DT+)** :
Comprend les outils métier internes : gestion de flotte, suivi de colis, ERP/CRM adapté aux processus de votre entreprise, ou portails SaaS destinés à des clients internationaux.

### 2. Qu'est-ce qui détermine le coût réel d'un projet web ?

Plusieurs facteurs techniques influent directement sur la facture finale :
- **L'architecture technique** : Un site bâti sur du code moderne (React/Next.js/Vite) surpasse largement un WordPress alourdi par des dizaines de plugins tiers vulnérables.
- **La personnalisation UI/UX** : Un design sur mesure adapté à l'identité visuelle de votre marque coûte plus cher qu'un template acheté à la chaîne, mais garantit un taux de conversion 3x supérieur.
- **L'intégration système** : La connexion avec des API externes (systèmes de livraison comme AMENA TAWSIL/SYS-GEST, passerelles de paiement, CRM).
- **L'optimisation SEO & Vitesse** : Un temps de chargement inférieur à 1 seconde est la clé pour se positionner en 1ère page Google en Tunisie.

### 3. Les pièges à éviter lors du choix de votre prestataire

En Tunisie, méfiez-vous des offres à des tarifs ridiculement bas (ex. 300 DT pour un site complet). Ces offres cachent souvent :
- L'absence totale d'optimisation SEO (site invisible sur Google).
- Des temps de chargement extrêmement lents qui font fuir 70% des visiteurs sur mobile.
- L'absence de garantie et de maintenance post-livraison.
- Des failles de sécurité majeures mettant en danger les données de vos clients.

### 4. L'approche VC LOW : L'ingénierie digitale orientée ROI

Chez VC LOW, nous avons supprimé la lourdeur des agences web traditionnelles. Grâce à notre approche hybride et automatisée, nous livrons des infrastructures digitales ultra-rapides, parfaitement référencées et conçues pour générer des ventes dès le premier jour, à des tarifs adaptés au marché tunisien.`
  },
  {
    id: 'site-vitrine-vs-application-gestion-sur-mesure',
    title: 'Site vitrine vs application de gestion sur mesure : que choisir pour votre PME ?',
    category: 'Gestion',
    author: 'VC LOW Engineering',
    image: '/images/blog-crm.svg',
    date: new Date('2026-02-10'),
    excerpt: 'Faut-il investir d’abord dans la visibilité externe avec un site vitrine ou dans l’automatisation interne avec un outil de gestion sur mesure ? Guide décisionnel.',
    content: `Pour les dirigeants de PME en Tunisie, l'arbitrage des budgets digitaux est une décision stratégique cruciale. Faut-il concentrer ses ressources sur la création d'un site vitrine pour attirer de nouveaux clients, ou développer un outil de gestion interne (CRM/ERP) pour automatiser le suivi des opérations ?

### 1. Le Site Vitrine : L'aimant à prospects et le garant de votre crédibilité

Le site vitrine répond avant tout à un objectif de **croissance du chiffre d'affaires externe**.

**Quand faut-il prioriser le site vitrine ?**
- Votre entreprise souffre d'un manque de visibilité sur Google face à vos concurrents.
- Vos prospects demandent systématiquement votre présentation ou votre catalogue avant de vous contacter.
- Vous voulez automatiser la prise de rendez-vous et la qualification de vos leads.

**L'impact mesurable** : Un site vitrine rapide et moderne permet d'augmenter le taux de conversion de vos campagnes publicitaires et de positionner votre entreprise comme leader de son secteur.

### 2. L'Application de Gestion Sur Mesure : Le levier de rentabilité interne

L'outil de gestion sur mesure (CRM, ERP, suivi de stock ou de livraison) répond à un objectif de **réduction des coûts et d'efficacité opérationnelle**.

**Quand faut-il prioriser un système de gestion ?**
- Votre équipe perd des dizaines d'heures chaque semaine sur des fichiers Excel complexes et sujets aux erreurs.
- Le suivi des colis, des stocks ou des factures manque de transparence et crée des frictions avec vos clients.
- Vous avez besoin de tableaux de bord KPI en temps réel pour piloter vos marges et vos décisions.

**Cas concret (Secteur Logistique & Livraison)** : Le déploiement d'un système de gestion type AMENA TAWSIL ou SYS-GEST permet de centraliser 4 rôles métier (Admin, Agence, Expéditeur, Coursier), d'automatiser le scan de code-barres et d'économiser plus de 15 heures de travail administratif par semaine.

### 3. Le verdict : Comment orchestrer vos investissements ?

Si votre entreprise démarre ou manque de leads qualifiés, commencez par un **Site Vitrine Stratégique** pour valider votre marché et acquérir du flux.

Si votre entreprise réalise déjà des ventes mais sature sur le plan logistique et humain, investissez sans hésiter dans un **Système de Gestion Sur Mesure**. Il libérera immédiatement de la marge opérationnelle et préparera votre entreprise à passer à l'échelle.`
  },
  {
    id: 'menu-digital-qr-code-restauration-tunisie',
    title: 'Pourquoi un menu digital QR code peut augmenter vos ventes en restauration',
    category: 'Performance',
    author: 'VC LOW Team',
    image: '/images/service-vitrine.svg',
    date: new Date('2026-02-01'),
    excerpt: 'Découvrez comment les restaurants et salons de thé en Tunisie (ex: HOTBOX) utilisent le menu QR code pour accélérer le service et augmenter le panier moyen.',
    content: `Le secteur de la restauration en Tunisie connaît une transformation rapide. Les habitudes des consommateurs ont évolué : ils exigent de la rapidité, de la clarté et un accès instantané aux informations des produits depuis leur smartphone.

### 1. Les limites des menus papier traditionnels

Les cartes physiques en carton ou plastifiées présentent plusieurs inconvénients majeurs pour les restaurateurs :
- **Coût de réimpression permanent** : Chaque modification de prix ou changement de carte nécessite une réimpression coûteuse.
- **Ruptures de stock non visibles** : Un plat indisponible crée de la déception chez le client lorsqu'il est informé tardivement par le serveur.
- **Absence de visuels engageants** : La place est limitée sur une carte papier, empêchant de mettre en valeur les photos haute définition des plats.

### 2. Les avantages stratégiques du Menu Digital QR Code (Cas HOTBOX)

En déployant une solution de menu digital interactive via QR code — à l'image du projet **HOTBOX** développé par VC LOW —, le restaurateur transforme la simple consultation de la carte en une véritable expérience de vente.

1. **Mise à jour en temps réel** : Changez un prix, masquez un plat en rupture ou ajoutez une suggestion du jour en 1 clic depuis votre smartphone.
2. **Augmentation du panier moyen (+15% à +35%)** : Grâce aux photos appétissantes des plats, bowls et desserts, ainsi qu'aux suggestions de suppléments automatisées.
3. **Fluidité du service** : Les clients scannent le QR code dès leur installation à table et consultent le menu sans attendre que le serveur leur apporte la carte papier.
4. **Traductions et allergènes** : Possibilité de proposer la carte en plusieurs langues (Français, Arabe, Anglais) de façon transparente.

### 3. Conclusion : Un investissement rentabilisé dès le premier mois

Le menu QR code n'est pas un gadget technologique, mais un véritable canal de vente direct pour tout établissement de restauration moderne en Tunisie. VC LOW vous accompagne dans la numérisation complète de votre offre commerciale avec un affichage fluide et instantané.`
  }
];

const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const { postId } = useParams<{ postId?: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const selectedPost = postId ? posts.find((p) => p.id === postId) ?? null : null;
  const [filter, setFilter] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const categories = ["Tous", "E-commerce", "Gestion", "Performance", "Sécurité", "Stratégie"];

  useEffect(() => {
    // Écoute Firestore
    const q = query(collection(db, 'blog_posts'), orderBy('date', 'desc'));
    
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      if (snapshot.empty) {
        // TODO: Ne seed que si la collection Firestore blog_posts est réellement vide en production.
        // En cas de collection vide, afficher les 3 articles de référence SEO pour le marché tunisien.
        setPosts(STARTER_BLOG_POSTS);
      } else {
        const fetchedPosts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Post[];
        setPosts(fetchedPosts);
      }
      setLoading(false);
    }, (err) => {
      console.warn("Utilisation du fallback blog local (Firestore indisponible ou vide):", err);
      setPosts(STARTER_BLOG_POSTS);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesFilter = filter === 'Tous' || post.category === filter;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [posts, filter, searchQuery]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    
    setNewsletterStatus('loading');
    try {
      await addDoc(collection(db, 'newsletter_subscriptions'), {
        email: newsletterEmail,
        subscribedAt: serverTimestamp()
      });
      trackConversion('newsletter_subscribe', { category: 'engagement' });
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 5000);
    } catch (err) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 5000);
    }
  };

  const formatDate = (date: any) => {
    if (!date) return 'En cours...';
    const d = date.toDate ? date.toDate() : new Date(date);
    return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
  };

  if (selectedPost) {
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": selectedPost.title,
      "description": selectedPost.excerpt,
      "image": selectedPost.image,
      "author": { "@type": "Person", "name": selectedPost.author },
      "publisher": { "@type": "Organization", "name": "VC LOW" },
    };

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in slide-in-from-bottom-5 duration-500">
        <SEO
          title={`${selectedPost.title} | Blog VC LOW`}
          description={selectedPost.excerpt}
          path={`/blog/${selectedPost.id}`}
          image={selectedPost.image}
          jsonLd={articleJsonLd}
        />
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-vclow-purple font-black uppercase text-xs tracking-widest mb-10 hover:translate-x-[-10px] transition-transform"
        >
          <ChevronLeft size={20} /> {t('blog.back')}
        </button>
        
        <div className="relative h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden mb-12 shadow-2xl bg-vclow-gray">
          <img src={selectedPost.image} alt={selectedPost.title} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute top-8 left-8 px-6 py-3 bg-white/90 backdrop-blur-md rounded-2xl text-sm font-black uppercase tracking-widest text-vclow-purple shadow-lg">
            {selectedPost.category}
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400 font-bold uppercase tracking-widest mb-8">
          <span className="flex items-center gap-2"><Calendar size={18} className="text-vclow-purple" /> {formatDate(selectedPost.date)}</span>
          <span className="flex items-center gap-2"><User size={18} className="text-vclow-purple" /> {selectedPost.author}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-heading font-black mb-10 leading-tight text-vclow-black">
          {selectedPost.title}
        </h1>

        <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed font-light space-y-6">
          {selectedPost.content?.split('\n\n').map((block, i) => {
            if (block.startsWith('### ')) {
              return <h3 key={i} className="text-2xl font-black text-vclow-black mt-8 mb-4">{block.replace('### ', '')}</h3>;
            }
            return <p key={i}>{block}</p>;
          }) || selectedPost.excerpt}
        </div>

        <div className="mt-20 p-12 bg-vclow-gray rounded-[3rem] border border-gray-100 reveal active">
          <h3 className="text-2xl font-black mb-4">{t('blog.inspire')}</h3>
          <p className="text-gray-500 mb-8 max-w-lg">{t('blog.inspireDesc')}</p>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-10 py-5 bg-vclow-black text-white font-black rounded-2xl hover:bg-vclow-purple transition-all shadow-xl"
          >
            {t('blog.inspireBtn')}
          </button>
        </div>
      </div>
    );
  }

  if (postId && !loading && !selectedPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <SEO title="Article introuvable | Blog VC LOW" description="Cet article n'existe plus ou a été déplacé." path={`/blog/${postId}`} />
        <h1 className="text-3xl font-black mb-6">{t('blog.notFound')}</h1>
        <button onClick={() => navigate('/blog')} className="text-vclow-purple font-black uppercase text-xs tracking-widest">
          ← {t('blog.back')}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="Blog VC LOW | Insights & Stratégies Digitales"
        description="Conseils, analyses et actualités pour réussir votre transformation digitale : e-commerce, gestion, performance et sécurité."
        path="/blog"
      />
      <div className="text-center max-w-3xl mx-auto mb-20 reveal">
        <h2 className="text-vclow-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">{t('blog.badge')}</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">{t('blog.title')}</h1>
        <p className="text-xl text-gray-600">
          {t('blog.subtitle')}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 mb-32">
        <div className="lg:col-span-2 flex-grow space-y-12">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 text-gray-400">
              <Loader2 className="animate-spin mb-4" size={48} />
              <p className="font-bold uppercase tracking-widest text-sm text-vclow-purple">{t('blog.loading')}</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredPosts.map((article) => (
                <div 
                  key={article.id} 
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-vclow-purple/20 transition-all hover:shadow-2xl reveal active cursor-pointer"
                  onClick={() => navigate(`/blog/${article.id}`)}
                >
                  <div className="relative h-64 overflow-hidden bg-vclow-gray">
                    <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-xs font-black uppercase tracking-widest text-vclow-purple">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1"><Calendar size={14} className="text-vclow-purple" /> {formatDate(article.date)}</span>
                    </div>
                    <h3 className="text-2xl font-black mb-4 group-hover:text-vclow-purple transition-colors leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 mb-8 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-vclow-black font-black uppercase text-xs tracking-widest group/btn">
                      {t('blog.readMore')} <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-vclow-gray rounded-[3rem]">
              <Search className="mx-auto text-gray-300 mb-6" size={64} />
              <h4 className="text-2xl font-black">
                {posts.length === 0 ? t('blog.empty') : t('blog.noMatch')}
              </h4>
              <p className="text-gray-500 mt-2">
                {posts.length === 0 ? t('blog.emptySub') : t('blog.noMatchSub')}
              </p>
            </div>
          )}
        </div>

        <div className="lg:w-80 space-y-10">
          <div className="bg-vclow-gray p-8 rounded-[2.5rem] border border-gray-100 shadow-inner">
            <h4 className="text-xl font-black mb-6">{t('blog.search')}</h4>
            <div className="relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Rechercher..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-vclow-purple transition-all font-medium outline-none" 
              />
            </div>
          </div>

          <div className="bg-vclow-gray p-8 rounded-[2.5rem] border border-gray-100 shadow-inner">
            <h4 className="text-xl font-black mb-6 text-vclow-purple">{t('blog.categories')}</h4>
            <div className="space-y-3">
              {categories.map((cat, i) => (
                <button 
                  key={i} 
                  onClick={() => setFilter(cat)}
                  className={`flex items-center justify-between w-full p-4 rounded-xl transition-all group ${filter === cat ? 'bg-vclow-purple text-white shadow-lg translate-x-1' : 'bg-white hover:bg-gray-50'}`}
                >
                  <span className="font-bold">{cat}</span>
                  <Tag size={16} className={`${filter === cat ? 'opacity-100' : 'opacity-20 group-hover:opacity-100'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-vclow-black text-white p-8 rounded-[2.5rem] relative overflow-hidden group shadow-xl">
             <h4 className="text-xl font-black mb-4 relative z-10 flex items-center gap-2">
               {t('blog.newsletter')} <CheckCircle className={`text-vclow-yellow transition-all ${newsletterStatus === 'success' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
             </h4>
             <p className="text-sm text-white/70 mb-6 relative z-10">
               {newsletterStatus === 'success' ? t('blog.newsletterSuccess') : t('blog.newsletterDesc')}
             </p>
             {newsletterStatus !== 'success' && (
               <form onSubmit={handleSubscribe} className="relative z-10">
                 <div className="relative mb-4">
                   <Mail className="absolute left-4 top-4 text-white/20" size={20} />
                   <input 
                     type="email" 
                     placeholder="votre@email.com" 
                     required
                     value={newsletterEmail}
                     onChange={(e) => setNewsletterEmail(e.target.value)}
                     className="w-full pl-12 pr-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 mb-4 focus:outline-none focus:bg-white/20 transition-all outline-none" 
                   />
                 </div>
                 <button 
                   disabled={newsletterStatus === 'loading'}
                   className="w-full py-4 bg-vclow-purple text-white font-black rounded-2xl hover:bg-white hover:text-vclow-black transition-all flex items-center justify-center gap-2"
                 >
                   {newsletterStatus === 'loading' ? <Loader2 className="animate-spin" /> : t('blog.subscribe')}
                 </button>
               </form>
             )}
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-vclow-purple/30 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
