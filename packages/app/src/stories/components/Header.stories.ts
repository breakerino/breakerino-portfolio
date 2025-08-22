// --------------------------------------------------------------------- 
// Stories > Components > Header
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PageDecorator from '@/storybook/decorators/page';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Header from '@/components/Header';
import { HEADER_LOGO, HEADER_MENU_ITEMS, SOCIAL_PROFILES } from '@/app/data';
// --------------------------------------------------------------------- 


const meta = {
	title: 'Breakerino/Components/Header',
	component: Header,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		logo: HEADER_LOGO,
		menuItems: HEADER_MENU_ITEMS,
		socialItems: SOCIAL_PROFILES
	},
	decorators: [PageDecorator],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};