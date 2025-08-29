// --------------------------------------------------------------------- 
// Components > PhotoFrame
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { useDimensions } from '@/hooks/useDimensions';
import { BaseComponentProps, Image as ImageType } from '@/app/types';
// --------------------------------------------------------------------- 

export interface PhotoFrameProps extends Omit<BaseComponentProps, 'children'> {
	image: ImageType;
}

const PhotoFrame: React.FC<PhotoFrameProps> = ({ className, as: Tag = 'div', image }) => {
	const imageRef = React.useRef<HTMLDivElement>(null);
	const { width } = useDimensions<HTMLDivElement>(imageRef);

	return (
		<Tag
			className={twMerge(
				clsx(
					'brk-photo-frame',
					'relative',
					className
				)
			)}
		>
			<div
				ref={imageRef}
				className={clsx(
					'brk-photo-frame-image',
					'relative z-10 rounded-lg overflow-hidden'
				)}
			>
				<Image
					src={image.url}
					width={image.width}
					height={image.height}
					alt={image.alternativeText}
				/>
			</div>

			<div
				style={{
					width: `${width}px`,
					height: `${width / 2}px`,
					bottom: `${width / 2}px`,
					left: 0
				}}
				className={clsx(
					'brk-photo-frame-border--top',
					'absolute z-0 bg-transparent border-3 border-b-0 border-secondary-700 rounded-lg rounded-b-none'
				)}
			/>
			
			<div
				style={{
					width: `${width}px`,
					height: `${width / 2}px`,
					bottom: 0,
					left: 0
				}}
				className={clsx(
					'brk-photo-frame-border--bottom',
					'absolute  z-20 bg-transparent border-3 border-t-0 border-secondary-700 rounded-lg rounded-t-none'
				)}
			/>
		</Tag>
	)
}

export default PhotoFrame;