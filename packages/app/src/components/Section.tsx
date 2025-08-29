// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface SectionProps extends BaseComponentProps {
	id?: string;
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