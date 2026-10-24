# Ampov Distillery — site vitrine (Astro)

Site statique en français, remplaçant WordPress / Elementor / Crocoblock.

## Démarrer

Node ≥ 22.23.4 requis (`.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + build statique dans dist/
npm run preview
```

## Où modifier quoi

| Besoin | Fichier |
| --- | --- |
| Coordonnées, réseaux sociaux, menus | `src/data/site.ts` |
| Points de vente (« Où nous trouver ») | `src/data/partners.ts` |
| Rhums (un Markdown par rhum → `/gamme/<id>/`) | `src/content/gamme/*.md` |
| Actualités (corps vide = carte seule, sans page article) | `src/content/actualites/*.md` |
| Pages | `src/pages/**/*.astro` |
| Couleurs / typographie | `src/styles/global.css` (variables `:root`) |
| Images | `src/assets/<dossier>/` |

### Images « à déposer »

Les pages cherchent chaque image par son chemin dans `src/assets/` (ex. `home/home-page-1.webp`). Une image absente est simplement omise ; dès qu'on dépose le fichier au bon endroit, avec le bon nom, elle apparaît au build suivant, optimisée (WebP, tailles responsives). La liste exacte des fichiers attendus est dans `source-content/MISSING-IMAGES.md`. Le logo se place en `src/assets/brand/logo.webp`.

### URLs conservées

Les URLs WordPress sont reprises à l'identique (`/savoir-faire/`, `/terroir-canne/`, `/nos-creations/`, `/gamme/<slug>/`, `/ou-nous-trouver/`, `/actualites/`, `/actualites/dans-la-presse/`, `/contact/visiter-la-distillerie/`, `/mentions-legales/`…), donc pas de redirections à prévoir pour ces pages. Restent à fournir : le HTML des 9 fiches `/gamme/…` (texte), des 4 articles `/actualite/…` et de `/contact/`.

### Formulaire de visite

Copier `.env.example` en `.env` et renseigner `PUBLIC_FORM_ENDPOINT` (Formspree, Web3Forms, Getform…). Sans endpoint, le bouton ouvre le client mail du visiteur vers `contact@ampov-distillery.com`.

### Contrôle d'âge

Fenêtre « Avez-vous plus de 18 ans ? » (`src/components/AgeGate.astro`), mémorisée dans le navigateur ; non affichée aux robots d'indexation.

## Migration depuis WordPress

Le HTML et les images de l'ancien site sont dans `source-content/` (non publié) ; ce dossier peut être supprimé une fois la migration terminée.

## Déploiement (Cloudflare Pages)

Sortie 100 % statique (`dist/`), pas de PHP ni de base de données.

| Réglage Cloudflare Pages | Valeur |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |
| Variable `NODE_VERSION` | `22.23.4` (Astro 7 exige Node ≥ 22.23.4) |

Chaque branche non-production reçoit automatiquement une URL de prévisualisation `https://<branche>.<projet>.pages.dev`. `public/_headers` les marque `noindex`.

### Mise en ligne : indexation

Par défaut chaque page porte `<meta name="robots" content="noindex, nofollow">` (préproduction). **Au lancement**, définir la variable de build `PUBLIC_INDEXABLE=true` dans Cloudflare (Settings → Variables) et redéployer ; sinon le site restera invisible pour Google.

## E-commerce (plus tard)

Le schéma produit (`src/content.config.ts`) porte déjà `sku`, `priceEur`, `volumeCl`, `abv`. Pistes, de la plus simple à la plus lourde :

- **Shopify Storefront API / Snipcart / Stripe Payment Links** : pages produit restent statiques, le panier est un îlot JS ; le plus rapide à mettre en place.
- **Medusa / Saleor (headless)** : plus de contrôle, plus de maintenance.

Dans tous les cas : ajouter un adaptateur Astro et passer uniquement les routes dynamiques (panier, compte) en rendu à la demande ; la vitrine reste statique. Vente d'alcool en ligne : prévoir vérification d'âge, TVA/accises, licence de vente à distance, CGV.

## Conformité

- Mention « L’abus d’alcool est dangereux pour la santé » en pied de page (loi Evin).
- Compléter `src/pages/mentions-legales.astro` : n° d’enregistrement, directeur de la publication, hébergeur (les mentions de l’ancien site citaient Cloudways et Cloudflare).
- Aucun cookie ni traceur pour l’instant. Si analytics ajouté : outil sans cookies (Plausible, Umami) pour éviter la bannière de consentement.
