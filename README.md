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
| Coordonnées, baseline, réseaux sociaux, menu | `src/data/site.ts` |
| Produits (un fichier Markdown par produit) | `src/content/produits/*.md` |
| Pages | `src/pages/*.astro` |
| Couleurs / typographie | `src/styles/global.css` (variables `:root`) |

Tout ce qui est marqué `TODO` est un contenu provisoire à remplacer par le contenu du site WordPress actuel.

## Migration depuis WordPress

1. Reprendre les textes (accueil, à propos, produits, mentions légales).
2. Exporter les images de `wp-content/uploads`, les placer dans `src/assets/` et les référencer dans le frontmatter des produits (`image:`). Astro génère automatiquement WebP/AVIF et les tailles responsives.
3. Relever toutes les URLs actuelles et ajouter une redirection 301 pour chaque URL qui change (SEO) — fichier `_redirects` (Netlify/Cloudflare Pages) ou `redirects` dans `astro.config.mjs`.
4. Garder le même domaine ; basculer le DNS uniquement après recette.

## Déploiement

Sortie 100 % statique (`dist/`) : Cloudflare Pages, Netlify ou Vercel (offres gratuites suffisantes), ou même le serveur Cloudways existant derrière Nginx. Pas de PHP, pas de base de données.

## E-commerce (plus tard)

Le schéma produit (`src/content.config.ts`) porte déjà `sku`, `priceEur`, `volumeCl`, `abv`. Pistes, de la plus simple à la plus lourde :

- **Shopify Storefront API / Snipcart / Stripe Payment Links** : pages produit restent statiques, le panier est un îlot JS ; le plus rapide à mettre en place.
- **Medusa / Saleor (headless)** : plus de contrôle, plus de maintenance.

Dans tous les cas : ajouter un adaptateur Astro et passer uniquement les routes dynamiques (panier, compte) en rendu à la demande ; la vitrine reste statique. Vente d'alcool en ligne : prévoir vérification d'âge, TVA/accises, licence de vente à distance, CGV.

## Conformité

- Mention « L’abus d’alcool est dangereux pour la santé » en pied de page (loi Evin).
- Compléter `src/pages/mentions-legales.astro`.
- Aucun cookie ni traceur pour l’instant. Si analytics ajouté : outil sans cookies (Plausible, Umami) pour éviter la bannière de consentement.
