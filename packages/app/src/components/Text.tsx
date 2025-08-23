// --------------------------------------------------------------------- 
// Components > Text
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

export interface TextProps {
	className?: string;
	children?: React.ReactNode;
	as?: keyof React.JSX.IntrinsicElements;
}

const Text: React.FC<TextProps> = ({ className, children, as: Tag = 'p' }) => {
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