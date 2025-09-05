// ---------------------------------------------------------------------
// Stories > Components > Sample component
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import ProjectItem from '@/components/ProjectItem';
// ---------------------------------------------------------------------

const meta = {
	title: 'Breakerino/Components/ProjectItem',
	component: ProjectItem,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		id: 1,
		name: 'Portfolio',
		description:
			'Modern, responsive personal portfolio designed in Figma and built with Next.js and Strapi. Featured custom components, smooth scroll animations, and a layout tailored to showcase skills and projects effectively.',
		finishDate: '2025-09-10',
		technologies: [
			{
				name: 'HTML',
				icon: 'html-logo',
				order: 0,
			},
			{
				name: 'CSS',
				icon: 'css-logo',
				order: 1,
			},
			{
				name: 'SASS',
				icon: 'sass-logo',
				order: 2,
			},
			{
				name: 'Tailwind CSS',
				icon: 'tailwind-css-logo',
				order: 3,
			},
			{
				name: 'React',
				icon: 'react-logo',
				order: 7,
			},
			{
				name: 'Storybook',
				icon: 'storybook-logo',
				order: 19,
			},
			{
				name: 'Next.js',
				icon: 'nextjs-logo',
				order: 8,
			},
			{
				name: 'Node.js',
				icon: 'nodejs-logo',
				order: 27,
			},
			{
				name: 'Strapi',
				icon: 'strapi-logo',
				order: 29,
			},
			{
				name: 'AWS',
				icon: 'aws-logo',
				order: 42,
			},
			{
				name: 'Docker',
				icon: 'docker-logo',
				order: 46,
			},
		],
		video: {
			video: null,
			thumbnail: {
				name: 'breakerino-portfolio-thumbnail.png',
				alternativeText: null,
				width: 768,
				height: 450,
				url: '/uploads/breakerino_portfolio_thumbnail_c5894767a6.png',
			},
		},
		links: [
			{
				text: 'Live demo',
				url: 'https://breakerino.me',
				icon: 'link',
			},
			{
				text: 'GitHub',
				url: 'https://github.com/Breakerino/portfolio',
				icon: 'github',
			},
			{
				text: 'Figma',
				url: 'https://www.figma.com/design/XRHlNdPccvgB58JKbFvhFv/Breakerino.me-%7C-Portfolio-%7C-Design?node-id=0-1&t=e5UmAN1X2BbmEhUU-1',
				icon: 'figma-logo',
			},
		],
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
