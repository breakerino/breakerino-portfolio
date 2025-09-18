// --------------------------------------------------------------------- 
// Sections > Hero
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Image as ImageType, SocialSiteType } from '@/app/types';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { useAppContext } from '@/contexts/App';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { BaseSectionProps } from '@/app/types';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Link from '@/components/Link';
import { getStaticAssetURL } from '@/app/functions';
import { MotionPhotoFrame } from '@/components/PhotoFrame';
import { SOCIAL_SITES } from '@/app/constants';
import Motion from '@/modules/motion';
import Text from '@/components/Text';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface HeroSectionProps extends BaseSectionProps {
	subheading: string;
	text: string;
	socials: SocialSiteType[]
	image: ImageType
}
// --------------------------------------------------------------------- 

const HeroSection: React.FC<HeroSectionProps> = ({ className, id, heading, subheading, text, socials, image }) => {
	const { settings } = useAppContext();

	const [isTablet] = useMediaQuery('(max-width: 64rem)');
	const [isMobile] = useMediaQuery('(max-width: 48rem)');

	const socialProfiles = React.useMemo(() => {
		return settings.personal.socials.filter(social => socials?.includes(social.type))
	}, [socials, settings.personal.socials])

	return (
		<Section
			id={id}
			className={twMerge(
				clsx(
					'brk-section--hero',
					'md:py-16 lg:py-32',
					className
				)
			)}>
			<Container>
				<div className="flex flex-col md:flex-row items-start xl:items-end justify-between gap-6 xl:gap-8">
					<div className={clsx(
						'brk-section--hero-left',
						'@container/hero-left w-full flex-1 md:w-8/12 md:flex-8/12 flex flex-col gap-6 xl:gap-8'
					)}>
						<h1 className="flex flex-col gap-2">
							<Motion.LettersPullUp
								className="text-2xl md:text-3xl xl:text-5xl font-light text-primary-100"
								ariaLabel={heading?.subtitle}
							>
								{heading?.subtitle}
							</Motion.LettersPullUp>
							<span className="text-5xl md:text-7xl xl:text-8xl font-bold text-primary-50">
								<Motion.LettersPullUp ariaLabel={heading?.title}>
									{heading?.title}
								</Motion.LettersPullUp>
								<Motion.LettersPullUp
									as="abbr"
									className="text-primary-400"
									ariaHidden
									initialDelay={((heading?.title?.length ?? 0) * 0.05)}
								>
									.
								</Motion.LettersPullUp>
							</span>
							<Motion.LettersPullUp
								className="text-xl md:text-3xl xl:text-4xl font-medium text-primary-400"
								animationDuration={0.2}
								delayBetweenLetters={0.025}
								ariaLabel={`— ${subheading}`}
							>
								{subheading}
							</Motion.LettersPullUp>
						</h1>
							<Motion.ScrollReveal
								initial={{ opacity: 0, y: '10%' }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6
								}}
							>
								<Text withMarkdown as="div">
									{text}
								</Text>
							</Motion.ScrollReveal>
						<Motion.ScrollReveal
							className="flex gap-4"
							initial={{ opacity: 0, y: '50%' }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							{socialProfiles.map(({ type, username }) => (
								<Link
									key={type}
									variant="animated"
									size={isMobile ? 'sm' : isTablet ? 'md' : 'lg'}
									icon={SOCIAL_SITES[type].icon}
									text={SOCIAL_SITES[type].label}
									url={`${SOCIAL_SITES[type].baseURL}/${username}`}
								/>
							))}
						</Motion.ScrollReveal>
					</div>
					<div className={clsx(
						'brk-section--hero-right',
						'@container/hero-right left -order-1 xl:order-2 w-full flex-1 md:w-5/12 md:flex-5/12 xl:w-4/12 xl:flex-4/12'
					)}>
						<MotionPhotoFrame
							className="min-w-52 w-[33.33333vw] md:w-full"
							image={{ ...image, url: getStaticAssetURL(image.url) }}
							animated
							animationDuration={1}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
						/>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default HeroSection;