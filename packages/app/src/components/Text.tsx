// --------------------------------------------------------------------- 
// Components > Text
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface TextProps extends BaseComponentProps {}

const Text: React.FC<TextProps> = ({ className, children, as: Tag = 'div' }) => {
	return (
		<Tag
			className={twMerge(
				clsx(
					'brk-text',
					'text-lg lg:text-xl font-normal text-primary-100 leading-[1.75]',
					className
				)
			)}
		>
			{children}
		</Tag>
	)
}

export default Text;