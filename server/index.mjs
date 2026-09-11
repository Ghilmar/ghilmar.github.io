/**
 * Capa de servidor del asistente IA.
 *
 * Navegador → Interfaz de chat → este proxy → proveedor de IA (Groq/Ollama) → profile.json
 *
 * La clave de la API se lee de server/.env (o server/.env.local) y NUNCA viaja
 * al navegador. De esta forma el secreto no queda expuesto en GitHub Pages.
 * Usa el formato OpenAI-compatible (Chat Completions), soportado por Groq y Ollama.
 */

import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

function loadDotEnv(base) {
  for (const name of ['.env.local', '.env']) {
    const file = path.join(base, name);
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, 'utf8').split('\n')) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (!match) continue;
      const [, key, value] = match;
      if (!(key in process.env)) {
        process.env[key] = value.replace(/^(['"])(.*)\1$/, '$2');
      }
    }
  }
}
loadDotEnv(here);
loadDotEnv(root);

const API_URL = process.env.AI_API_URL ?? 'https://api.groq.com/openai/v1';
const API_KEY = process.env.AI_API_KEY ?? '';
const MODEL = process.env.AI_MODEL ?? 'openai/gpt-oss-120b';
const PORT = Number(process.env.PORT ?? 8787);

const profilePath = path.join(root, 'src/data/profile.json');
const profile = existsSync(profilePath)
  ? JSON.parse(readFileSync(profilePath, 'utf8'))
  : { name: 'Gilmar Betancur', role: 'Informático' };

const SYSTEM_PROMPT = `Eres el asistente profesional de ${profile.name}, ${profile.role}.

Responde ÚNICAMENTE usando la información del siguiente perfil público. Reglas estrictas:
- No inventes datos: empresas, proyectos, tecnologías, certificaciones, años, logros ni métricas.
- Si la información solicitada no aparece en el perfil, indícalo claramente. Ejemplo: "No encuentro información suficiente en el perfil para afirmar que tenga experiencia con Kubernetes".
- Responde en español, de forma breve y profesional.

PERFIL:
${JSON.stringify(profile, null, 2)}`;

async function askModel(question) {
  const headers = { 'Content-Type': 'application/json' };
  if (API_KEY) headers.Authorization = `Bearer ${API_KEY}`;

  const res = await fetch(`${API_URL.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: question },
      ],
      temperature: 0.2,
      max_completion_tokens: 600,
    }),
    signal: AbortSignal.timeout(60000),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`El proveedor de IA respondió ${res.status}: ${text.slice(0, 200)}`);
  }

  const data = await res.json();
  const answer = (data.choices?.[0]?.message?.content ?? '').trim();
  if (!answer) throw new Error('El proveedor devolvió una respuesta vacía.');
  return answer;
}

const cors = {
  'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN ?? '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const server = createServer(async (req, res) => {
  const { method, url } = req;

  if (method === 'OPTIONS') {
    res.writeHead(204, cors);
    res.end();
    return;
  }

  if (method === 'GET' && url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json', ...cors });
    res.end(JSON.stringify({ status: 'ok', model: MODEL }));
    return;
  }

  if (method === 'POST' && url === '/api/chat') {
    try {
      let body = '';
      for await (const chunk of req) body += chunk;
      const { question } = JSON.parse(body || '{}');

      if (!question || typeof question !== 'string' || !question.trim()) {
        res.writeHead(400, { 'Content-Type': 'application/json', ...cors });
        res.end(JSON.stringify({ error: 'Pregunta vacía.' }));
        return;
      }

      const answer = await askModel(question.trim());
      res.writeHead(200, { 'Content-Type': 'application/json', ...cors });
      res.end(JSON.stringify({ answer }));
    } catch (err) {
      // Los errores técnicos se registran solo para desarrollo (SKILL Nivel 17).
      console.error('[proxy] Error:', err);
      res.writeHead(502, { 'Content-Type': 'application/json', ...cors });
      res.end(JSON.stringify({ error: 'no_disponible' }));
    }
    return;
  }

  res.writeHead(404, { ...cors });
  res.end();
});

server.listen(PORT, () => {
  console.log(`[proxy] Asistente IA escuchando en http://localhost:${PORT}`);
  console.log(`[proxy] Proveedor: ${API_URL} | modelo: ${MODEL}`);
  if (!API_KEY) console.warn('[proxy] Sin AI_API_KEY configurada.');
});