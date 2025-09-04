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
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface SkillsSectionProps extends BaseSectionProps {
	skills: {
		title: string;
		skills: Skill[]
	}[]
}
// --------------------------------------------------------------------- 

const SkillsSection: React.FC<SkillsSectionProps> = ({ id, className, heading, skills }) => {
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
				<div className="flex flex-col gap-12">
					{skills.map(({ title, skills }) => (
						<div
							key={title}
							className="flex flex-col gap-2 md:gap-3 lg:gap-4"
						>
							<h3
								className="font-bold text-2xl md:text-4xl lg:text-[2.5rem] text-primary-100"
							>
								{title}
							</h3>
							<SkillsList size={isMobile ? 'sm' : 'md'} {...{ skills }} />
						</div>
					))}
				</div>
			</Container>
		</Section>
	)
}

export default SkillsSection;