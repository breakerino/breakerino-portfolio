// --------------------------------------------------------------------- 
// Sections > Projects
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseSectionProps } from '../app/types';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface ProjectsSectionProps extends BaseSectionProps {}
// --------------------------------------------------------------------- 

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, className, heading }) => {
	return (
		<Section
			id={id}
			className={twMerge(
				clsx(
					'brk-section--projects',
					className
				)
			)}>
			<Container>
				{heading && <Heading {...heading} />}
			</Container>
		</Section>
	)
}

export default ProjectsSection;