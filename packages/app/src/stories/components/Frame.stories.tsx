// --------------------------------------------------------------------- 
// Stories > Components > Frame
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
import Image from 'next/image';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Frame from '@/components/Frame';
// --------------------------------------------------------------------- 

const meta = {
	title: 'Breakerino/Components/Frame',
	component: Frame,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		children: (
			<Image
				src="/assets/img/ig-reel-preview.png"
				width={485}
				height={840}
				alt="Image"
			/>
		)
	},
	decorators: [ComponentDecorator]
} satisfies Meta<typeof Frame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};