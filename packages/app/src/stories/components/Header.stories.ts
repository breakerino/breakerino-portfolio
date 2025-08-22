// --------------------------------------------------------------------- 
// Stories > Components > Header
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Header from '@/components/Header';
import { MenuItem } from '@/app/types';
import { LogoProps } from '@/components/Logo';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
// Data
// --------------------------------------------------------------------- 
const MENU_ITEMS: MenuItem[] = [
	{ id: 'about', href: '#', label: 'About me' },
	{ id: 'skills', href: '#', label: 'Skills' },
	{ id: 'projects', href: '#', label: 'Projects' },
	{ id: 'experience', href: '#', label: 'Experience' },
	{ id: 'contact', href: '#', label: 'Contact' },
];

const LOGO: Omit<LogoProps, 'className' | 'href'> = {
	src: '/assets/svg/breakerino-logo.svg',
	alt: 'Breakerino logo',
	width: 202,
	height: 32
};
// --------------------------------------------------------------------- 

const meta = {
	title: 'Breakerino/Components/Header',
	component: Header,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {

	}
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		logo: LOGO,
		menuItems: MENU_ITEMS
	},
};