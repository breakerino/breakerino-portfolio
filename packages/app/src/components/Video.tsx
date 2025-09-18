// ---------------------------------------------------------------------
// Components > Video
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
'use client';
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useInView } from 'motion/react';
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import { BaseComponentProps, MediaSource } from '@/app/types';
// ---------------------------------------------------------------------

export interface VideoProps extends BaseComponentProps, React.VideoHTMLAttributes<HTMLVideoElement> {
	sources: MediaSource[];
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	playsInline?: boolean;
	poster?: string;
}

// ---------------------------------------------------------------------
const Video: React.FC<VideoProps> = ({
	sources,
	className,
	autoPlay = false,
	loop = false,
	muted = false,
	playsInline = false,
	...props
}) => {
	const videoRef = React.useRef<HTMLVideoElement | null>(null);
	const isInView = useInView(videoRef, { once: false, margin: '10% 0px 0px', amount: 'some' });

	const [shouldLoad, setShouldLoad] = React.useState<boolean>(false);

	React.useEffect(() => {
		const video = videoRef.current;

		if (!video) {
			return;
		}

		if (isInView) {
			setShouldLoad(true);
			video.play();
		} else {
			video.currentTime = 0;
			video.pause();
		}

	}, [isInView]);

	return (
		<video
			ref={videoRef}
			className={twMerge(
				clsx(
					'w-full h-auto object-cover',
					className
				)
			)}
			autoPlay={autoPlay}
			loop={loop}
			muted={muted}
			playsInline={playsInline}
			{...props}
		>
			{shouldLoad && (
				sources.map(({ src, type }) => (
					<source key={src} src={src} type={type} />
				))
			)}
		</video>
	);
};

export default Video;