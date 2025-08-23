// --------------------------------------------------------------------- 
// Stories > Components > Heading
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Heading from '@/components/Heading';
// --------------------------------------------------------------------- 

const meta = {
	title: 'Breakerino/Components/Heading',
	component: Heading,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		subtitle: 'A little',
		title: 'About me'
	},
	decorators: [ComponentDecorator]
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};