// --------------------------------------------------------------------- 
// Components > Skip link
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface SkipLinkProps extends Omit<BaseComponentProps, 'children'> {}

const SkipLink: React.FC<SkipLinkProps> = ({ className }) => {
	return (
		<a
			href="#main"
			className={twMerge(
				clsx(
					'brk-skip-link',
					'sr-only focus:not-sr-only focus:absolute focus:top-1 focus:left-1 border-3 border-secondary-700 text-primary-100 bg-secondary-950 rounded-xs',
					className
				)
			)}
		>
			Skip to main content
		</a>
	)
}

export default SkipLink;