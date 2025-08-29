// --------------------------------------------------------------------- 
// Types
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { SOCIAL_SITES } from './constants';
// --------------------------------------------------------------------- 

export interface NavigationItem {
	label: string;
	slug: string;
}

export interface Image {
	alternativeText: string;
	name: string;
	url: string;
	width: number;
	height: number;
}

export type Video = Record<string, unknown>;

export interface SocialSite {
	label: string;
	icon: string;
	baseURL: string;
}

export type SocialSiteType = keyof typeof SOCIAL_SITES;

export interface SocialProfile {
	type: SocialSiteType;
	username: string;
}

// --------------------------------------------------------------------- 
// Settings
// --------------------------------------------------------------------- 

export interface GeneralSettings {
	year: number;
}

export interface SiteSettings {
	meta: {
		title: string;
		description: string;
		keywords: string;
	}
}

export interface PersonalSettings {
	age: number;
	yearsOfExperience: number;
	location: string;
	socials: SocialProfile[];
};

export interface LayoutSettings {
	sections: {
		id: string;
		component: string;
		heading?: {
			title: string;
			subtitle?: string;
		}
	}[]
}