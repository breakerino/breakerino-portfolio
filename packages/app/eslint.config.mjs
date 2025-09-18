import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
	// Next.js recommended rules
...compat.extends('next/core-web-vitals', 'next/typescript'), // Custom rules
{
  rules: {
    // Enforce double quotes in JSX
    'jsx-quotes': ['error', 'prefer-double'],

    // Enforce single quotes in TS
    quotes: ['error', 'single', { avoidEscape: true }],
		
		// Disable the empty object type rule globally
		'@typescript-eslint/no-empty-object-type': 'off',
		
		// Disable React hooks exhaustive-deps rule
		'react-hooks/exhaustive-deps': 'off'
  },
}];

export default eslintConfig;
