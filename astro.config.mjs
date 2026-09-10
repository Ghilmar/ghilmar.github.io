// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Configuración para GitHub Pages:
// - Sustituye SITE_URL por tu URL final (https://<usuario>.github.io)
// - Sustituye BASE_PATH por el nombre del repositorio (/<nombre-repo>)
//   o elimínalo si usas un repo <usuario>.github.io.
const SITE_URL = process.env.SITE_URL ?? 'https://TU-USUARIO.github.io';
const BASE_PATH = process.env.BASE_PATH ?? '/TU-REPO';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  vite: {
    plugins: [tailwindcss()],
  },
});