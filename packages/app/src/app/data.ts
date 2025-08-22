// --------------------------------------------------------------------- 
// Data
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
// Types
// --------------------------------------------------------------------- 
import { MenuItem } from '@/app/types';
import { LogoProps } from '@/components/Logo';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
// Header
// --------------------------------------------------------------------- 
export const HEADER_MENU_ITEMS: MenuItem[] = [
	{ id: 'about', href: '#', label: 'About me' },
	{ id: 'skills', href: '#', label: 'Skills' },
	{ id: 'projects', href: '#', label: 'Projects' },
	{ id: 'experience', href: '#', label: 'Experience' },
	{ id: 'contact', href: '#', label: 'Contact' },
];

export const HEADER_LOGO: Omit<LogoProps, 'className' | 'href'> = {
	src: '/assets/svg/breakerino-logo.svg',
	alt: 'Breakerino logo',
	width: 202,
	height: 32
};