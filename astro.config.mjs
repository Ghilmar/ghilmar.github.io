// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Configuración para GitHub Pages:
// - Repo <usuario>.github.io  → SITE_URL=https://<usuario>.github.io, BASE_PATH=/
// - Repo de proyecto          → SITE_URL=https://<usuario>.github.io, BASE_PATH=/<nombre-repo>
// El valor por defecto apunta a https://ghilmar.github.io (repo de usuario).
const SITE_URL = process.env.SITE_URL ?? 'https://ghilmar.github.io';
const BASE_PATH = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  vite: {
    plugins: [tailwindcss()],
  },
});