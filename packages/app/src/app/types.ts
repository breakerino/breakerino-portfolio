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
	id: number;
	name: string;
	icon: string;
	order: number;
	link?: string;
}

export interface MediaFile {
	id?: number;
	name?: string;
	url: string;
	width: number|null;
	height: number|null;
	alternativeText?: string|null;
}

export type Media = {
	thumbnail: MediaFile;
	video: MediaFile;
}	

export interface MediaSource {
	src: string;
	type: string;
}

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

export interface Link {
	text: string;
	icon: string;
	url: string;
}

export interface Project {
	id: number;
	name: string;
	finishDate: string;
	description: string;
	technologies: Skill[];
	media: Media;
	links: Link[];
}

export interface WorkExperience {
	id: number;
	companyName: string;
	companySiteURL: string;
	companyLogo: MediaFile;
	location: string;
	startDate: string;
	endDate: string;
	employmentType: string;
	description: string;
	position: string;
	skills: Skill[]
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
		image: MediaFile
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