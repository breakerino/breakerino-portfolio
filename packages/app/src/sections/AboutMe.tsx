// --------------------------------------------------------------------- 
// Sections > About me
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Image as ImageType, Video as VideoType } from '@/app/types';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Section from '@/components/Section';
import Container from '@/components/Container';
import Text from '@/components/Text';
import Heading from '@/components/Heading';
import { BaseSectionProps } from '../app/types';
import { getStaticAssetURL } from '@/app/functions';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface AboutMeSectionProps extends BaseSectionProps {
	text: string;
	reels: {
		title: string;
		video: VideoType
		thumbnail?: {
			image: ImageType
		}
	}[]
}
// --------------------------------------------------------------------- 

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ className, heading, reels, text }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const reel = reels[0] as any;

	return (
		<Section
			className={twMerge(
				clsx(
					'brk-section--about-me',
					className
				)
			)}>
			<Container>
				{heading && <Heading {...heading} />}
				<div className="flex flex-col lg:flex-row gap-8">
					<div className={clsx(
						'brk-section--about-me-left',
						'flex-2/5'
					)}>
						<Image
							className="sticky top-8"
							src={getStaticAssetURL(reel.thumbnail.url)}
							width={reel.thumbnail.width}
							height={reel.thumbnail.height}
							alt={reel.thumbnail.alternativeText}
							priority
						/>
					</div>
					<div className={clsx(
						'brk-section--hero-right',
						'flex-3/5'
					)}>
						<Text>{text}</Text>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default AboutMeSection;