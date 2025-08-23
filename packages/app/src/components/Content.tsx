// --------------------------------------------------------------------- 
// Components > Content
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

export interface ContentProps {
	className?: string;
	children?: React.ReactNode;
	as?: keyof React.JSX.IntrinsicElements; 
}

const Content: React.FC<ContentProps> = ({ className, children, as: Tag = 'main' }) => {
	return (
		<Tag
			className={twMerge(
				clsx(
					'brk-content',
					'@container/content flex flex-col',
					className
				)
			)}
		>
			{children}
		</Tag>
	)
}

export default Content;