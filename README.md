# Mohamed I CONDE — Portfolio académique et blog (FR/EN)

**Version de développement V2 — Astro + Pages CMS + GitHub Pages**

Cette version remplace la démonstration en HTML : les articles et projets sont désormais de véritables contenus Markdown, et la rédaction est administrée hors du site public. Le design reprend les deux photographies sélectionnées.

## 1. Installation locale

Pré-requis : Node.js 22 (ou >=20.3) et npm.

```bash
npm install
npm run dev
```

Ouvrir l'adresse affichée (habituellement `http://localhost:4321`).

La compilation de production :

```bash
npm run build
npm run preview
```

**Remarque sur la livraison :** dans l'environnement de création, l'accès au registre npm était indisponible. Les fichiers ont été générés et contrôlés statiquement, mais la compilation complète Astro nécessite `npm install` sur une machine connectée. Voir le guide de tests avant mise en ligne.

## 2. Publier sur GitHub Pages

1. Créer un dépôt **public** idéalement nommé `VOTRE_IDENTIFIANT.github.io`. Cela donne une URL simple `https://VOTRE_IDENTIFIANT.github.io/`.
2. Décompresser l'archive, envoyer **le contenu** du dossier racine dans ce dépôt (inclure `.github/workflows/deploy.yml` et `.pages.yml`, fichiers parfois masqués).
3. Dans GitHub, ouvrir **Settings > Pages > Build and deployment**, choisir **GitHub Actions**.
4. Chaque mise à jour sur la branche `main` déclenchera la compilation/déploiement. Suivre l'onglet **Actions**. Le déploiement n'est réussi que lorsque le workflow est vert.
5. L'action déduit automatiquement l'adresse GitHub Pages à partir du nom du dépôt. Pour un nom de dépôt ordinaire, elle configure un chemin préfixe ; toutefois, pour une meilleure compatibilité des images insérées par le CMS, **préférer le dépôt spécial** `VOTRE_IDENTIFIANT.github.io`.

Le site n'est **pas publié automatiquement** depuis ce ZIP. Il faut créer le dépôt et l'envoyer sur GitHub.

## 3. Accéder à la rédaction privée

Pages CMS n'ajoute **aucun onglet Rédaction** au site public.

1. Ouvrir **https://app.pagescms.org** séparément.
2. Se connecter au compte GitHub qui a le droit de modifier le dépôt.
3. Installer/autoriser l'application GitHub Pages CMS sur le dépôt, selon le parcours proposé.
4. Ouvrir le dépôt : `.pages.yml` configure les collections **Articles**, **Projets** et **Coordonnées**.
5. Créer un article : titre, date, langue, catégorie, résumé, texte ; conserver **Rendre public = non** jusqu'à relecture.
6. Activer **Rendre public**, enregistrer, attendre la fin de l'action GitHub, puis consulter le blog.

> Sécurité : la visibilité d'un lien n'est pas un contrôle d'accès. L'éditeur réside sur Pages CMS et seules les personnes autorisées sur GitHub peuvent effectuer des modifications. Le contenu des dépôts publics, y compris les brouillons Markdown committés, est **lisible dans GitHub**. Brouillon absent du site ≠ brouillon confidentiel. Ne jamais y mettre des données sensibles, articles confidentiels, mots de passe ou résultats non partageables. Pour des brouillons réellement privés, rédiger localement ou dans un espace privé distinct et ne copier que la version publiable.

## 4. Ajouter un article quotidien

L'administration écrit des fichiers `.md` dans `src/content/posts/` avec le schéma :

```yaml
---
title: "Titre de mon article"
description: "Résumé de quelques lignes"
date: 2026-10-15
language: fr
category: economy
published: true
featured: false
cover: ""
tags: "Inflation, Macroéconomie"
---
```

En dessous, le contenu est rédigé en Markdown. Les blocs de code et les formules LaTeX (KaTeX) sont prévus. Un exemple de **brouillon non publié** est livré à `src/content/posts/exemple-brouillon.md`.

Langues : interface du site disponible en FR/EN ; chaque article reste dans sa langue d'origine. Un article français est à `/fr/blog/identifiant/`, un article anglais à `/en/blog/identifiant/`. Les deux index de blog montrent tous les articles avec un filtre de langue.

## 5. Ajouter un projet

Dans Pages CMS > **Projets**, renseigner les titres et résumés FR/EN, catégorie, statut, outils et éventuellement le dépôt GitHub. Le lien vers GitHub n'est affiché que s'il est réellement renseigné. Un projet `published: false` est absent du site public.

Trois exemples de tes véritables axes de recherche sont préremplis avec des descriptions prudentes, sans résultats inventés. Désactiver `published` pour un projet que tu ne souhaites pas exposer.

## 6. CV, GitHub, LinkedIn

Dans Pages CMS > **Coordonnées et liens** (ou directement `src/data/site.json`), ajouter :

- `github` et `linkedin` : tes véritables URLs.
- `cvFr` : `/docs/cv-fr.pdf` si tu as mis le PDF à `public/docs/cv-fr.pdf`.
- `cvEn` : `/docs/cv-en.pdf` pour la version anglaise.

**Aucun CV factice n'a été publié.** Tant que les champs CV sont vides, un libellé de disponibilité future apparaît à la place du bouton de téléchargement.

Pour ajouter ou remplacer tes photos, actualiser `public/images/portrait.webp` et `public/images/speaking.webp`.

## 7. Contrôles avant diffusion

- Vérifier la compilation via `npm run build` dans GitHub Actions.
- Tester les pages `/fr/`, `/en/`, `/fr/blog/`, `/en/blog/`, `/fr/projects/` et `/en/projects/`.
- Créer un brouillon et vérifier qu'aucun article ne s'affiche sur le site tant que `published` est désactivé.
- Publier volontairement un article de test, vérifier le lien permanent, les équations, le code, l'image et le partage social, puis le retirer si nécessaire.
- Vérifier l'ouverture d'une URL directement depuis un réseau social et sur mobile.
- Vérifier les éléments qui seront publics : email, photographies, projets, CV et textes.
- Ajouter ensuite un `package-lock.json` généré par npm à ton dépôt pour des installations reproductibles ; le workflow pourra alors remplacer `npm install` par `npm ci`.

## 8. Limitations de cette version

- La rédaction est proposée via le service externe Pages CMS. La disponibilité et les autorisations doivent être vérifiées après la connexion GitHub.
- Les brouillons sont masqués des pages du site, **pas du dépôt GitHub public**.
- La recherche porte sur le titre, le résumé, les tags et le Markdown des articles chargés sur la page d'index. Un moteur d'indexation dédié (Pagefind) sera préférable quand le blog atteindra un grand volume.
- Les traductions automatiques des articles, les commentaires, les statistiques, les newsletters et la programmation différée ne sont pas inclus.
- Les images Markdown insérées via Pages CMS avec des chemins absolus supposent une publication à la racine (dépôt `username.github.io`).

## Documentation officielle

- Astro Github Pages : https://docs.astro.build/en/guides/deploy/github/
- Pages CMS Quick Start : https://pagescms.org/docs/quick-start/
- Pages CMS configuration : https://pagescms.org/docs/configuration/
