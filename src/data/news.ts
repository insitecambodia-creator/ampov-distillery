import { getCollection } from 'astro:content';

// Articles du blog visibles (hors brouillons), du plus récent au plus ancien.
export async function getPosts() {
  return (await getCollection('actualites', (p) => !p.data.draft)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
