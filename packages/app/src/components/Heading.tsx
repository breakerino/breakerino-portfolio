// --------------------------------------------------------------------- 
// Components > Heading
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, Heading as HeadingType } from '@/app/types';
// --------------------------------------------------------------------- 

export interface HeadingProps extends BaseComponentProps, HeadingType {
	showTitleDot?: boolean;
	as?: keyof React.JSX.IntrinsicElements;
}

const Heading: React.FC<HeadingProps> = ({ className, as: Tag = 'h2', title, subtitle, showTitleDot = true }) => {
	return (
		<Tag
			className={twMerge(
				clsx(
					'brk-heading',
					'w-full h-fit flex flex-col gap-1',
					className
				)
			)}
		>
			{subtitle && (
				<div className={clsx(
					'brk-heading-subtitle',
					'flex items-center gap-6'
				)}>
					<span className={clsx(
						'brk-heading-subtitle__text',
						'text-xl md:text-2xl lg:text-3xl font-normal leading-[1] text-primary-100'
					)}>
						{subtitle}
					</span>
					<span className={clsx(
						'brk-heading-subtitle__line',
						'flex-1 w-full h-0.75 bg-secondary-700'
					)} />
				</div>
			)}

			<div className={clsx(
				'brk-heading-title',
				'inline text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15]'
			)}>
				<span
					className={clsx(
						'brk-heading-title__text',
						'text-primary-50'
					)}
					aria-label={title.toLocaleLowerCase()}
					>
					{title}
				</span>
				{showTitleDot && (
					<abbr
						className={clsx(
							'brk-heading-title__dot',
							'text-primary-400'
						)}
						aria-hidden={true}
					>
						.
					</abbr>
				)}
			</div>
		</Tag>
	)
}

export default Heading;