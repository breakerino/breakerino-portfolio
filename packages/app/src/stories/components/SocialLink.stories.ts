// --------------------------------------------------------------------- 
// Stories > Components > SocialLink
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import SocialLink from '@/components/SocialLink';
// --------------------------------------------------------------------- 

const meta = {
	title: 'Breakerino/Components/SocialLink',
	component: SocialLink,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		variant: 'md',
		username: 'breakerino'
	},
	decorators: [ComponentDecorator],
} satisfies Meta<typeof SocialLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: 'github',
		username: 'breakerino'
	},
};

export const IconOnly: Story = {
	args: {
		showLabel: false,
		type: 'github',
		username: 'breakerino'
	},
};