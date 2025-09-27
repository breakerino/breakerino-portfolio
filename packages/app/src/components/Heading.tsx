// --------------------------------------------------------------------- 
// Components > Heading
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, Heading as HeadingType } from '@/app/types';
import Motion from '@/modules/motion';
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
					<span
						className={clsx(
							'brk-heading-subtitle__text',
							'text-xl md:text-2xl lg:text-3xl font-normal leading-[1] text-primary-100'
						)}
						aria-label={subtitle}
					>
						<Motion.LettersPullUp>
							{subtitle}
						</Motion.LettersPullUp>
					</span>
					<Motion.ScrollReveal
						className={clsx(
							'brk-heading-subtitle__line',
							'flex-1 w-full h-0.75 bg-secondary-700 rounded-sm'
						)}
						initial={{ scaleX: 0, transformOrigin: 'left' }}
						animate={{ scaleX: 1 }}
						transition={{
							duration: 0.6,
							delay: (subtitle?.length ?? 0) * 0.05
						}}
					/>
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
					<Motion.LettersPullUp
						initialDelay={(subtitle?.length ?? 0) * 0.05}
					>
						{title}
					</Motion.LettersPullUp>
				</span>
				{showTitleDot && (
					<Motion.LettersPullUp
						className={clsx(
							'brk-heading-title__dot',
							'text-primary-400'
						)}
						as="abbr"
						ariaHidden
						initialDelay={(title.length * 0.05) + (subtitle?.length ?? 0) * 0.05 + 0.3}
					>
						.
					</Motion.LettersPullUp>
				)}
			</div>
		</Tag>
	)
}

export default Heading;