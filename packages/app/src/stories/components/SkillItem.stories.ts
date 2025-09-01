// ---------------------------------------------------------------------
// Stories > Components > Skill item
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import SkillItem from '@/components/SkillItem';
// ---------------------------------------------------------------------

const meta = {
	title: 'Breakerino/Components/SkillItem',
	component: SkillItem,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		icon: 'html-logo',
		name: 'HTML',
	},
	decorators: [ComponentDecorator],
} satisfies Meta<typeof SkillItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const RoundedMedium: Story = {
	args: {
		variant: 'rounded',
		size: 'medium'
	},
};
export const ChipMedium: Story = {
	args: {
		variant: 'chip',
		size: 'medium'
	},
};
