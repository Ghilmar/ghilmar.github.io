import profileRaw from "../data/profile.json";
import type { Profile } from "../types/profile";

/**
 * Fuente única de verdad del perfil profesional.
 * Alimenta el portafolio y, en una futura versión, el contexto del agente de IA.
 */
export const profile = profileRaw as Profile;

export const baseUrl = import.meta.env.BASE_URL.endsWith("/")
	? import.meta.env.BASE_URL
	: `${import.meta.env.BASE_URL}/`;

export const downloadCvHref = `${baseUrl}${profile.downloadCv}`;
