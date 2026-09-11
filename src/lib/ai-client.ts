/**
 * Abstracción de la capa de IA.
 *
 * El navegador NO depende directamente de Ollama. Esta capa comunica con un
 * endpoint/API del proyecto configurado mediante PUBLIC_AI_API_URL.
 * De esta forma, el modelo (Llama + Ollama hoy u otro mañana) puede
 * sustituirse sin rediseñar la interfaz.
 *
 * Si el endpoint no está configurado o falla, se lanza un error que el
 * componente de chat traduce a un mensaje de caída elegante.
 */

interface AssistantResponse {
	answer?: string;
}

export class ChatUnavailableError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "ChatUnavailableError";
	}
}

export const AI_ENDPOINT: string = import.meta.env.PUBLIC_AI_API_URL ?? "";

export const AI_AVAILABLE = AI_ENDPOINT.length > 0;

const REQUEST_TIMEOUT_MS = 15000;

export async function askAssistant(question: string): Promise<string> {
	if (!AI_AVAILABLE) {
		throw new ChatUnavailableError("PUBLIC_AI_API_URL no está configurado.");
	}

	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

	try {
		const res = await fetch(AI_ENDPOINT, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ question }),
			signal: controller.signal,
		});

		if (!res.ok) {
			throw new ChatUnavailableError(`Respuesta del servidor: ${res.status}`);
		}

		const data = (await res.json()) as Partial<AssistantResponse>;
		const answer = data.answer?.trim();

		if (!answer) {
			throw new ChatUnavailableError("Respuesta vacía del servidor.");
		}

		return answer;
	} catch (err) {
		// Los errores técnicos solo se registran para desarrollo.
		console.error("[ai-client]", err);
		throw new ChatUnavailableError(
			err instanceof Error ? err.message : "Error de conexión.",
		);
	} finally {
		clearTimeout(timeout);
	}
}
