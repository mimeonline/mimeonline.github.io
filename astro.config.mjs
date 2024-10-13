// @ts-check
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://michaelmeierhoff.de',
  integrations: [tailwind(), alpinejs(), sitemap()],
});
