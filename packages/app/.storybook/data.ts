// --------------------------------------------------------------------- 
// Storybook > Data
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { GeneralSettings, PersonalSettings, SiteSettings } from '@/app/types';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { HeaderProps } from '@/containers/Header';
import { FooterProps } from '@/containers/Footer';
// --------------------------------------------------------------------- 

export const generalSettings: GeneralSettings = {
	year: new Date().getFullYear()
}

export const siteSettings: SiteSettings = {
	'meta': {
		'title': 'Breakerino - Full Stack Web Developer | Portfolio',
		'description': 'Matúš Mendel, also known as Breakerino, is a 24-year-old full stack web developer with 6 years of experience and a passion for building modern, efficient, and user-friendly web applications using React, Next.js, Node.js, PHP & WordPress.',
		'keywords': 'Matúš Mendel, Breakerino, Full Stack Developer, Web Developer Portfolio, Frontend Developer, Backend Developer, JavaScript, TypeScript, React, Next.js, Node.js, PHP, WordPress, Strapi, Tailwind CSS, Portfolio Website',
		'image': {
			'name': 'breakerino-og-image.png',
			'alternativeText': null,
			'width': 1200,
			'height': 630,
			'url': '/uploads/breakerino_og_image_5475b71d48.png'
		}
	}
}

export const personalSettings: PersonalSettings = {
	'age': 24,
	'yearsOfExperience': 6,
	'location': 'Nitrianske Pravno, Slovakia',
	'socials': [
		{
			'username': 'breakerino',
			'type': 'github'
		},
		{
			'username': 'breakerino',
			'type': 'linkedin'
		},
		{
			'username': 'matus.breakerino.mendel',
			'type': 'facebook'
		},
		{
			'username': 'breakerino',
			'type': 'instagram'
		},
		{
			'username': 'i6xj4absm6rvpqwvgk8kibz7g',
			'type': 'spotify'
		},
		{
			'username': '@breakerino',
			'type': 'youtube'
		},
		{
			'username': 'breakerino',
			'type': 'myanimelist'
		}
	]
}

export const headerData: HeaderProps['data'] = {
	'socials': [
		'github',
		'linkedin',
		'facebook',
		'instagram',
		'spotify',
		'youtube',
		'myanimelist'
	],
	'logo': {
		'name': 'breakerino-logo.svg',
		'alternativeText': 'Breakerino Logo',
		'width': 330,
		'height': 48,
		'url': '/uploads/breakerino_logo_6436c3e48f.svg'
	},
	'navigation': [
		{
			'label': 'About me',
			'slug': 'about-me'
		},
		{
			'label': 'Skills',
			'slug': 'skills'
		},
		{
			'label': 'Projects',
			'slug': 'projects'
		},
		{
			'label': 'Experience',
			'slug': 'experience'
		},
		{
			'label': 'Contact',
			'slug': 'contact'
		}
	]
}

export const contentData = [
	{
		'id': 'hero',
		'data': {
			'id': 42,
			'heading': {
				'id': 80,
				'subtitle': 'Hi, I\'m',
				'title': 'Breakerino'
			},
			'subheading': 'Full Stack Web Developer',
			'socials': [
				'github',
				'linkedin'
			],
			'text': 'I’m **Matúš Mendel**, a **24-year-old full stack web developer** based in **Nitrianske Pravno, Slovakia**, with **6 years of professional experience** creating clean, scalable, and functional web applications. From **TypeScript**, **React**, and **Next.js** on the **frontend** to **PHP**, **WordPress**, **Node.js**, and **Strapi** on the **backend**, I’ve built solutions that power websites used by thousands of people — with my code running **every second**.',
			'image': {
				'id': 3,
				'name': 'breakerino-photo.png',
				'alternativeText': 'Breakerino Photo',
				'width': 485,
				'height': 591,
				'url': '/uploads/breakerino_photo_8e1d79b875.png'
			}
		}
	},
	{
		'id': 'about-me',
		'data': {
			'id': 17,
			'heading': {
				'id': 81,
				'subtitle': 'A little',
				'title': 'About me'
			},
			'text': 'I’ve always been drawn to **creating and building things** — whether in design, code, or everyday life. For me, the process is just as rewarding as the final result. **Coding especially gives me that unique “flow state”** where time disappears and problems transform into elegant solutions. I enjoy finding **innovative and creative approaches**, and I’m happiest when my code is not only **beautiful and well-structured**, but also **functional, performant, and reliable**.  \n\nMy journey started with a passion for **design**, which I studied at **SOŠ Handlová (2017–2021)**. From **graphic design** I moved into **frontend development**, and eventually into **backend work**, where I found myself becoming a **full stack developer**. Today, I enjoy building **entire applications — from interfaces to APIs —** and there’s a unique satisfaction in seeing **both sides come together seamlessly**. I tend to work best independently, but I also value **collaboration and problem-solving** with others. Whenever I hit a wall, I know that with enough **focus, time, and music** to guide me into the right flow, I’ll always find a way forward.  \n\nWhat sets me apart is my **perfectionism**. I care deeply about every detail — both as a **pixel-perfectionist when designing** and as a developer when **crafting code**. For me, **layouts must be organized, aligned, and visually flawless**, and **code must follow principles I’ve refined over the years**. This mindset sometimes leads me to **over-engineer**, but it also pushes me to deliver work I’m truly proud of. Outside of work, I recharge through **hobbies that balance out the intensity of coding** — watching anime, K-dramas, and movies, playing piano, gaming, or spending time with family and friends over casual activities like darts, billiards, or bowling. These moments **clear my head and let me return to coding with fresh energy**.  ',
			'reels': [
				{
					'id': 41,
					'video': {
						'id': 57,
						'name': 'reel-portfolio-part-01-video.mp4',
						'alternativeText': null,
						'width': null,
						'height': null,
						'url': '/uploads/reel_portfolio_part_01_video_0d18acbf2d.mp4'
					},
					'thumbnail': {
						'id': 69,
						'name': 'reel-portfolio-part-01-thumbnail.jpg',
						'alternativeText': null,
						'width': 540,
						'height': 960,
						'url': '/uploads/reel_portfolio_part_01_thumbnail_5456ee25ec.jpg'
					}
				},
				{
					'id': 42,
					'video': {
						'id': 58,
						'name': 'reel-timespentonanime-part-01-video.mp4',
						'alternativeText': null,
						'width': null,
						'height': null,
						'url': '/uploads/reel_timespentonanime_part_01_video_ab49892c20.mp4'
					},
					'thumbnail': {
						'id': 70,
						'name': 'reel-timespentonanime-part-01-thumbnail.jpg',
						'alternativeText': null,
						'width': 540,
						'height': 960,
						'url': '/uploads/reel_timespentonanime_part_01_thumbnail_34d62ee001.jpg'
					}
				},
				{
					'id': 43,
					'video': {
						'id': 59,
						'name': 'reel-timespentonanime-part-02-video.mp4',
						'alternativeText': null,
						'width': null,
						'height': null,
						'url': '/uploads/reel_timespentonanime_part_02_video_c8f6c9f9b0.mp4'
					},
					'thumbnail': {
						'id': 68,
						'name': 'reel-timespentonanime-part-02-thumbnail.jpg',
						'alternativeText': null,
						'width': 540,
						'height': 960,
						'url': '/uploads/reel_timespentonanime_part_02_thumbnail_761935dbbd.jpg'
					}
				}
			]
		}
	},
	{
		'id': 'skills',
		'data': {
			'id': 11,
			'heading': {
				'id': 82,
				'subtitle': 'Showcase of my',
				'title': 'Skills'
			},
			'skills': [
				{
					'id': 69,
					'title': 'Frontend Development',
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
							'id': 9,
							'name': 'Next.js',
							'icon': 'nextjs-logo',
							'order': 8
						},
						{
							'id': 10,
							'name': 'Astro',
							'icon': 'astro-logo',
							'order': 9
						},
						{
							'id': 11,
							'name': 'React Router',
							'icon': 'react-router-logo',
							'order': 11
						},
						{
							'id': 12,
							'name': 'Chakra UI',
							'icon': 'chakra-ui-logo',
							'order': 12
						},
						{
							'id': 13,
							'name': 'Styled Components',
							'icon': 'styled-components-logo',
							'order': 13
						},
						{
							'id': 14,
							'name': 'Shadcn',
							'icon': 'shadcn-logo',
							'order': 14
						},
						{
							'id': 15,
							'name': 'Formik',
							'icon': 'formik-logo',
							'order': 16
						},
						{
							'id': 16,
							'name': 'React Hook Form',
							'icon': 'react-hook-form-logo',
							'order': 17
						},
						{
							'id': 18,
							'name': 'React Query',
							'icon': 'react-query-logo',
							'order': 18
						},
						{
							'id': 20,
							'name': 'Storybook',
							'icon': 'storybook-logo',
							'order': 19
						},
						{
							'id': 21,
							'name': 'Bricks Builder',
							'icon': 'bricks-builder-logo',
							'order': 20
						},
						{
							'id': 22,
							'name': 'Vite',
							'icon': 'vite-logo',
							'order': 21
						},
						{
							'id': 23,
							'name': 'Webpack',
							'icon': 'webpack-logo',
							'order': 22
						},
						{
							'id': 81,
							'name': 'Electron',
							'icon': 'electron-logo',
							'order': 10
						},
						{
							'id': 80,
							'name': 'Motion',
							'icon': 'framer-motion-logo',
							'order': 15
						}
					]
				},
				{
					'id': 70,
					'title': 'Backend Development',
					'skills': [
						{
							'id': 26,
							'name': 'PHP',
							'icon': 'php-logo',
							'order': 23
						},
						{
							'id': 27,
							'name': 'Laravel',
							'icon': 'laravel-logo',
							'order': 24
						},
						{
							'id': 28,
							'name': 'Node.js',
							'icon': 'nodejs-logo',
							'order': 25
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
							'id': 31,
							'name': 'WordPress',
							'icon': 'wordpress-logo',
							'order': 30
						},
						{
							'id': 32,
							'name': 'WooCommerce',
							'icon': 'woocommerce-logo',
							'order': 31
						},
						{
							'id': 35,
							'name': 'MySQL',
							'icon': 'mysql-logo',
							'order': 32
						},
						{
							'id': 36,
							'name': 'MariaDB',
							'icon': 'mariadb-logo',
							'order': 33
						},
						{
							'id': 37,
							'name': 'Redis',
							'icon': 'redis-logo',
							'order': 34
						}
					]
				},
				{
					'id': 71,
					'title': 'DevOps',
					'skills': [
						{
							'id': 38,
							'name': 'Git',
							'icon': 'git-logo',
							'order': 35
						},
						{
							'id': 39,
							'name': 'GitHub',
							'icon': 'github-logo',
							'order': 36
						},
						{
							'id': 40,
							'name': 'GitLab',
							'icon': 'gitlab-logo',
							'order': 37
						},
						{
							'id': 41,
							'name': 'RunCloud',
							'icon': 'runcloud-logo',
							'order': 38
						},
						{
							'id': 42,
							'name': 'DigitalOcean',
							'icon': 'digitalocean-logo',
							'order': 39
						},
						{
							'id': 43,
							'name': 'AWS',
							'icon': 'aws-logo',
							'order': 40
						},
						{
							'id': 44,
							'name': 'Linux',
							'icon': 'linux-logo',
							'order': 41
						},
						{
							'id': 45,
							'name': 'Ubuntu',
							'icon': 'ubuntu-logo',
							'order': 42
						},
						{
							'id': 46,
							'name': 'Bash',
							'icon': 'bash-logo',
							'order': 43
						},
						{
							'id': 47,
							'name': 'Docker',
							'icon': 'docker-logo',
							'order': 44
						},
						{
							'id': 48,
							'name': 'Nginx',
							'icon': 'nginx-logo',
							'order': 45
						},
						{
							'id': 24,
							'name': 'NPM',
							'icon': 'npm-logo',
							'order': 26
						},
						{
							'id': 25,
							'name': 'Yarn',
							'icon': 'yarn-logo',
							'order': 27
						}
					]
				},
				{
					'id': 72,
					'title': 'Apps & Tools',
					'skills': [
						{
							'id': 50,
							'name': 'Visual Studio Code',
							'icon': 'visual-studio-code-logo',
							'order': 47
						},
						{
							'id': 51,
							'name': 'Cursor',
							'icon': 'cursor-logo',
							'order': 48
						},
						{
							'id': 52,
							'name': 'Inkdrop',
							'icon': 'inkdrop-logo',
							'order': 49
						},
						{
							'id': 53,
							'name': 'Arc',
							'icon': 'arc-logo',
							'order': 50
						},
						{
							'id': 54,
							'name': 'Termius',
							'icon': 'termius-logo',
							'order': 51
						},
						{
							'id': 55,
							'name': 'TablePlus',
							'icon': 'tableplus-logo',
							'order': 52
						},
						{
							'id': 56,
							'name': 'Docker Desktop',
							'icon': 'docker-desktop-logo',
							'order': 53
						},
						{
							'id': 57,
							'name': 'Postman',
							'icon': 'postman-logo',
							'order': 54
						},
						{
							'id': 58,
							'name': 'Toggl Track',
							'icon': 'toggl-track-logo',
							'order': 55
						},
						{
							'id': 59,
							'name': 'ScreenFlow',
							'icon': 'screenflow-logo',
							'order': 56
						},
						{
							'id': 60,
							'name': 'Slack',
							'icon': 'slack-logo',
							'order': 57
						},
						{
							'id': 61,
							'name': 'Discord',
							'icon': 'discord-logo',
							'order': 58
						},
						{
							'id': 62,
							'name': 'Asana',
							'icon': 'asana-logo',
							'order': 59
						},
						{
							'id': 63,
							'name': 'Spark',
							'icon': 'spark-logo',
							'order': 60
						},
						{
							'id': 64,
							'name': 'NordPass',
							'icon': 'nordpass-logo',
							'order': 61
						},
						{
							'id': 65,
							'name': 'WhatPulse',
							'icon': 'whatpulse-logo',
							'order': 62
						},
						{
							'id': 66,
							'name': 'ChatGPT',
							'icon': 'chat-gpt-logo',
							'order': 63
						},
						{
							'id': 67,
							'name': 'Spotify',
							'icon': 'spotify-logo',
							'order': 64
						},
						{
							'id': 68,
							'name': 'Figma',
							'icon': 'figma-logo',
							'order': 65
						},
						{
							'id': 69,
							'name': 'Adobe Photoshop',
							'icon': 'adobe-photoshop-logo',
							'order': 66
						},
						{
							'id': 70,
							'name': 'Adobe Illustrator',
							'icon': 'adobe-illustrator-logo',
							'order': 67
						},
						{
							'id': 71,
							'name': 'Adobe Lightroom',
							'icon': 'adobe-lightroom-logo',
							'order': 68
						},
						{
							'id': 72,
							'name': 'Adobe Premiere Pro',
							'icon': 'adobe-premiere-logo',
							'order': 69
						},
						{
							'id': 73,
							'name': 'Adobe After Effects',
							'icon': 'adobe-after-effects-logo',
							'order': 70
						},
						{
							'id': 79,
							'name': 'MacOS',
							'icon': 'macos-logo',
							'order': 46
						}
					]
				},
				{
					'id': 73,
					'title': 'Creative Skills',
					'skills': [
						{
							'id': 74,
							'name': 'Programming',
							'icon': 'programming',
							'order': 71
						},
						{
							'id': 75,
							'name': 'Graphic design',
							'icon': 'graphic-design',
							'order': 72
						},
						{
							'id': 76,
							'name': 'Photography',
							'icon': 'photography',
							'order': 73
						},
						{
							'id': 77,
							'name': 'Filming',
							'icon': 'filming',
							'order': 74
						},
						{
							'id': 78,
							'name': 'Video editing',
							'icon': 'video-editing',
							'order': 75
						}
					]
				}
			]
		}
	},
	{
		'id': 'projects',
		'data': {
			'id': 5,
			'heading': {
				'id': 83,
				'subtitle': 'Some of my',
				'title': 'Projects'
			},
			'projects': [
				{
					'id': 4,
					'name': 'Bulk Image Downloader',
					'description': 'Browser-based tool to preview, rename, and download multiple images from list of URLs, individually or as a ZIP, supporting various formats. Built with React & Chakra UI.',
					'finishDate': '2022-07-10',
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
							'order': 12
						},
						{
							'id': 16,
							'name': 'React Hook Form',
							'icon': 'react-hook-form-logo',
							'order': 17
						},
						{
							'id': 43,
							'name': 'AWS',
							'icon': 'aws-logo',
							'order': 40
						},
						{
							'id': 47,
							'name': 'Docker',
							'icon': 'docker-logo',
							'order': 44
						}
					],
					'media': {
						'id': 25,
						'video': {
							'id': 62,
							'name': 'project-bulk-image-downloader-video.mp4',
							'alternativeText': null,
							'width': null,
							'height': null,
							'url': '/uploads/project_bulk_image_downloader_video_fbcf638eef.mp4'
						},
						'thumbnail': {
							'id': 75,
							'name': 'project-bulk-image-downloader-thumbnail.jpg',
							'alternativeText': null,
							'width': 960,
							'height': 540,
							'url': '/uploads/project_bulk_image_downloader_thumbnail_f84b801f6b.jpg'
						}
					},
					'links': [
						{
							'id': 10,
							'text': 'Live demo',
							'url': 'https://bulk-image-downloader.breakerino.me',
							'icon': 'link'
						},
						{
							'id': 11,
							'text': 'GitHub',
							'url': 'https://github.com/breakerino/breakerino-bulk-image-downloader',
							'icon': 'github'
						}
					]
				},
				{
					'id': 5,
					'name': 'CustomAir',
					'description': 'Responsive website for an HVAC services company, showcasing services in a clean, client-focused layout to attract potential customers. Designed in Figma and developed with WordPress, Bricks Builder, and SASS.',
					'finishDate': '2023-05-14',
					'technologies': [
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
							'id': 26,
							'name': 'PHP',
							'icon': 'php-logo',
							'order': 23
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
							'id': 36,
							'name': 'MariaDB',
							'icon': 'mariadb-logo',
							'order': 33
						},
						{
							'id': 43,
							'name': 'AWS',
							'icon': 'aws-logo',
							'order': 40
						},
						{
							'id': 47,
							'name': 'Docker',
							'icon': 'docker-logo',
							'order': 44
						}
					],
					'media': {
						'id': 26,
						'video': {
							'id': 63,
							'name': 'project-customair-video.mp4',
							'alternativeText': null,
							'width': null,
							'height': null,
							'url': '/uploads/project_customair_video_080ca443ce.mp4'
						},
						'thumbnail': {
							'id': 72,
							'name': 'project-customair-thumbnail.jpg',
							'alternativeText': null,
							'width': 960,
							'height': 540,
							'url': '/uploads/project_customair_thumbnail_8d63de4c06.jpg'
						}
					},
					'links': [
						{
							'id': 12,
							'text': 'Live demo',
							'url': 'https://customair.breakerino.me',
							'icon': 'link'
						},
						{
							'id': 13,
							'text': 'GitHub',
							'url': 'https://github.com/breakerino/customair',
							'icon': 'github'
						},
						{
							'id': 14,
							'text': 'Figma',
							'url': 'https://www.figma.com/design/YIvNJCAFL4OWZdTha1msGz/CustomAir?node-id=2-6&t=3UEch5fg2QpQCZR6-1',
							'icon': 'figma-logo'
						}
					]
				},
				{
					'id': 2,
					'name': 'Erasmus Interactive Dictionary',
					'description': 'Multilingual interactive dictionary for an Erasmus+ KA2 project with categorized vocabulary, images, and descriptions. Included custom modals and galleries, designed in Figma and built with React, Strapi, and SASS.',
					'finishDate': '2022-02-02',
					'technologies': [
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
							'id': 18,
							'name': 'React Query',
							'icon': 'react-query-logo',
							'order': 18
						},
						{
							'id': 11,
							'name': 'React Router',
							'icon': 'react-router-logo',
							'order': 11
						},
						{
							'id': 28,
							'name': 'Node.js',
							'icon': 'nodejs-logo',
							'order': 25
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
							'order': 33
						},
						{
							'id': 43,
							'name': 'AWS',
							'icon': 'aws-logo',
							'order': 40
						},
						{
							'id': 47,
							'name': 'Docker',
							'icon': 'docker-logo',
							'order': 44
						}
					],
					'media': {
						'id': 24,
						'video': {
							'id': 64,
							'name': 'project-erasmus-interactive-dictionary-video.mp4',
							'alternativeText': null,
							'width': null,
							'height': null,
							'url': '/uploads/project_erasmus_interactive_dictionary_video_ec0c310a12.mp4'
						},
						'thumbnail': {
							'id': 71,
							'name': 'project-erasmus-interactive-dictionary-thumbnail.jpg',
							'alternativeText': null,
							'width': 960,
							'height': 540,
							'url': '/uploads/project_erasmus_interactive_dictionary_thumbnail_4406f4a3ce.jpg'
						}
					},
					'links': [
						{
							'id': 4,
							'text': 'Live demo',
							'url': 'https://erasmus-interactive-dictionary.breakerino.me',
							'icon': 'link'
						},
						{
							'id': 5,
							'text': 'GitHub',
							'url': 'https://github.com/breakerino/erasmus-interactive-dictionary',
							'icon': 'github'
						},
						{
							'id': 6,
							'text': 'Figma',
							'url': 'https://www.figma.com/design/VNxcSN1ozLzBH6cCyiXKfx/Erasmus-Interactive-Dictionary?node-id=0-1&t=W07wTd6234fQVXwn-1',
							'icon': 'figma-logo'
						}
					]
				},
				{
					'id': 3,
					'name': 'Erasmus Let\'s Teach Each Other',
					'description': 'Website for my high school\'s Erasmus+ KA2 project, featuring dynamic JSON-driven content, tabbed navigation, and a responsive gallery. Designed in Figma and built with with React, Astro, Tailwind, and SASS.',
					'finishDate': '2022-09-07',
					'technologies': [
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
							'id': 10,
							'name': 'Astro',
							'icon': 'astro-logo',
							'order': 9
						},
						{
							'id': 43,
							'name': 'AWS',
							'icon': 'aws-logo',
							'order': 40
						},
						{
							'id': 47,
							'name': 'Docker',
							'icon': 'docker-logo',
							'order': 44
						}
					],
					'media': {
						'id': 21,
						'video': {
							'id': 65,
							'name': 'project-erasmus-lets-teach-each-other-video.mp4',
							'alternativeText': null,
							'width': null,
							'height': null,
							'url': '/uploads/project_erasmus_lets_teach_each_other_video_659fad0e1b.mp4'
						},
						'thumbnail': {
							'id': 76,
							'name': 'project-erasmus-lets-teach-each-other-thumbnail.jpg',
							'alternativeText': null,
							'width': 960,
							'height': 540,
							'url': '/uploads/project_erasmus_lets_teach_each_other_thumbnail_16b1bcc704.jpg'
						}
					},
					'links': [
						{
							'id': 7,
							'text': 'Live demo',
							'url': 'https://erasmus-lets-teach-each-other.breakerino.me',
							'icon': 'link'
						},
						{
							'id': 8,
							'text': 'GitHub',
							'url': 'https://github.com/breakerino/erasmus-lets-teach-each-other',
							'icon': 'github'
						},
						{
							'id': 9,
							'text': 'Figma',
							'url': 'https://www.figma.com/design/LOpbQWCo3KPYGhZH8rHpdg/Erasmus-Let-s-Teach-Each-Other?node-id=0-1&t=4XmOirt8EcdLNc1M-1',
							'icon': 'figma-logo'
						}
					]
				},
				{
					'id': 8,
					'name': 'Portfolio',
					'description': 'Modern, responsive personal portfolio, featuring handcrafted components and smooth scroll-based animations to showcase my skills, projects, and work experience, designed in Figma and built with Next.js and Strapi.',
					'finishDate': '2025-09-21',
					'technologies': [
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
							'id': 8,
							'name': 'React',
							'icon': 'react-logo',
							'order': 7
						},
						{
							'id': 20,
							'name': 'Storybook',
							'icon': 'storybook-logo',
							'order': 19
						},
						{
							'id': 9,
							'name': 'Next.js',
							'icon': 'nextjs-logo',
							'order': 8
						},
						{
							'id': 28,
							'name': 'Node.js',
							'icon': 'nodejs-logo',
							'order': 25
						},
						{
							'id': 30,
							'name': 'Strapi',
							'icon': 'strapi-logo',
							'order': 29
						},
						{
							'id': 43,
							'name': 'AWS',
							'icon': 'aws-logo',
							'order': 40
						},
						{
							'id': 47,
							'name': 'Docker',
							'icon': 'docker-logo',
							'order': 44
						},
						{
							'id': 80,
							'name': 'Motion',
							'icon': 'framer-motion-logo',
							'order': 15
						}
					],
					'media': {
						'id': 28,
						'video': null,
						'thumbnail': {
							'id': 73,
							'name': 'project-breakerino-portfolio-thumbnail.jpg',
							'alternativeText': null,
							'width': 960,
							'height': 540,
							'url': '/uploads/project_breakerino_portfolio_thumbnail_00b514e289.jpg'
						}
					},
					'links': [
						{
							'id': 20,
							'text': 'Live demo',
							'url': 'https://breakerino.me',
							'icon': 'link'
						},
						{
							'id': 21,
							'text': 'GitHub',
							'url': 'https://github.com/breakerino/breakerino-portfolio',
							'icon': 'github'
						},
						{
							'id': 22,
							'text': 'Figma',
							'url': 'https://www.figma.com/design/XRHlNdPccvgB58JKbFvhFv/Breakerino.me-%7C-Portfolio-%7C-Design?node-id=0-1&t=e5UmAN1X2BbmEhUU-1',
							'icon': 'figma-logo'
						}
					]
				},
				{
					'id': 1,
					'name': 'SOŠ Handlová Study Field Overview',
					'description': 'Interactive web app for my high school showcasing available study fields with categories, detailed descriptions, and smooth page transitions, built with React and SASS.',
					'finishDate': '2020-12-04',
					'technologies': [
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
							'id': 43,
							'name': 'AWS',
							'icon': 'aws-logo',
							'order': 40
						},
						{
							'id': 47,
							'name': 'Docker',
							'icon': 'docker-logo',
							'order': 44
						}
					],
					'media': {
						'id': 23,
						'video': {
							'id': 60,
							'name': 'project-sosha-study-fields-overview-video.mp4',
							'alternativeText': null,
							'width': null,
							'height': null,
							'url': '/uploads/project_sosha_study_fields_overview_video_a68545305a.mp4'
						},
						'thumbnail': {
							'id': 77,
							'name': 'project-sosha-study-fields-overview-thumbnail.jpg',
							'alternativeText': null,
							'width': 960,
							'height': 540,
							'url': '/uploads/project_sosha_study_fields_overview_thumbnail_b013857324.jpg'
						}
					},
					'links': [
						{
							'id': 1,
							'text': 'Live demo',
							'url': 'https://sosha-study-fields-overview.breakerino.me',
							'icon': 'link'
						},
						{
							'id': 2,
							'text': 'GitHub',
							'url': 'https://github.com/breakerino/sosha-study-fields-overview',
							'icon': 'github'
						},
						{
							'id': 3,
							'text': 'Figma',
							'url': 'https://www.figma.com/design/pH7vR8WJWwAdk304SsapRi/SO%C5%A0-Handlov%C3%A1-Study-Field-OverviewSO%C5%A0-Handlov%C3%A1-Study-Field-Overview?node-id=0-1&t=Z3llChARE7wkq8Sm-1',
							'icon': 'figma-logo'
						}
					]
				},
				{
					'id': 7,
					'name': 'Time Spent on Anime',
					'description': 'Platform for anime fans to view detailed watch statistics from MyAnimeList, featuring ranked lists and time breakdowns, built with Laravel, React, and Tailwind CSS.',
					'finishDate': '2025-02-16',
					'technologies': [
						{
							'id': 1,
							'name': 'HTML',
							'icon': 'html-logo',
							'order': 0
						},
						{
							'id': 4,
							'name': 'Tailwind CSS',
							'icon': 'tailwind-css-logo',
							'order': 3
						},
						{
							'id': 8,
							'name': 'React',
							'icon': 'react-logo',
							'order': 7
						},
						{
							'id': 26,
							'name': 'PHP',
							'icon': 'php-logo',
							'order': 23
						},
						{
							'id': 27,
							'name': 'Laravel',
							'icon': 'laravel-logo',
							'order': 24
						},
						{
							'id': 37,
							'name': 'Redis',
							'icon': 'redis-logo',
							'order': 34
						},
						{
							'id': 43,
							'name': 'AWS',
							'icon': 'aws-logo',
							'order': 40
						},
						{
							'id': 47,
							'name': 'Docker',
							'icon': 'docker-logo',
							'order': 44
						}
					],
					'media': {
						'id': 22,
						'video': {
							'id': 67,
							'name': 'project-timespentonanime-video.mp4',
							'alternativeText': null,
							'width': null,
							'height': null,
							'url': '/uploads/project_timespentonanime_video_c2f24cff93.mp4'
						},
						'thumbnail': {
							'id': 78,
							'name': 'project-timespentonanime-thumbnail.jpg',
							'alternativeText': null,
							'width': 960,
							'height': 540,
							'url': '/uploads/project_timespentonanime_thumbnail_ec86c48240.jpg'
						}
					},
					'links': [
						{
							'id': 18,
							'text': 'Live demo',
							'url': 'https://timespentonanime.breakerino.me',
							'icon': 'link'
						},
						{
							'id': 19,
							'text': 'GitHub',
							'url': 'https://github.com/breakerino/timespentonanime',
							'icon': 'github'
						}
					]
				},
				{
					'id': 6,
					'name': 'Tuturium',
					'description': 'All-in-one expense tracker with bank sync, receipt scanning, and AI-powered products categorization via GPT-4o-mini, designed in Figma and built with React, Strapi, and Chakra UI.',
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
							'order': 12
						},
						{
							'id': 18,
							'name': 'React Query',
							'icon': 'react-query-logo',
							'order': 18
						},
						{
							'id': 11,
							'name': 'React Router',
							'icon': 'react-router-logo',
							'order': 11
						},
						{
							'id': 16,
							'name': 'React Hook Form',
							'icon': 'react-hook-form-logo',
							'order': 17
						},
						{
							'id': 28,
							'name': 'Node.js',
							'icon': 'nodejs-logo',
							'order': 25
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
							'order': 33
						},
						{
							'id': 43,
							'name': 'AWS',
							'icon': 'aws-logo',
							'order': 40
						},
						{
							'id': 47,
							'name': 'Docker',
							'icon': 'docker-logo',
							'order': 44
						}
					],
					'media': {
						'id': 27,
						'video': {
							'id': 66,
							'name': 'project-tuturium-video.mp4',
							'alternativeText': null,
							'width': null,
							'height': null,
							'url': '/uploads/project_tuturium_video_1e41e0d3bd.mp4'
						},
						'thumbnail': {
							'id': 79,
							'name': 'project-tuturium-thumbnail.jpg',
							'alternativeText': null,
							'width': 960,
							'height': 540,
							'url': '/uploads/project_tuturium_thumbnail_5eea35d78f.jpg'
						}
					},
					'links': [
						{
							'id': 15,
							'text': 'Live demo',
							'url': 'https://tuturium.breakerino.me',
							'icon': 'link'
						},
						{
							'id': 16,
							'text': 'GitHub',
							'url': 'https://github.com/breakerino/tuturium',
							'icon': 'github'
						},
						{
							'id': 17,
							'text': 'Figma',
							'url': 'https://www.figma.com/design/1aiRa47i2kMsiJAeck2Yxt/Tuturium?node-id=0-1&t=ySz4QdFtagVnnn6j-1',
							'icon': 'figma-logo'
						}
					]
				},
				{
					'id': 9,
					'name': 'Breakerino Checkout',
					'description': 'Step-by-step WooCommerce checkout with live validation, making online purchases smoother, clearer, and hassle-free, designed in Figma and built with PHP, SASS, and JavaScript.',
					'finishDate': '2025-09-14',
					'technologies': [
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
							'id': 26,
							'name': 'PHP',
							'icon': 'php-logo',
							'order': 23
						},
						{
							'id': 31,
							'name': 'WordPress',
							'icon': 'wordpress-logo',
							'order': 30
						},
						{
							'id': 32,
							'name': 'WooCommerce',
							'icon': 'woocommerce-logo',
							'order': 31
						},
						{
							'id': 5,
							'name': 'JavaScript',
							'icon': 'javascript-logo',
							'order': 4
						}
					],
					'media': {
						'id': 37,
						'video': {
							'id': 61,
							'name': 'project-breakerino-checkout-video.mp4',
							'alternativeText': null,
							'width': null,
							'height': null,
							'url': '/uploads/project_breakerino_checkout_video_df7dfe27a4.mp4'
						},
						'thumbnail': {
							'id': 74,
							'name': 'project-breakerino-checkout-thumbnail.jpg',
							'alternativeText': null,
							'width': 960,
							'height': 540,
							'url': '/uploads/project_breakerino_checkout_thumbnail_fd9dcee908.jpg'
						}
					},
					'links': [
						{
							'id': 23,
							'text': 'Live demo',
							'url': 'https://autovec.sk/kontrola-objednavky/',
							'icon': 'link'
						},
						{
							'id': 24,
							'text': 'Figma',
							'url': 'https://www.figma.com/design/OqtYnOKpmI5hcSg9HadQp7/Autovec-%7C-Checkout?node-id=0-1&t=zhVGk4wOYhLZv7kp-1',
							'icon': 'figma-logo'
						},
						{
							'id': 25,
							'text': 'GitHub',
							'url': 'https://github.com/breakerino/breakerino-checkout',
							'icon': 'github'
						}
					]
				}
			]
		}
	},
	{
		'id': 'experience',
		'data': {
			'id': 4,
			'heading': {
				'id': 84,
				'subtitle': 'My work',
				'title': 'Experience'
			},
			'workExperiences': [
				{
					'id': 1,
					'companyName': 'Ametica',
					'location': 'Prievidza, Slovakia',
					'startDate': '2019-07-14',
					'endDate': '2025-05-31',
					'employmentType': 'Freelance',
					'description': 'Worked on diverse projects ranging from major e-commerce sites (<a href=\'https://etabletka.sk\' class=\'underline hover:text-primary-400 cursor-none\' target=\'_blank\'>eTabletka</a>, <a href=\'https://parfen.sk\' class=\'underline hover:text-primary-400 cursor-none\' target=\'_blank\'>Parfen</a>, <a href=\'https://releciga.sk\' class=\'underline hover:text-primary-400 cursor-none\' target=\'_blank\'>Relleciga</a>, <a href=\'https://royalpets.sk\' class=\'underline hover:text-primary-400 cursor-none\' target=\'_blank\'>RoyalPets</a>, <a href=\'https://topski.sk\' class=\'underline hover:text-primary-400 cursor-none\' target=\'_blank\'>Topski</a>) to web apps (<a href=\'https://pluserecept.sk\' class=\'underline hover:text-primary-400 cursor-none\' target=\'_blank\'>PLUS eRecept</a>, <a href=\'https://varimespolu.sk\' class=\'underline hover:text-primary-400 cursor-none\' target=\'_blank\'>Varíme spolu</a>, <a href=\'https://grow-up-360.app\' class=\'underline hover:text-primary-400 cursor-none\' target=\'_blank\'>Grow-Up 360</a>) and presentation sites (<a href=\'https://aldeaexperience.com/\' class=\'underline hover:text-primary-400 cursor-none\' target=\'_blank\'>Aldea Experience</a>, <a href=\'https://unipas.sk\' class=\'underline hover:text-primary-400 cursor-none\' target=\'_blank\'>Unipas</a>), tackling challenges across multiple industries.\n\nAs a **full-stack developer**, I focused on **backend development** with PHP, WordPress, and WooCommerce, while also often contributing to **frontend development** with React and JavaScript. I built **custom plugins**, designed **APIs and scalable codebases**, created a **reusable theme base**, wrote **documentation**, refactored legacy code, and implemented **bug fixes and performance improvements**—ensuring every project was **robust, maintainable, and adaptable**.\n\nOn the **DevOps side**, I configured project environments, managed deployments across multiple language instances, and automated slow, error-prone processes with a **custom CI/CD system using GitLab Runner**, making releases faster and more reliable. I also created **internal tools** like **Assets Manager** and **Bricks Sync** that streamlined workflows and improved developer efficiency.\n\n**Key project:** Wooptima — a powerful WordPress plugin suite with a custom core, React-based, UI/UX-optimized **megamenu**, **minicart**, and **product area** components that accelerated development across client projects.\n\nBeyond coding, I collaborated closely with **project managers and fellow developers**, guided best practices, and ensured technical solutions aligned with project goals. My combined experience in **full-stack development and DevOps** let me deliver **high-quality, reliable, and maintainable solutions from architecture to deployment**, shaping projects end-to-end.',
					'position': 'Full Stack Web Developer',
					'companySiteURL': 'https://ametica.sk',
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
							'order': 12
						},
						{
							'id': 13,
							'name': 'Styled Components',
							'icon': 'styled-components-logo',
							'order': 13
						},
						{
							'id': 14,
							'name': 'Shadcn',
							'icon': 'shadcn-logo',
							'order': 14
						},
						{
							'id': 18,
							'name': 'React Query',
							'icon': 'react-query-logo',
							'order': 18
						},
						{
							'id': 11,
							'name': 'React Router',
							'icon': 'react-router-logo',
							'order': 11
						},
						{
							'id': 16,
							'name': 'React Hook Form',
							'icon': 'react-hook-form-logo',
							'order': 17
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
							'order': 16
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
							'order': 23
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
							'order': 25
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
							'id': 35,
							'name': 'MySQL',
							'icon': 'mysql-logo',
							'order': 32
						},
						{
							'id': 36,
							'name': 'MariaDB',
							'icon': 'mariadb-logo',
							'order': 33
						},
						{
							'id': 37,
							'name': 'Redis',
							'icon': 'redis-logo',
							'order': 34
						},
						{
							'id': 41,
							'name': 'RunCloud',
							'icon': 'runcloud-logo',
							'order': 38
						},
						{
							'id': 42,
							'name': 'DigitalOcean',
							'icon': 'digitalocean-logo',
							'order': 39
						},
						{
							'id': 47,
							'name': 'Docker',
							'icon': 'docker-logo',
							'order': 44
						},
						{
							'id': 68,
							'name': 'Figma',
							'icon': 'figma-logo',
							'order': 65
						},
						{
							'id': 69,
							'name': 'Adobe Photoshop',
							'icon': 'adobe-photoshop-logo',
							'order': 66
						},
						{
							'id': 70,
							'name': 'Adobe Illustrator',
							'icon': 'adobe-illustrator-logo',
							'order': 67
						},
						{
							'id': 72,
							'name': 'Adobe Premiere Pro',
							'icon': 'adobe-premiere-logo',
							'order': 69
						}
					]
				}
			]
		}
	},
	{
		'id': 'contact',
		'data': {
			'id': 4,
			'text': 'Let’s build something great',
			'email': 'hello@breakerino.me',
			'socials': [
				'github',
				'linkedin',
				'facebook',
				'instagram',
				'spotify',
				'youtube',
				'myanimelist'
			]
		}
	}
];

export const footerData: FooterProps['data'] = {
	'copyrightText': `© ${generalSettings.year} Breakerino. All rights reserved.`,
	'text': 'Designed & Developed with 🩵 by **<a class='cursor-none hover:text-primary-400 transition-colors' href='https://breakerino.me'>Breakerino<span class='text-primary-400'>.</span></a>**'
}

export const queries = [
	{ queryKey: ['settings', 'general'], data: generalSettings },
	{ queryKey: ['settings', 'site'], data: siteSettings },
	{ queryKey: ['settings', 'personal'], data: personalSettings },
	{ queryKey: ['sections', 'header'], data: headerData },
	{ queryKey: ['sections'], data: contentData },
	{ queryKey: ['sections', 'footer'], data: footerData }
];