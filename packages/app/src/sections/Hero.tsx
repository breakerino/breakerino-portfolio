// --------------------------------------------------------------------- 
// Sections > Hero
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Section from '@/components/Section';
import Container from '@/components/Container';
import SocialLink from '@/components/SocialLink';
import Text from '@/components/Text';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { SocialProfile } from '@/app/types';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const SOCIAL_PROFILES: SocialProfile[] = [
	{ id: 'github', username: 'breakerino' },
	{ id: 'linkedin', username: 'breakerino' }
]
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface HeroSectionProps {
	className?: string;
}
// --------------------------------------------------------------------- 

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
	const [isTablet] = useMediaQuery('(max-width: 1023px)');
	const [isMobile] = useMediaQuery('(max-width: 767px)');

	return (
		<Section
			id="about-me"
			className={twMerge(
				clsx(
					'brk-section--hero',
					className
				)
			)}>
			<Container>
				<div className="flex flex-col md:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
					<div className={clsx(
						'brk-section--hero-left',
						'w-full flex-1 md:w-8/12 md:flex-8/12 flex flex-col gap-8'
					)}>
						<div className="flex flex-col gap-2">
							<h1 className="flex flex-col gap-2">
								<span className="text-2xl md:text-3xl lg:text-5xl font-light text-primary-100">
									Hi, I&apos;m
								</span>
								<span className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-50">
									Breakerino
									<abbr className="text-primary-400" aria-hidden="true">.</abbr>
								</span>
								<span className="text-xl md:text-3xl lg:text-4xl font-medium text-primary-400">
									Full Stack Web Developer
								</span>
							</h1>
						</div>
						<Text>
							I’m a 24-year-old developer with 6 years of professional experience building clean, scalable, and user-focused web applications. From TypeScript and React on the frontend to PHP, WordPress, Node.js, and Strapi on the backend, I’ve built solutions that power websites used by thousands every day — with my code running every single second.
						</Text>
						<div className="flex gap-4">
							{SOCIAL_PROFILES.map((profile) => (
								<SocialLink key={profile.id} variant={isMobile ? 'sm' : isTablet ? 'md' : 'lg'} {...profile} />
							))}
						</div>
					</div>
					<div className={clsx(
						'brk-section--hero-right',
						'-order-1 lg:order-2 w-full flex-1 md:w-5/12 md:flex-5/12 lg:w-4/12 lg:flex-4/12'
					)}>
						<Image
							className="w-52 md:w-full"
							src="/assets/img/breakerino-photo.png"
							width={500}
							height={594}
							alt="Breakerino photo"
							priority
						/>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default HeroSection;