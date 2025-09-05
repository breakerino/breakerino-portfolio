// --------------------------------------------------------------------- 
// Stories > Components > Photo frame
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import PhotoFrame from '@/components/PhotoFrame';
// --------------------------------------------------------------------- 

const meta = {
	title: 'Breakerino/Components/PhotoFrame',
	component: PhotoFrame,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		image: {
			url: '/assets/img/breakerino-photo.png',
			width: 485,
			height: 840,
			alternativeText: 'Photo'
		}
	},
	decorators: [ComponentDecorator]
} satisfies Meta<typeof PhotoFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};