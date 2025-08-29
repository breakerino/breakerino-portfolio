// --------------------------------------------------------------------- 
// Sections > Contact
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseSectionProps } from '@/app/types';
import Section from '@/components/Section';
import Container from '@/components/Container';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface ContactSectionProps extends BaseSectionProps {}
// --------------------------------------------------------------------- 

const ContactSection: React.FC<ContactSectionProps> = ({ className}) => {
	return (
		<Section
			className={twMerge(
				clsx(
					'brk-section--contact',
					className
				)
			)}>
			<Container>
			</Container>
		</Section>
	)
}

export default ContactSection;