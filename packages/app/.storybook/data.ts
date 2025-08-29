// --------------------------------------------------------------------- 
// Data
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { GeneralSettings, PersonalSettings, SiteSettings } from '@/app/types';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { HeaderProps } from '@/containers/Header';
import { ContentProps } from '@/containers/Content';
import { FooterProps } from '@/containers/Footer';
// --------------------------------------------------------------------- 

export const generalSettings: GeneralSettings = {
	year: new Date().getFullYear()
}

export const siteSettings: SiteSettings = {
	'meta': {
		'title': 'Breakerino - Full Stack Web Developer | Portfolio',
		'description': 'Matúš Mendel, also known as Breakerino, is a 24-year-old Full Stack Web Developer with 6 years of experience building clean, user-focused web applications using React, TypeScript, Node.js, PHP, Strapi, and WordPress.',
		'keywords': 'Matúš Mendel, Breakerino, Full Stack Developer, Web Developer Portfolio, Frontend Developer, Backend Developer, JavaScript, TypeScript, React, Next.js, Node.js, PHP, WordPress, Strapi, Tailwind CSS, Portfolio Website'
	}
}

export const personalSettings: PersonalSettings = {
	'age': 24,
	'yearsOfExperience': 6,
	'location': 'Nitrianske Pravno, Slovakia',
	'socials': [
		{
			'username': 'breakerino',
			'type': 'github'
		},
		{
			'username': 'breakerino',
			'type': 'linkedin'
		},
		{
			'username': 'matus.breakerino.mendel',
			'type': 'facebook'
		},
		{
			'username': 'breakerino',
			'type': 'instagram'
		},
		{
			'username': 'i6xj4absm6rvpqwvgk8kibz7g',
			'type': 'spotify'
		},
		{
			'username': '@breakerino',
			'type': 'youtube'
		},
		{
			'username': 'breakerino',
			'type': 'myanimelist'
		}
	]
}

export const headerData: HeaderProps['data'] = {
	'socials': [
		'github',
		'linkedin',
		'facebook',
		'instagram',
		'spotify',
		'youtube',
		'myanimelist'
	],
	'logo': {
		'name': 'breakerino-logo.svg',
		'alternativeText': 'Breakerino Logo',
		'width': 330,
		'height': 48,
		'url': '/uploads/breakerino_logo_6436c3e48f.svg'
	},
	'navigation': [
		{
			'label': 'About me',
			'slug': 'about-me'
		},
		{
			'label': 'Skills',
			'slug': 'skills'
		},
		{
			'label': 'Projects',
			'slug': 'projects'
		},
		{
			'label': 'Experience',
			'slug': 'experience'
		},
		{
			'label': 'Contact',
			'slug': 'contact'
		}
	]
}

export const contentData: ContentProps['data'] = [];

export const footerData: FooterProps['data'] = {
	'copyrightText': '© 2025 Breakerino. All rights reserved.',
	'text': 'Designed & Developed with 🩵 by **[Breakerino<span class=\'text-primary-400\'>.</span>](https://breakerino.me)**'
}

export const queries = [
	{ queryKey: ['settings', 'general'], data: generalSettings },
	{ queryKey: ['settings', 'site'], data: siteSettings },
	{ queryKey: ['settings', 'personal'], data: personalSettings },
	{ queryKey: ['sections', 'header'], data: headerData },
	{ queryKey: ['sections'], data: contentData },
	{ queryKey: ['sections', 'footer'], data: footerData }
];