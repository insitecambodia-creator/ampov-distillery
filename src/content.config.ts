import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Products live as Markdown files. The schema already carries the fields a shop
// needs (sku, price, volume, abv) so e-commerce can be layered on without a
// content migration.
const produits = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/produits' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      category: z.string(), // ex. Rhum, Gin, Liqueur
      summary: z.string().max(200),
      image: image().optional(),
      imageAlt: z.string().optional(),
      abv: z.number().optional(), // % vol.
      volumeCl: z.number().optional(),
      sku: z.string().optional(),
      priceEur: z.number().optional(), // TTC — non affiché tant que la boutique n'existe pas
      order: z.number().default(100),
    }),
});

export const collections = { produits };
