// --------------------------------------------------------------------- 
// Sections > About me
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Media } from '@/app/types';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Section from '@/components/Section';
import Container from '@/components/Container';
import Text from '@/components/Text';
import Heading from '@/components/Heading';
import { BaseSectionProps } from '../app/types';
import Frame from '@/components/Frame';
import Motion from '@/modules/motion';
import Reels from '@/components/Reels';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface AboutMeSectionProps extends BaseSectionProps {
	text: string;
	reels: Media[];
}
// --------------------------------------------------------------------- 

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ className, heading, reels, text }) => {
	return (
		<Section
			id="about-me"
			className={twMerge(
				clsx(
					'brk-section--about-me',
					className
				)
			)}>
			<Container>
				{heading && <Heading {...heading} />}
				<div className="flex flex-col md:flex-row gap-8">
					<Frame className="md:sticky md:top-8" animated>
						<Reels
							className="2xs:w-[33.33333vw] 2xs:min-w-[18.75rem] md:min-w-[unset] lg:w-[27.5vw]"
							reels={reels}
						/>
					</Frame>
					<div className="flex flex-1 md:mt-8 lg:mt-12 items-center">
						<Motion.ScrollReveal
							initial={{ opacity: 0, y: 32 }}
							animate={{ opacity: 1, y: '0%' }}
						>
							<Text
								withMarkdown
								as="div"
							>
								{text}
							</Text>
						</Motion.ScrollReveal>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default AboutMeSection;