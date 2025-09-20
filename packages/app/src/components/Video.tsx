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
}

// ---------------------------------------------------------------------
const Video: React.FC<VideoProps> = ({
	sources,
	className,
	autoPlay = false,
	loop = false,
	muted = false,
	playsInline = false,
	poster,
	...props
}) => {
	const videoRef = React.useRef<HTMLVideoElement | null>(null);
	const isFullyInView = useInView(videoRef, { once: false, margin: '10% 0px 0px', amount: 'all' });
	const isPartiallyInView = useInView(videoRef, { once: false, margin: '10% 0px 0px', amount: 0.01 });

	const [shouldLoad, setShouldLoad] = React.useState<boolean>(false);

	React.useEffect(() => {
		const video = videoRef.current;

		if (!video) {
			return;
		}

		if (isPartiallyInView && !shouldLoad) {
			setShouldLoad(true);

			video.addEventListener('loadeddata', () => {
				if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
					video.play().catch(() => { });
					video.pause();
				}
			})
		}
	}, [shouldLoad, isPartiallyInView]);

	React.useEffect(() => {
		const video = videoRef.current;

		if (!video) {
			return;
		}

		if (isFullyInView) {
			video.play().catch(() => { });
		} else {
			video.pause();

			if (!isPartiallyInView) {
				video.currentTime = 0;
			}
		}

	}, [isPartiallyInView, isFullyInView]);

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
			poster={shouldLoad ? poster : undefined}
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