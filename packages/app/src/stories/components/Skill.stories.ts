// ---------------------------------------------------------------------
// Stories > Components > Skill
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import Skill from '@/components/Skill';
// ---------------------------------------------------------------------

const meta = {
	title: 'Breakerino/Components/Skill',
	component: Skill,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		icon: 'html-logo',
		name: 'HTML',
	},
	decorators: [ComponentDecorator],
} satisfies Meta<typeof Skill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const RoundedLarge: Story = {
	args: {
		variant: 'rounded',
		size: 'large'
	},
};
