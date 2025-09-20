// ---------------------------------------------------------------------
// Stories > Components > Project item
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import ProjectItem from '@/components/ProjectItem';
import { contentData } from '@/storybook/data';
import { Project } from '@/app/types';
// ---------------------------------------------------------------------

const projects = contentData.at(3)?.data?.projects;
const project = projects?.at(Math.floor(Math.random() * projects.length)) as Project;

const meta = {
	title: 'Breakerino/Components/ProjectItem',
	component: ProjectItem,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		...project
	},
	decorators: [ComponentDecorator],
} satisfies Meta<typeof ProjectItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageLeft: Story = {
	args: {
		alignment: 'left',
	},
};

export const ImageRight: Story = {
	args: {
		alignment: 'right',
	},
};
