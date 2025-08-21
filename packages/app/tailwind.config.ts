import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/layouts/**/*.{tsx}',
		'./src/pages/**/*.{tsx}',
		'./src/components/**/*.{tsx}',
		'./src/containers/**/*.{tsx}',
		'./src/app/**/*.{tsx}',
		'./src/assets/scss/**/*.{scss}',
	],
	plugins: [],
};

export default config;