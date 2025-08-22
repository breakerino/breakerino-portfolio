// --------------------------------------------------------------------- 
// Types
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