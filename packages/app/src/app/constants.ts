// --------------------------------------------------------------------- 
// Constants
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { MenuItem } from '@/app/types';
import { LogoProps } from '@/components/Logo';
// --------------------------------------------------------------------- 

export const DEFAULT_EVENT_BUS_NAMESPACE = 'breakerino';
export const DEFAULT_EVENT_BUS_LABEL = 'Breakerino';
export const DEFAULT_LOGGER_LABEL = 'Breakerino';

export const ICON_SET_URI = '/assets/svg/icons.svg';

// --------------------------------------------------------------------- 
// Header | Demo data
// --------------------------------------------------------------------- 
export const MENU_ITEMS: MenuItem[] = [
	{ id: 'about', href: '#', label: 'About me' },
	{ id: 'skills', href: '#', label: 'Skills' },
	{ id: 'projects', href: '#', label: 'Projects' },
	{ id: 'experience', href: '#', label: 'Experience' },
	{ id: 'contact', href: '#', label: 'Contact' },
];

export const LOGO: Omit<LogoProps, 'className' | 'href'> = {
	src: '/assets/svg/breakerino-logo.svg',
	alt: 'Breakerino logo',
	width: 202,
	height: 32
};