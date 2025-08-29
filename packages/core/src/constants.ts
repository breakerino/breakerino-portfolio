// --------------------------------------------------------------------- 
// Constants
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { SocialSite } from './types';
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