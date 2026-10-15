# Administration complète du portfolio — Pages CMS

Portail privé de gestion : https://app.pagescms.org (connexion via le compte GitHub autorisé au dépôt `miconde-98.github.io`). Aucune page d'administration n'est exposée dans le menu public.

## Pages et présentation

* **Accueil — contenus bilingues** : titres, sous-titres, textes, référencement, études, centres d'intérêt, compétences et expériences. Les listes peuvent être complétées, supprimées ou réordonnées. Les deux langues sont enregistrées séparément. Par défaut, la liste d'expériences est vide jusqu'à confirmation des intitulés et dates ; le paragraphe de présentation reste visible.
* **Blog — présentation et SEO** : titre, accroche, texte introductif, RSS et méta-description en français et anglais.
* **Projets — présentation et SEO** : titre, accroche, texte introductif, filtre de catégorie et méta-description bilingues.
* **Profil, photos, CV et réseaux** : nom public, monogramme, identité du menu, phrases du pied de page, photographies, CV PDF, email, liens GitHub et LinkedIn, métadonnées globales.
* **Menus, boutons et traductions** : navigation, libellés, messages vides, mots des catégories et statuts. Modifier uniquement les libellés, pas les clés techniques (economy, research, etc.).

## Publications et réalisations

* **Articles du blog** : créer et modifier les articles Markdown. Le champ `Rendre public` détermine la présence de l'article dans le site ; le contenu des brouillons est tout de même visible dans le dépôt GitHub public.
* **Projets** : créer et modifier des fiches de recherche et data science. Le lien GitHub est optionnel ; une fiche peut rester en brouillon.

## CV et photographies

Le média **CV et documents PDF** enregistre les fichiers dans `public/docs/` et fournit un lien de type `/docs/nom.pdf`. Le média **Images** enregistre dans `public/images/` ; les photos déjà en ligne sont conservées, sauf si vous les remplacez. Le bouton CV apparaît lorsque le fichier a été sélectionné.

## Publication et sécurité

Chaque enregistrement Pages CMS crée un commit sur `main` et déclenche GitHub Actions. La publication peut prendre quelques minutes. En cas d'échec de build, ouvrir l'onglet Actions du dépôt GitHub pour obtenir l'erreur avant de modifier le site. Les accès à Pages CMS dépendent des autorisations GitHub du dépôt ; le fait de masquer le lien d'administration n'est pas la mesure de sécurité.

> Important : les champs bilingues de chaque page sont indépendants. Une modification en français ne traduit pas automatiquement la version anglaise. Toute page publique conserve sa présentation graphique prédéfinie ; les textes, listes, images et contenus éditoriaux sont administrables.
