// --------------------------------------------------------------------- 
// Data
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
// Types
// --------------------------------------------------------------------- 
import { MenuItem, SocialProfile } from '@/app/types';
import { LogoProps } from '@/components/Logo';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
// Header
// --------------------------------------------------------------------- 
export const HEADER_MENU_ITEMS: MenuItem[] = [
	{ id: 'about-me', href: '#about-me', label: 'About me' },
	{ id: 'skills', href: '#skills', label: 'Skills' },
	{ id: 'projects', href: '#projects', label: 'Projects' },
	{ id: 'experience', href: '#experience', label: 'Experience' },
	{ id: 'contact', href: '#contact', label: 'Contact' },
];

export const HEADER_LOGO: Omit<LogoProps, 'className' | 'href'> = {
	src: '/assets/svg/breakerino-logo.svg',
	alt: 'Breakerino logo',
	width: 202,
	height: 32
};

// --------------------------------------------------------------------- 
// Social profiles
// --------------------------------------------------------------------- 
export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    id: 'github',
    username: 'breakerino',
  },
  {
    id: 'linkedin',
    username: 'breakerino',
  },
  {
    id: 'facebook',
    username: 'matus.breakerino.mendel',
  },
  {
    id: 'instagram',
    username: 'breakerino',
  },
  {
    id: 'spotify',
    username: 'i6xj4absm6rvpqwvgk8kibz7g',
  },
  {
    id: 'youtube',
    username: '@breakerinosk', // TODO: Change to @breakerino
  },
  {
    id: 'myanimelist',
    username: 'breakerino',
  },
];
