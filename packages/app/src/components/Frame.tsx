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
// --------------------------------------------------------------------- 

export interface FrameProps extends BaseComponentProps {}

const Frame: React.FC<FrameProps> = ({ className, children, as: Tag = 'div' }) => {
	const contentRef = React.useRef<HTMLDivElement>(null);
	const { width, height } = useDimensions<HTMLDivElement>(contentRef);

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
			<div
				ref={contentRef}
				className={clsx(
					'brk-frame-content',
					'relative z-10 w-fit h-fit'
				)}
			>
				{children}
			</div>
			
			<div
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