// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.moinax.com',
  integrations: [sitemap()],
  i18n: {
    locales: ['en', 'fr', 'nl'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  server: {
    host: '0.0.0.0',
    port: 4321,
    allowedHosts: ['localhost', 'openclaw.taildade28.ts.net'],
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['localhost', 'openclaw.taildade28.ts.net'],
    },
    preview: {
      allowedHosts: ['localhost', 'openclaw.taildade28.ts.net'],
    },
  },
});
