// --------------------------------------------------------------------- 
// Sections > Experience
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseSectionProps, WorkExperience } from '@/app/types';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import WorkExperienceList from '@/components/WorkExperienceList';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface ExperienceSectionProps extends BaseSectionProps {
	workExperiences: WorkExperience[];
}
// --------------------------------------------------------------------- 

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id, className, heading, workExperiences}) => {
	return (
		<Section
			id={id}
			className={twMerge(
				clsx(
					'brk-section--experience',
					className
				)
			)}>
			<Container>
				{heading && <Heading {...heading} />}
				<WorkExperienceList items={workExperiences} />
			</Container>
		</Section>
	)
}

export default ExperienceSection;