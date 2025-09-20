// --------------------------------------------------------------------- 
// Stories > Components > Photo frame
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import PhotoFrame from '@/components/PhotoFrame';
import { contentData } from '@/storybook/data';
import { MediaFile } from '@/app/types';
import { getStaticAssetURL } from '@/app/functions';
// --------------------------------------------------------------------- 

const photo = contentData.at(0)?.data?.image as MediaFile;

const meta = {
	title: 'Breakerino/Components/PhotoFrame',
	component: PhotoFrame,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		image: {
			...photo,
			url: getStaticAssetURL(photo.url)
		}
	},
	decorators: [ComponentDecorator]
} satisfies Meta<typeof PhotoFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};