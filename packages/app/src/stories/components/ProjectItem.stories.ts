// ---------------------------------------------------------------------
// Stories > Components > Project item
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
		'id': 6,
		'name': 'Tuturium',
		'description': 'All-in-one expense tracker with bank sync, eKasa receipt scanning, and AI-powered categorization. Designed in Figma and developed with React, Strapi, Chakra UI, and GPT-4o-mini, featuring zero-knowledge encryption for privacy.',
		'finishDate': '2024-12-12',
		'technologies': [
			{
				'id': 6,
				'name': 'TypeScript',
				'icon': 'typescript-logo',
				'order': 5
			},
			{
				'id': 8,
				'name': 'React',
				'icon': 'react-logo',
				'order': 7
			},
			{
				'id': 12,
				'name': 'Chakra UI',
				'icon': 'chakra-ui-logo',
				'order': 11
			},
			{
				'id': 17,
				'name': 'Axios',
				'icon': 'axios-logo',
				'order': 16
			},
			{
				'id': 18,
				'name': 'React Query',
				'icon': 'react-query-logo',
				'order': 17
			},
			{
				'id': 11,
				'name': 'React Router',
				'icon': 'react-router-logo',
				'order': 10
			},
			{
				'id': 16,
				'name': 'React Hook Form',
				'icon': 'react-hook-form-logo',
				'order': 15
			},
			{
				'id': 28,
				'name': 'Node.js',
				'icon': 'nodejs-logo',
				'order': 27
			},
			{
				'id': 30,
				'name': 'Strapi',
				'icon': 'strapi-logo',
				'order': 29
			},
			{
				'id': 36,
				'name': 'MariaDB',
				'icon': 'mariadb-logo',
				'order': 35
			},
			{
				'id': 43,
				'name': 'AWS',
				'icon': 'aws-logo',
				'order': 42
			},
			{
				'id': 47,
				'name': 'Docker',
				'icon': 'docker-logo',
				'order': 46
			}
		],
		'media': {
			'video': {
				'id': 26,
				'name': 'tuturium-video.mp4',
				'alternativeText': 'Tuturium - Project Video',
				'width': null,
				'height': null,
				'url': '/uploads/tuturium_video_49ebca71a5.mp4'
			},
			'thumbnail': {
				'id': 33,
				'name': 'tuturium-thumbnail.png',
				'alternativeText': 'Tuturium - Project Video Thumbnail',
				'width': 960,
				'height': 540,
				'url': '/uploads/tuturium_thumbnail_d262bd558f.png'
			}
		},
		'links': [
			{
				'text': 'Live demo',
				'url': 'https://tuturium.breakerino.me',
				'icon': 'link'
			},
			{
				'text': 'GitHub',
				'url': 'https://github.com/Breakerino/tuturium',
				'icon': 'github'
			},
			{
				'text': 'Figma',
				'url': 'https://www.figma.com/design/1aiRa47i2kMsiJAeck2Yxt/Tuturium?node-id=0-1&t=ySz4QdFtagVnnn6j-1',
				'icon': 'figma-logo'
			}
		]
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
