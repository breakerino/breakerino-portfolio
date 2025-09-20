// --------------------------------------------------------------------- 
// Sections > Projects
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseSectionProps, Project } from '@/app/types';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ProjectsList from '@/components/ProjectsList';
// --------------------------------------------------------------------- 

export interface ProjectsSectionProps extends BaseSectionProps {
	projects: Project[]
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, className, heading, projects }) => {
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
				<ProjectsList projects={projects} />
			</Container>
		</Section>
	)
}

export default ProjectsSection;