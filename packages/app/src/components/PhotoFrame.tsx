// --------------------------------------------------------------------- 
// Components > Photo frame
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { motion } from 'motion/react'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { useDimensions } from '@/hooks/useDimensions'
import { BaseComponentProps, MediaFile } from '@/app/types'
// --------------------------------------------------------------------- 

export interface PhotoFrameProps extends Omit<BaseComponentProps, 'children'> {
	image: MediaFile;
	animated?: boolean;
	animationDuration?: number;
}

const PhotoFrame: React.FC<PhotoFrameProps> = ({
	className,
	as: Tag = 'div',
	image,
	animated = false,
	animationDuration = 0.6,
	...props
}) => {
	const imageRef = React.useRef<HTMLDivElement>(null);
	const { width } = useDimensions<HTMLDivElement>(imageRef);

	const ImageWrapper = animated ? motion.div : 'div';

	return (
		<Tag
			className={twMerge(clsx('brk-photo-frame', 'relative overflow-hidden', className))}
			{...props}
		>
			<ImageWrapper
				ref={imageRef}
				{...(animated && {
					initial: { opacity: 0, y: '50%' },
					animate: { opacity: 1, y: 0 },
					transition: { duration: animationDuration }
				})}
				className={clsx(
					'brk-photo-frame-image',
					'relative z-10 rounded-lg overflow-hidden'
				)}
			>
				<Image
					className="select-none"
					src={image.url}
					width={image.width ?? undefined}
					height={image.height ?? undefined}
					alt={image.alternativeText ?? 'Image'}
					draggable={false}
					priority
					fetchPriority="high"
				/>
			</ImageWrapper>

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
					'absolute z-20 bg-transparent border-3 border-t-0 border-secondary-700 rounded-lg rounded-t-none'
				)}
			/>
		</Tag>
	)
}

export default PhotoFrame

export const MotionPhotoFrame = motion.create(PhotoFrame)