// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

export interface SectionProps {
	id?: string;
	className?: string;
	children?: React.ReactNode;
	as?: keyof React.JSX.IntrinsicElements;
}

const Section: React.FC<SectionProps> = ({ id, className, children, as: Tag = 'section' }) => {
	return (
		<Tag
			id={id}
			className={twMerge(
				clsx(
					'brk-section',
					'@container/section w-full h-fit py-8 md:py-12 lg:py-23',
					className
				)
			)}
		>
			{children}
		</Tag>
	);
};

export default Section;