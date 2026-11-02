import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Con dominio propio basta el valor por defecto; en la vista previa de GitHub Pages el workflow define estas variables
  site: process.env.SITIO_URL ?? 'https://grupokassar.com',
  base: process.env.SITIO_BASE ?? '/',
  trailingSlash: 'always',
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
    // Sin scripts en línea para mantener una CSP estricta
    build: { assetsInlineLimit: 0 },
  },
});
