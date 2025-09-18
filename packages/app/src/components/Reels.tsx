// --------------------------------------------------------------------- 
// Components > Reels
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
'use client';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { Splide, SplideSlide, Splide as SplideClass } from '@splidejs/react-splide';
import { useInView } from 'motion/react';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, Media } from '@/app/types';
import { getStaticAssetURL } from '@/app/functions';
// --------------------------------------------------------------------- 

export interface ReelsProps extends Omit<BaseComponentProps, 'as' | 'children'> {
	reels: Media[];
}

const Reels: React.FC<ReelsProps> = ({ className, reels }) => {
	const [shouldLoad, setShouldLoad] = React.useState<boolean>(false);

	const ref = React.useRef<HTMLDivElement | null>(null);
	const splideRef = React.useRef<SplideClass | null>(null);

	const isInView = useInView(ref, { once: false, margin: '10% 0px 0px' });

	React.useEffect(() => {
		if (!splideRef.current?.splide) {
			return;
		}

		const splide = splideRef.current.splide;
		const splideRoot = splide.root;

		if (!splideRoot) {
			return;
		}
		
		const videos = splideRoot.querySelectorAll<HTMLVideoElement>('video');

		const handleSlideChange = () => {
			videos.forEach((video, index) => {
				if (index === splide.index) {
					video.play().catch(() => {});
				} else {
					video.pause();
					video.currentTime = 0;
				}
			});
		};
		
		const bindVideoEndListeners = () => {
			videos.forEach((video, index) => {
				video.onended = () => {
					if (index === splide.index) {
						if ( (index + 1) < videos.length ) {
							splide.go('+1');
						} else {
							splide.go(0);
						}
					}
				};
			});
		};

		if (isInView) {
			setShouldLoad(true);
		} else {
			splide.go(0);
			
			videos.forEach((video) => {
				video.pause();
				video.currentTime = 0;
			});
		}

		handleSlideChange();
		bindVideoEndListeners();
		
		splide.on('moved', handleSlideChange);

		return () => {
			splide.off('moved');
			
			videos.forEach((video) => {
				video.onended = null;
			});
		};
	}, [isInView]);

	return (
		<div ref={ref} className={className}>
			<Splide
				ref={splideRef}
				options={{
					type: 'slide',
					perPage: 1,
					autoplay: false,
					arrows: false,
					pagination: false,
					pauseOnHover: false,
					pauseOnFocus: false,
				}}
				aria-label="Reels Carousel"
			>
				{reels.map((reel, index) => {
					return (
						<SplideSlide key={`reel-${index}`}>
							<video
								muted
								playsInline
								poster={getStaticAssetURL(reel?.thumbnail?.url)}
							>
								{shouldLoad && (
									<source src={getStaticAssetURL(reel.video.url)} type="video/mp4" />
								)}
							</video>
						</SplideSlide>
					);
				})}
			</Splide>
		</div>
	);
};

export default Reels;
