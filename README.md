# Portafolio — Gilmar Betancur

Portafolio profesional de una sola página para **Gilmar Betancur**, Informático y Desarrollador Junior.

Stack: **Astro** · **TypeScript** · **Tailwind CSS v4** · **HTML/CSS3** · **SVG**. Control de versiones con **Git** y hosting gratuito en **GitHub Pages**.

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:4321
npm run check      # typecheck
npm run build      # build estático en dist/
npm run preview    # probar el build de producción
```

## Estructura

```
src/
├── data/profile.json      # Fuente única de verdad del perfil
├── types/profile.ts       # Tipos de datos del perfil
├── lib/
│   ├── profile.ts         # Carga tipada de profile.json
│   └── ai-client.ts       # Abstracción del cliente de IA (Ollama/Llama futuro)
├── layouts/BaseLayout.astro
├── components/            # Navbar, Hero, TechStack, Projects, Timeline, Contact, Footer, ChatWidget, ThemeToggle, Icon
├── styles/global.css      # Tailwind v4 + tokens de diseño + modo oscuro
└── pages/index.astro
public/CV-BetancurGilmar.pdf   # CV descargable
```

### Fuente única de datos

Todo el contenido se alimenta desde `src/data/profile.json`: el CV/página **y** el contexto del futuro agente de IA. Editar ese archivo actualiza toda la web.

## Configurar GitHub Pages

1. Crea un repositorio en GitHub (p. ej. `cv-gilmar-betancur`).
2. En `astro.config.mjs` (o como variables del workflow `SITE_URL` / `BASE_PATH`):
   - `SITE_URL` → `https://<TU-USUARIO>.github.io`
   - `BASE_PATH` → `/<nombre-del-repositorio>`
   - Si el repo es `<usuario>.github.io`, deja `BASE_PATH` en `/` (elimínala).
3. En el repo: **Settings → Pages → Source: GitHub Actions**.
4. La web quedará en `https://<TU-USUARIO>.github.io/<repo>/`.

```bash
git init
git add .
git commit -m "feat: portafolio profesional v1"
git branch -M main
git remote add origin git@github.com:<TU-USUARIO>/<repo>.git
git push -u origin main
```

## Asistente IA (V1)

La interfaz de chat incluye un **fallback elegante**: si el endpoint de IA no está configurado o no responde, muestra un mensaje claro y la página sigue funcionando con normalidad.

Arquitectura preparada para **Llama + Ollama**:

```text
Navegador → Interfaz de chat → Endpoint/API → Ollama → Llama → profile.json
```

- El navegador **no** depende de Ollama directamente.
- Configura `PUBLIC_AI_API_URL` (archivo `.env` o variable de Actions) apuntando a tu backend futuro.
- GitHub Pages es estático: el backend de tu IA debe alojarse aparte. Un ejemplo mínimo de endpoint que responde `{ "answer": "..." }`:

```js
// server.mjs (fuera de esta web, cuando tengas Ollama corriendo)
import express from 'express';
import { execSync } from 'child_process';

const app = express();
app.use(express.json());

app.post('/api/chat', (req, res) => {
  const prompt = `Responde sobre este perfil con datos del CV.\nPregunta: ${req.body.question}`;
  const answer = execSync(`ollama run llama3.2 "${prompt.replaceAll('"', '\\"')}"`).toString();
  res.json({ answer });
});

app.listen(8787, () => console.log('API del asistente en :8787'));
```

> La V1 no implementa RAG/embeddings/vector DB. Esa evolución (`profile.json → contexto → Llama`) queda documentada en `SKILL.md` (niveles 12-15).

## Notas

- `public/CV-BetancurGilmar.pdf` es una copia servida desde `documentoCV/`. Si actualizas el CV, vuelve a copiarlo a `public/`.
- No hay enlaces ficticios: los proyectos solo muestran enlaces a GitHub/Demo cuando existen en `profile.json`.
- Accesibilidad: contraste adecuado, navegación por teclado, `prefers-reduced-motion`, etiquetas ARIA.