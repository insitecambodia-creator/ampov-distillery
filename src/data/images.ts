import type { ImageMetadata } from 'astro';

// Images are looked up by path under src/assets/ (e.g. 'home/home-page-1.webp').
// A missing file returns undefined and the page simply omits it, so images can
// be dropped into src/assets/ at any time without touching the templates.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/**/*.{jpg,jpeg,png,webp,avif,gif}',
  { eager: true },
);

export function img(path: string): ImageMetadata | undefined {
  return modules[`../assets/${path}`]?.default;
}

export function imgs(paths: string[]) {
  return paths.flatMap((path) => {
    const src = img(path);
    return src ? [{ path, src }] : [];
  });
}

// Toutes les images d'un dossier de src/assets/ (triées par nom) : une galerie se remplit en y déposant des fichiers.
export function listImages(dir: string): string[] {
  const prefix = `../assets/${dir}/`;
  return Object.keys(modules).filter((k) => k.startsWith(prefix) && !k.slice(prefix.length).includes('/')).sort().map((k) => k.slice('../assets/'.length));
}
