// --------------------------------------------------------------------- 
// Components > Frame
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
import { useDimensions } from '@/hooks/useDimensions';
import Motion from '@/modules/motion';
// --------------------------------------------------------------------- 

export interface FrameProps extends BaseComponentProps {
	animated?: boolean
	animationDuration?: number;
}

const Frame: React.FC<FrameProps> = ({
	className,
	children,
	as: Tag = 'div',
	animated = false,
	animationDuration = 0.6,
}) => {
	const contentRef = React.useRef<HTMLDivElement>(null);
	const { width, height } = useDimensions<HTMLDivElement>(contentRef);

	const FrameBorder = animated ? Motion.ScrollReveal : 'div'
	const FrameContent = animated ? Motion.ScrollReveal : 'div'

	return (
		<Tag
			className={twMerge(
				clsx(
					'brk-frame',
					'relative w-fit h-fit pr-8 pb-8 lg:pr-12 lg:pb-12',
					className
				)
			)}
		>
			<FrameContent
				ref={contentRef}
				className={clsx(
					'brk-frame-content',
					'relative z-10 w-fit h-fit'
				)}
			>
				{children}
			</FrameContent>

			<FrameBorder
				{...(animated && {
					initial: { opacity: 0, x: -32, y: -32 },
					animate: { opacity: 1, x: 0, y: 0 },
					transition: { duration: animationDuration, delay: animationDuration }
				})}
				style={{
					width: `${width}px`,
					height: `${height}px`
				}}
				className={clsx(
					'brk-frame-border',
					'absolute top-8 left-8 lg:top-12 lg:left-12 bg-transparent border-3 border-secondary-700 rounded-lg'
				)}
			/>
		</Tag>
	)
}

export default Frame;