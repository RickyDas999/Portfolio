// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://RickyDas999.github.io',
  base: '/Portfolio',

  vite: {
    plugins: [tailwindcss()],
  },
});