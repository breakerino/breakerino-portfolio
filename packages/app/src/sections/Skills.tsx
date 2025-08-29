// --------------------------------------------------------------------- 
// Sections > Skills
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
export interface SkillsSectionProps extends BaseSectionProps {}
// --------------------------------------------------------------------- 

const SkillsSection: React.FC<SkillsSectionProps> = ({ id, className, heading }) => {
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
			</Container>
		</Section>
	)
}

export default SkillsSection;