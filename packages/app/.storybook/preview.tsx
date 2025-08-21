// --------------------------------------------------------------------- 
import React from 'react';
import type { Preview } from '@storybook/nextjs-vite';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import '@/assets/css/tailwind.css';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Wrapper from '@/components/Wrapper';
// --------------------------------------------------------------------- 

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    backgrounds: {
			default: 'secondary',
      options: {
        light: { name: 'Light', value: '#ffffff' },
        dark: { name: 'Dark', value: '#1e1e1e' },
        secondary: { name: 'Secondary 950', value: '#1a1c20' },
      },
    },
  },
  decorators: [
    (Story) => (
      <Wrapper className="min-w-auto min-h-auto">
        <Story />
      </Wrapper>
    ),
  ],
};

export default preview;