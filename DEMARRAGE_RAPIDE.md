# Démarrage rapide — Portfolio de Mohamed I CONDE

## Ce que contient l'archive

- **Site public (3 onglets uniquement)** : Accueil, Blog, Projets.
- **Deux langues pour l'interface** : FR et EN.
- **Articles quotidiens** : fichiers Markdown, un article = une langue, articles affichés dès qu'ils sont marqués « publiés ».
- **Éditeur réservé aux personnes autorisées** : se connecter sur **https://app.pagescms.org/** via GitHub (aucune interface d'édition dans le site public).
- **Trois fiches de recherche** : présentations prudentes, sans faux dépôt GitHub.
- **Deux photographies** : portrait en extérieur et prise de parole.

## Publier le site (une fois seulement)

1. Ouvrir **github.com** et créer un dépôt public nommé `TON_IDENTIFIANT.github.io`.
2. Importer tous les fichiers et dossiers contenus dans cette archive (y compris `.pages.yml` et `.github`).
3. Dans le dépôt GitHub, aller à **Settings → Pages → Source : GitHub Actions**.
4. Aller à l'onglet **Actions** et attendre la validation du déploiement.
5. Ouvrir `https://TON_IDENTIFIANT.github.io/`.

## Publier ton premier article

1. Ouvrir **https://app.pagescms.org/** et te connecter à ton compte GitHub.
2. Autoriser l'app sur le dépôt de ton site.
3. Dans **Articles du blog**, créer un nouvel article.
4. Renseigner titre, résumé, langue, date, catégorie et texte.
5. Cocher **Rendre public** seulement quand l'article est prêt.
6. Enregistrer et attendre le déploiement GitHub Actions. Copier le lien de l'article pour le partager sur LinkedIn/Facebook.

## Compléter les informations manquantes

- **Profil GitHub / LinkedIn** : dans Pages CMS, rubrique **Coordonnées et liens**.
- **CV** : ajouter les vrais fichiers PDF dans `public/docs/`, puis renseigner `cvFr` et `cvEn` (ex. `/docs/cv-fr.pdf`). Le bouton de téléchargement sera activé automatiquement.
- **Nouveaux projets** : rubrique **Projets**, ajouter les présentations FR/EN et ton URL GitHub réelle.

**Sécurité :** le site public ne propose pas de page de rédaction ; modifier les fichiers exige les droits GitHub. Toutefois, un dépôt **public** rend ses fichiers source lisibles, y compris les brouillons Markdown non publiés. Ne pas enregistrer de textes réellement confidentiels dans le dépôt.

**Note de test :** la compilation Astro nécessite une connexion Internet au premier lancement (`npm install`). L'environnement ayant servi à créer l'archive n'a pas permis ce téléchargement. Vérifier le premier déploiement GitHub Actions avant d'annoncer le site comme opérationnel.
