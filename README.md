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
│   └── ai-client.ts       # Abstracción del cliente de IA (Groq/Ollama)
├── layouts/BaseLayout.astro
├── components/            # Navbar, Hero, TechStack, Projects, Timeline, Contact, Footer, ChatWidget, ThemeToggle, Icon
├── styles/global.css      # Tailwind v4 + tokens de diseño + modo oscuro
└── pages/index.astro
public/CV-BetancurGilmar.pdf   # CV descargable
```

### Fuente única de datos

Todo el contenido se alimenta desde `src/data/profile.json`: el CV/página **y** el contexto del futuro agente de IA. Editar ese archivo actualiza toda la web.

## Configurar GitHub Pages

1. Crea el repositorio **`ghilmar.github.io`** (sitio de usuario) → la web queda en `https://ghilmar.github.io/`.
2. `astro.config.mjs` ya apunta a `https://ghilmar.github.io` con `base: /` (repo de usuario). Si en el futuro usas un repo de proyecto, cambia `BASE_PATH` a `/<nombre-del-repositorio>`.
3. En el repo: **Settings → Pages → Source: GitHub Actions** (una primera vez) y registra tu clave `~/.ssh/id_rsa.pub` en **Settings → SSH and GPG keys**.
4. El workflow `deploy.yml` se dispara solo al hacer push a `main`.

```bash
git init
git add .
git commit -m "feat: portafolio profesional v1"
git branch -M main
git remote add origin git@github.com:Ghilmar/ghilmar.github.io.git
git push -u origin main
```

## Asistente IA (V1)

La interfaz de chat incluye un **fallback elegante**: si el endpoint de IA no está configurado o no responde, muestra un mensaje claro y la página sigue funcionando con normalidad.

Arquitectura: usa el formato **OpenAI-compatible (Chat Completions)**, actualmente conectado a **Groq** y listo para Ollama:

```text
Navegador → Interfaz de chat → Proxy (server/) → Groq / Ollama → profile.json
```

### Cómo activarlo

1. En `server/.env` (no se sube a Git) define:
   - `AI_API_URL` → `https://api.groq.com/openai/v1` (o `http://localhost:11434/v1` para Ollama local).
   - `AI_API_KEY` → clave del proveedor (**nunca** viaja al navegador).
   - `AI_MODEL` → el que ofrezca tu cuenta. Consulta disponibles con: `curl https://api.groq.com/openai/v1/models -H "Authorization: Bearer $AI_API_KEY"`. Ejemplos: `openai/gpt-oss-120b`, `openai/gpt-oss-20b`, `qwen/qwen3.8-27b`.
2. Arranca el proxy:

   ```bash
   cd server && node index.mjs        # escucha en :8787 (GET /health)
   ```

3. En `.env.local` del frontend: `PUBLIC_AI_API_URL=http://localhost:8787/api/chat`.

Prueba rápida: `curl -X POST http://localhost:8787/api/chat -H 'Content-Type: application/json' -d '{"question":"¿Qué sabe hacer Gilmar?"}'`

> GitHub Pages es estático: el proxy es tu capa de servidor. Para producción, despliega `server/` en el hosting que prefieras (Render, Railway, Fly.io, VPS…) y apunta `PUBLIC_AI_API_URL` a su URL pública. El proxy responde `{ "answer": "..." }` y mantiene la clave fuera del frontend. Si la IA no responde, el chat muestra el mensaje de caída de `SKILL.md` (Nivel 17).
>
> La V1 no implementa RAG/embeddings/vector DB. Esa evolución (`profile.json → contexto → Llama`) queda documentada en `SKILL.md` (niveles 12-15).

## Notas

- `public/CV-BetancurGilmar.pdf` es una copia servida desde `documentoCV/`. Si actualizas el CV, vuelve a copiarlo a `public/`.
- No hay enlaces ficticios: los proyectos solo muestran enlaces a GitHub/Demo cuando existen en `profile.json`.
- Accesibilidad: contraste adecuado, navegación por teclado, `prefers-reduced-motion`, etiquetas ARIA.