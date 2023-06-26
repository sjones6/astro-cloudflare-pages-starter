import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://test.app',
  adapter: cloudflare({
    mode: 'directory',
  }),
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/api'),
    }),
    mdx(),
  ],
});
