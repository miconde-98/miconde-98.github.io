import ui from '../data/ui.json';
export type Lang = 'fr' | 'en';
export const langs: Lang[] = ['fr', 'en'];
export const dictionary = {
  fr: {
    home:'Accueil', blog:'Blog', projects:'Projets', contact:'Contact',
    eyebrow:'ÉCONOMIE · RECHERCHE · TECHNOLOGIE',
    hero:'Explorer l’économie. Comprendre les données. Produire des connaissances.',
    heroIntro:'Économie internationale, économétrie appliquée, management de l’énergie et science des données : un espace pour partager mes recherches, mes analyses et mes projets.',
    cv:'Télécharger mon CV', cvSoon:'CV prochainement disponible', explore:'Explorer mes projets',
    about:'À propos', aboutBody:'Je suis Mohamed I CONDE, étudiant en économie internationale et engagé dans une formation en management du pétrole, du gaz et de l’énergie. Mes intérêts se situent à l’intersection de la macroéconomie internationale, de la recherche empirique, de l’économétrie et de la science des données. Sur ce site, je présente mes projets et partage mes notes de réflexion et d’apprentissage.',
    research:'Centres d’intérêt', education:'Parcours académique', educationText:'Formations et certifications',
    master:'Master en économie internationale', masterSchool:'Ankara Hacı Bayram Veli Üniversitesi · Türkiye',
    mba:'MBA en management du pétrole, du gaz et de l’énergie', mbaSchool:'UNICAF · Formation en cours (statut à confirmer)',
    licence:'Licence en sciences économiques', licenceSchool:'Université Julius Nyerere de Kankan · 2021',
    skills:'Méthodes et outils', skillsSub:'Économétrie · Séries temporelles · Python · R · EViews',
    experiences:'Expériences et engagement', expBody:'Expérience en commerce international et finance, ainsi que des responsabilités de coordination et de leadership associatif.',
    articlesLatest:'Dernières publications', viewAll:'Tous les articles', projectLatest:'Projets sélectionnés', viewProjects:'Tous les projets',
    blogIntro:'Analyses économiques, apprentissages techniques et notes de recherche — en français ou en anglais selon le sujet.',
    projectsIntro:'Une sélection de travaux en économie appliquée, économétrie, data science et machine learning.',
    search:'Rechercher un article...', all:'Toutes les catégories', allLangs:'Toutes les langues', noPosts:'Aucun article publié pour le moment.', noMatches:'Aucun article ne correspond à votre recherche.',
    noProjects:'Les fiches de projets seront disponibles prochainement.',
    featured:'À la une', read:'Lire l’article', minutes:'min de lecture', backBlog:'Retour au blog',
    share:'Partager', copy:'Copier le lien', copied:'Lien copié !', source:'Code source GitHub', doc:'Document', repoSoon:'Dépôt GitHub à ajouter',
    ongoing:'En cours', revision:'En révision', completed:'Terminé', learnMore:'Voir le projet',
    mail:'M’écrire', footer:'Économie, recherche et données.', legal:'Site personnel · FR / EN',
    groups:{economy:'Économie',econometrics:'Économétrie',data:'Data Science / IA',energy:'Énergie',research:'Recherche'},
    projectGroups:{research:'Recherche économique',data:'Data Science',ml:'Machine Learning',visualization:'Visualisation'},
  },
  en: {
    home:'Home', blog:'Blog', projects:'Projects', contact:'Contact',
    eyebrow:'ECONOMICS · RESEARCH · TECHNOLOGY',
    hero:'Exploring economics. Understanding data. Advancing knowledge.',
    heroIntro:'International economics, applied econometrics, energy management and data science: a place to share my research, insights and projects.',
    cv:'Download my CV', cvSoon:'CV coming soon', explore:'Explore my projects',
    about:'About me', aboutBody:'I am Mohamed I CONDE, a graduate student in international economics, also pursuing studies in oil, gas and energy management. My interests lie at the intersection of international macroeconomics, empirical research, econometrics and data science. On this website, I showcase my projects and share research and learning notes.',
    research:'Research interests', education:'Education', educationText:'Studies and certifications',
    master:'Master’s in International Economics', masterSchool:'Ankara Hacı Bayram Veli University · Türkiye',
    mba:'MBA in Oil, Gas and Energy Management', mbaSchool:'UNICAF · Studies in progress (status to confirm)',
    licence:'Bachelor’s degree in Economics', licenceSchool:'Julius Nyerere University of Kankan · 2021',
    skills:'Methods and tools', skillsSub:'Econometrics · Time Series · Python · R · EViews',
    experiences:'Experience & leadership', expBody:'Experience in international trade and finance, complemented by leadership and coordination responsibilities in student organizations.',
    articlesLatest:'Latest articles', viewAll:'All articles', projectLatest:'Selected projects', viewProjects:'All projects',
    blogIntro:'Economic analysis, technical learning and research notes — written in French or English depending on the topic.',
    projectsIntro:'A selection of work in applied economics, econometrics, data science and machine learning.',
    search:'Search articles...', all:'All categories', allLangs:'All languages', noPosts:'No public articles yet.', noMatches:'No articles match your search.',
    noProjects:'Project profiles will be available soon.',
    featured:'Featured', read:'Read article', minutes:'min read', backBlog:'Back to blog',
    share:'Share', copy:'Copy link', copied:'Link copied!', source:'GitHub source code', doc:'Document', repoSoon:'GitHub repository to be added',
    ongoing:'Ongoing', revision:'Under revision', completed:'Completed', learnMore:'View project',
    mail:'Email me', footer:'At the intersection of economics, research and data.', legal:'Personal portfolio · FR / EN',
    groups:{economy:'Economics',econometrics:'Econometrics',data:'Data Science / AI',energy:'Energy',research:'Research'},
    projectGroups:{research:'Economic research',data:'Data Science',ml:'Machine Learning',visualization:'Visualization'},
  }
};
export const tr = (lang: Lang) => ({...dictionary[lang], ...ui[lang], groups:{...dictionary[lang].groups,...ui[lang].groups}, projectGroups:{...dictionary[lang].projectGroups,...ui[lang].projectGroups}});
export const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/')?path:`/${path}`}`;
};
export const localized = (lang: Lang, page = '') => withBase(`/${lang}/${page.replace(/^\//,'')}`);
export const media = (path?: string) => path ? (/^https?:\/\//.test(path) ? path : withBase(path)) : undefined;
