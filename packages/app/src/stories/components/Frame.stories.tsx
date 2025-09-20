// --------------------------------------------------------------------- 
// Stories > Components > Frame
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Frame from '@/components/Frame';
import Video from '@/components/Video';
import { getStaticAssetURL } from '@/app/functions';
import { contentData } from '@/storybook/data';
import { Media } from '@/app/types';
// --------------------------------------------------------------------- 

const reel = contentData.at(1)?.data?.reels?.at(0) as Media;

const meta = {
	title: 'Breakerino/Components/Frame',
	component: Frame,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		children: (
			<Video
				width={`${reel?.thumbnail.width ?? 0}px`}
				height={`${reel?.thumbnail.height ?? 0}px`}
				className="bg-secondary-950"
				autoPlay
				loop
				muted
				playsInline
				poster={reel?.thumbnail}
				sources={reel?.video?.url
					? [{ src: getStaticAssetURL(reel?.video.url), type: 'video/mp4' }]
					: []
				}
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