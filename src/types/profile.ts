export interface PersonalInfo {
	birthDate: string;
	birthPlace: string;
	maritalStatus: string;
	idNumber: string;
}

export interface SocialLinks {
	github: string;
	linkedin: string;
}

export interface Language {
	name: string;
	level: string;
}

export interface TechItem {
	name: string;
	icon?: string;
}

export interface TechCategory {
	title: string;
	description: string;
	items: TechItem[];
}

export interface Project {
	name: string;
	category: string;
	company: string;
	description: string;
	problem: string;
	solution: string;
	result: string;
	technologies: string[];
	github: string;
	demo: string;
}

export interface ExperienceItem {
	period: string;
	role: string;
	company: string;
	description: string;
	achievements: string[];
}

export interface EducationItem {
	period: string;
	degree: string;
	institution: string;
	location: string;
}

export interface Profile {
	name: string;
	role: string;
	specialty: string;
	shortIntro: string;
	valueProposition: string;
	location: string;
	email: string;
	personalInfo: PersonalInfo;
	downloadCv: string;
	socialLinks: SocialLinks;
	languages: Language[];
	interests: string[];
	techStack: {
		categories: TechCategory[];
	};
	projects: Project[];
	experience: ExperienceItem[];
	education: EducationItem[];
}
