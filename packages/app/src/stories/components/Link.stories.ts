// --------------------------------------------------------------------- 
// Stories > Components > Social link
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Link from '@/components/Link';
// --------------------------------------------------------------------- 

const meta = {
	title: 'Breakerino/Components/Link',
	component: Link,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		size: 'md',
		icon: 'github',
		text: 'GitHub',
		url: 'https://github.com/Breakerino'
	},
	decorators: [ComponentDecorator],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const IconOnly: Story = {
	args: { 
		showLabel: false
	},
};