// --------------------------------------------------------------------- 
// Types
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { SOCIAL_SITES } from '@/app/constants';
// --------------------------------------------------------------------- 

export interface MenuItem {
  id: string;
  href: string;
  label: string;
  className?: string;
}

export interface SocialSite {
	label: string;
	icon: string;
	baseURL: string;
}

export interface SocialProfile {
	id: keyof typeof SOCIAL_SITES;
	username: string;
}