// --------------------------------------------------------------------- 
// Components > Text
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { marked } from 'marked';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface TextProps extends BaseComponentProps {
	withMarkdown?: boolean;
}

const Text: React.FC<TextProps> = ({ className, children, as: Tag = 'span', withMarkdown = false }) => {
	const styles = 'text-base md:text-lg lg:text-xl font-normal text-primary-100 leading-[1.75]';
	
	if (withMarkdown) {
		return (
			<Tag
				className={twMerge(
					clsx(
						'brk-text',
						styles,
						className
					)
				)}
				dangerouslySetInnerHTML={{ __html: marked.parse(`${children}`) }}
			/>
		)
	}

	return (
		<Tag
			className={twMerge(
				clsx(
					'brk-text',
					styles,
					className
				)
			)}
		>
			{children}
		</Tag>
	)
}

export default Text;