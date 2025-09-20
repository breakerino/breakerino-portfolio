// --------------------------------------------------------------------- 
// Stories > Components > Work experience item
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import WorkExperienceItem from '@/components/WorkExperienceItem';
import { contentData } from '@/storybook/data';
import { WorkExperience } from '@/app/types';
// --------------------------------------------------------------------- 

const workExperiences = contentData.at(4)?.data?.workExperiences;
const workExperience = workExperiences?.at(Math.floor(Math.random() * workExperiences.length)) as WorkExperience;

const meta = {
	title: 'Breakerino/Components/WorkExperienceItem',
	component: WorkExperienceItem,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		...workExperience
	},
	decorators: [ComponentDecorator]
} satisfies Meta<typeof WorkExperienceItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};