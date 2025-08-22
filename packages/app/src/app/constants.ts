// --------------------------------------------------------------------- 
// Constants
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { SocialSite } from '@/app/types';
// --------------------------------------------------------------------- 

export const DEFAULT_EVENT_BUS_NAMESPACE = 'breakerino';
export const DEFAULT_EVENT_BUS_LABEL = 'Breakerino';
export const DEFAULT_LOGGER_LABEL = 'Breakerino';

export const ICON_SET_URI = '/assets/svg/icons.svg';

// --------------------------------------------------------------------- 
// Socials
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