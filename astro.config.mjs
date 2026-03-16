// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.moinax.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'nl'],
    routing: {
      prefixDefaultLocale: true,
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
      allowedHosts: [
        'localhost',
        'openclaw.taildade28.ts.net',
      ],
    },
    preview: {
      allowedHosts: [
        'localhost',
        'openclaw.taildade28.ts.net',
      ],
    },
  },
});
