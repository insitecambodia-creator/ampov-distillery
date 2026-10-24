import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Fully static output. When e-commerce arrives, switch individual routes to
// on-demand rendering (`export const prerender = false`) and add an adapter —
// the brochure pages stay static.
export default defineConfig({
  site: 'https://ampov-distillery.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
