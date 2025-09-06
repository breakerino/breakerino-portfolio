// --------------------------------------------------------------------- 
// Stories > Components > Work experience item
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentDecorator from '@/storybook/decorators/component';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import WorkExperienceItem from '@/components/WorkExperienceItem';
// --------------------------------------------------------------------- 

const meta = {
	title: 'Breakerino/Components/WorkExperienceItem',
	component: WorkExperienceItem,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		'id': 1,
		'companyName': 'Ametica',
		'companySiteURL': 'https://ametica.sk',
		'location': 'Prievidza, Slovakia',
		'startDate': '2019-07-14',
		'endDate': '2025-05-31',
		'employmentType': 'Freelance',
		'description': 'Worked on diverse projects including major **e-commerce** sites (eTabletka, Parfen, Relleciga, RoyalPets, Topski), **web apps** (PLUS eRecept, Varíme spolu, Grow-Up 360), and **presentation sites** (Aldea Experience, Unipas). Developed custom WordPress & WooCommerce plugins, themes, and features using **PHP**, **TypeScript**, **React**, **SASS**, and **REST APIs**. Boosted performance **by 250%** with the Wooptima Plugin Optimizer and doubled **CLS scores** via a custom Wooptima SSR solution. Served as **DevOps engineer**, building a **GitLab CI/CD pipeline** for fast, stable automated deployments.\n\n**Key project:** Wooptima — a WordPress plugin suite with a custom core, React-based megamenu, minicart, and product area components plus DX tools like Assets Manager and Bricks Sync.',
		'position': 'Full Stack Web Developer',
		'companyLogo': {
			'id': 12,
			'name': 'ametica-logo.svg',
			'alternativeText': 'AMETICA Logo',
			'width': 81,
			'height': 48,
			'url': '/uploads/ametica_logo_b13d48f0d2.svg'
		},
		'skills': [
			{
				'id': 1,
				'name': 'HTML',
				'icon': 'html-logo',
				'order': 0
			},
			{
				'id': 2,
				'name': 'CSS',
				'icon': 'css-logo',
				'order': 1
			},
			{
				'id': 3,
				'name': 'SASS',
				'icon': 'sass-logo',
				'order': 2
			},
			{
				'id': 4,
				'name': 'Tailwind CSS',
				'icon': 'tailwind-css-logo',
				'order': 3
			},
			{
				'id': 5,
				'name': 'JavaScript',
				'icon': 'javascript-logo',
				'order': 4
			},
			{
				'id': 6,
				'name': 'TypeScript',
				'icon': 'typescript-logo',
				'order': 5
			},
			{
				'id': 7,
				'name': 'jQuery',
				'icon': 'jquery-logo',
				'order': 6
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
				'id': 13,
				'name': 'Styled Components',
				'icon': 'styled-components-logo',
				'order': 12
			},
			{
				'id': 14,
				'name': 'Shadcn',
				'icon': 'shadcn-logo',
				'order': 13
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
				'id': 20,
				'name': 'Storybook',
				'icon': 'storybook-logo',
				'order': 19
			},
			{
				'id': 15,
				'name': 'Formik',
				'icon': 'formik-logo',
				'order': 14
			},
			{
				'id': 9,
				'name': 'Next.js',
				'icon': 'nextjs-logo',
				'order': 8
			},
			{
				'id': 26,
				'name': 'PHP',
				'icon': 'php-logo',
				'order': 25
			},
			{
				'id': 32,
				'name': 'WooCommerce',
				'icon': 'woocommerce-logo',
				'order': 31
			},
			{
				'id': 31,
				'name': 'WordPress',
				'icon': 'wordpress-logo',
				'order': 30
			},
			{
				'id': 21,
				'name': 'Bricks Builder',
				'icon': 'bricks-builder-logo',
				'order': 20
			},
			{
				'id': 28,
				'name': 'Node.js',
				'icon': 'nodejs-logo',
				'order': 27
			},
			{
				'id': 29,
				'name': 'Express.js',
				'icon': 'expressjs-logo',
				'order': 28
			},
			{
				'id': 30,
				'name': 'Strapi',
				'icon': 'strapi-logo',
				'order': 29
			},
			{
				'id': 34,
				'name': 'GraphQL',
				'icon': 'graphql-logo',
				'order': 33
			},
			{
				'id': 35,
				'name': 'MySQL',
				'icon': 'mysql-logo',
				'order': 34
			},
			{
				'id': 36,
				'name': 'MariaDB',
				'icon': 'mariadb-logo',
				'order': 35
			},
			{
				'id': 37,
				'name': 'Redis',
				'icon': 'redis-logo',
				'order': 36
			},
			{
				'id': 41,
				'name': 'RunCloud',
				'icon': 'runcloud-logo',
				'order': 40
			},
			{
				'id': 42,
				'name': 'DigitalOcean',
				'icon': 'digitalocean-logo',
				'order': 41
			},
			{
				'id': 47,
				'name': 'Docker',
				'icon': 'docker-logo',
				'order': 46
			},
			{
				'id': 68,
				'name': 'Figma',
				'icon': 'figma-logo',
				'order': 67
			},
			{
				'id': 69,
				'name': 'Adobe Photoshop',
				'icon': 'adobe-photoshop-logo',
				'order': 68
			},
			{
				'id': 70,
				'name': 'Adobe Illustrator',
				'icon': 'adobe-illustrator-logo',
				'order': 69
			},
			{
				'id': 72,
				'name': 'Adobe Premiere Pro',
				'icon': 'adobe-premiere-logo',
				'order': 71
			}
		]
	},
	decorators: [ComponentDecorator]
} satisfies Meta<typeof WorkExperienceItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};