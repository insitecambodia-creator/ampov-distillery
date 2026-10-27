# Ampov Distillery — règles de design (voulues par le client)

À respecter pour tout changement sur ce site :

- **Texte jamais noir.** Gris foncé uniquement : `--fg` (#3b3834) pour titres/menu, `--text` (#4a4743) pour le texte courant. Pas de `#000`, pas de quasi-noir (`#1…`), y compris sur les boutons.
  Sur fond sombre (photo, bandeau vert) : texte blanc ou doré, jamais gris foncé.
- **Texte courant : Barlow 400, 15 px** (`0.9375rem`, soit 2 px de moins que l'ancien 17 px). Gras = Barlow 600.
- **Titres : Barlow Semi Condensed 600** (H1 en majuscules).
- Polices auto-hébergées (`src/assets/fonts/`, licence OFL), jamais depuis Google Fonts.
- Boutons : un seul système `.btn` (primaire / `ghost`, version `on-dark` sur fond sombre) — voir `src/styles/global.css`.
- Thème clair (crème) ; les couleurs sont des variables en haut de `global.css`.
- Le site reste en `noindex` tant que `PUBLIC_INDEXABLE=true` n'est pas défini sur le build de production.
