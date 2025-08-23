// --------------------------------------------------------------------- 
// Sections > Footer
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import Section from '@/components/Section';
// --------------------------------------------------------------------- 

export interface FooterProps {
	className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
	return (
		<Section as="footer"
			className={twMerge(
				clsx(
					'brk-footer',
					className
				)
			)}
		>
		</Section>
	)
}

export default Footer;