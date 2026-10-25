import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un fichier Markdown par rhum. L'URL publique reste /gamme/<id>/ comme sur
// WordPress. Les champs sku / priceEur / volumeCl / abv sont prêts pour la
// future boutique. `image` est un chemin sous src/assets/ (résolu à l'affichage,
// donc un fichier absent n'empêche pas le build).
const gamme = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gamme' }),
  schema: z.object({
    name: z.string(),
    range: z.enum(['permanente', 'collection']),
    type: z.string(), // Blanc, Ambré, Blend…
    image: z.string().optional(),
    summary: z.string().optional(),
    abv: z.number().optional(),
    volumeCl: z.number().optional(),
    sku: z.string().optional(),
    priceEur: z.number().optional(),
    order: z.number().default(100),
  }),
});

// Actualités. Tant que le corps Markdown est vide, seule la carte du listing
// est affichée (pas de page article).
const actualites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actualites' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { gamme, actualites };
