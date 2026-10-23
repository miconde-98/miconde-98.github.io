# Administration du portfolio en trois langues (FR / EN / TR)

Le site est disponible aux adresses `/fr/`, `/en/` et `/tr/`. Le sélecteur de langue permet de naviguer entre les trois versions. La rédaction se fait sur https://app.pagescms.org après authentification GitHub.

## Pages et présentation

- **Accueil — 3 langues** : les blocs Français, English et Türkçe sont indépendants dans `src/data/home.json` ; les formations, domaines, compétences et expériences se modifient dans chaque langue.
- **Blog — présentation et SEO** : titres, introductions, descriptions SEO et RSS dans les trois langues.
- **Projets — présentation et SEO** : mêmes champs en FR, EN et TR.
- **Profil, photos, CV et réseaux** : trois descriptions globales, mentions de navigation et pieds de page, ainsi que les champs PDF pour les trois langues (un CV peut être laissé vide).
- **Menus, boutons et traductions** : textes d'interface et noms de catégories en FR, EN et TR.

## Publications et projets

- **Articles du blog** : le champ Langue peut être français, anglais ou turc. Chaque article est écrit dans UNE langue et n'est pas traduit automatiquement. Le blog de chaque langue liste tous les articles et fournit un filtre FR / EN / TR. Cliquer sur un article mène à son URL d'origine. Si l'on change de langue depuis un article, le lien mène à l'index du blog afin d'éviter les fausses traductions.
- **Projets** : pour chaque fiche, renseigner titres et résumés français, anglais et turcs ; les champs turcs facultatifs restent compatibles avec les fiches plus anciennes. Les trois URL de fiche utilisent le bon titre et résumé. Les détails linguistiques facultatifs prennent priorité sur l'ancien texte partagé.

## Fonctionnement

Enregistrer dans Pages CMS déclenche une compilation sur GitHub Actions. Si elle échoue, consulter l'onglet Actions du dépôt. Les textes français et anglais déjà enregistrés restent en place. Les brouillons non publiés restent accessibles dans le dépôt GitHub public et ne doivent pas contenir d'informations confidentielles.
