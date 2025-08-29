// --------------------------------------------------------------------- 
// App > Types
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { SECTION_COMPONENT_MAP, SOCIAL_SITES } from '@/app/constants';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
// Base
// ---------------------------------------------------------------------
export interface BaseComponentProps {
	className?: string;
	children?: React.ReactNode;
	as?: keyof React.JSX.IntrinsicElements;
}

export interface BaseSectionProps extends BaseComponentProps {
	id: string;
	heading?: Heading;
}

// --------------------------------------------------------------------- 
// General
// ---------------------------------------------------------------------
export interface MenuItem {
	id: string;
	href: string;
	label: string;
	className?: string;
}

export interface Heading {
	title: string;
	subtitle?: string;
}

export interface NavigationItem {
	label: string;
	slug: string;
}

export interface Skill {
	name: string;
	icon: string;
	order: number;
	link?: string;
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

// --------------------------------------------------------------------- 
// Section
// --------------------------------------------------------------------- 
export type SectionData = Record<string, unknown>;
export type SectionType = keyof typeof SECTION_COMPONENT_MAP;