// --------------------------------------------------------------------- 
// Sections > Skills
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseSectionProps, Skill } from '@/app/types';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import SkillsList from '@/components/SkillsList';
import Motion from '@/modules/motion';
// --------------------------------------------------------------------- 

export interface SkillsSectionProps extends BaseSectionProps {
	skills: {
		title: string;
		skills: Skill[]
	}[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ id, className, heading, skills }) => {
	const [isTablet] = useMediaQuery('(max-width: 64rem)');
	const [isMobile] = useMediaQuery('(max-width: 48rem)');

	return (
		<Section
			id={id}
			className={twMerge(
				clsx(
					'brk-section--skills',
					className
				)
			)}>
			<Container>
				{heading && <Heading {...heading} />}
				<div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
					{skills.map(({ title, skills }) => (
						<div
							key={title}
							className="flex flex-col gap-3 md:gap-4"
						>
							<h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-primary-50" aria-label={title}>
								<Motion.LettersPullUp>{title}</Motion.LettersPullUp>
							</h3>
							<SkillsList animated size={isMobile ? 'sm' : isTablet ? 'md' : 'lg'} {...{ skills }} />
						</div>
					))}
				</div>
			</Container>
		</Section>
	)
}

export default SkillsSection;