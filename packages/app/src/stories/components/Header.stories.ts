// --------------------------------------------------------------------- 
// Stories > Components > Header
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PageDecorator from '@/storybook/decorators/page';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Header from '@/containers/Header';
import { headerData } from '@/storybook/data';
// --------------------------------------------------------------------- 

const meta = {
	title: 'Breakerino/Components/Header',
	component: Header,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		data: headerData
	},
	decorators: [PageDecorator],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};