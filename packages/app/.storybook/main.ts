// --------------------------------------------------------------------- 
// Storybook > Main
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { StorybookConfig } from '@storybook/nextjs-vite';
import { getAbsolutePath } from './functions';
// --------------------------------------------------------------------- 

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-styling-webpack'),
    getAbsolutePath('@storybook/addon-essentials')
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs-vite'),
    options: {},
  },
  staticDirs: [
    '../public',
  ],
};

export default config;