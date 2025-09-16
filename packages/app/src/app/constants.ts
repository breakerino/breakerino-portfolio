// --------------------------------------------------------------------- 
// Constants
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { SocialSite } from '@/app/types';
import HeroSection from '@/sections/Hero';
import AboutMeSection from '@/sections/AboutMe';
import SkillsSection from '@/sections/Skills';
import ExperienceSection from '@/sections/Experience';
import ProjectsSection from '@/sections/Projects';
import ContactSection from '@/sections/Contact';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
// General
// --------------------------------------------------------------------- 
export const DEFAULT_EVENT_BUS_NAMESPACE = 'breakerino';
export const DEFAULT_EVENT_BUS_LABEL = 'Breakerino';
export const DEFAULT_LOGGER_LABEL = 'Breakerino';

export const TRANSITION_DURATION = 300;

// --------------------------------------------------------------------- 
// Social sites
// --------------------------------------------------------------------- 
export const SOCIAL_SITES: Record<string, SocialSite> = {
	github: {
		label: 'GitHub',
		icon: 'github',
		baseURL: 'https://github.com'
	},
	linkedin: {
		label: 'LinkedIn',
		icon: 'linkedin',
		baseURL: 'https://www.linkedin.com/in'
	},
	facebook: {
		label: 'Facebook',
		icon: 'facebook',
		baseURL: 'https://www.facebook.com'
	},
	instagram: {
		label: 'Instagram',
		icon: 'instagram',
		baseURL: 'https://www.instagram.com'
	},
	spotify: {
		label: 'Spotify',
		icon: 'spotify',
		baseURL: 'https://open.spotify.com/user'
	},
	youtube: {
		label: 'YouTube',
		icon: 'youtube',
		baseURL: 'https://www.youtube.com'
	},
	myanimelist: {
		label: 'MyAnimeList',
		icon: 'myanimelist',
		baseURL: 'https://myanimelist.net/profile'
	}
}

// --------------------------------------------------------------------- 
// Icons
// --------------------------------------------------------------------- 
export const ICON_SET_URI = '/assets/svg/icons.svg';

// --------------------------------------------------------------------- 
// Header
// --------------------------------------------------------------------- 
export const HEADER_STICKY_SCROLL_THRESHOLD_Y = 768;
export const HEADER_HIDE_SCROLL_OFFSET_Y = 10;
export const HEADER_SHOW_SCROLL_OFFSET_Y = 75;

// --------------------------------------------------------------------- 
// Sections
// --------------------------------------------------------------------- 
export const SECTION_COMPONENT_MAP = {
	'hero': HeroSection,
	'about-me': AboutMeSection,
	'skills': SkillsSection,
	'projects': ProjectsSection,
	'experience': ExperienceSection,
	'contact': ContactSection
}

// --------------------------------------------------------------------- 
// React Query
// --------------------------------------------------------------------- 
export const DEFAULT_STALE_TIME = 60 * 60 * 1000; // 1h
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 1000; // 24h