// --------------------------------------------------------------------- 
// Containers > Footer
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseSectionProps } from '@/app/types';
import Section from '@/components/Section';
import Text from '@/components/Text';
import Container from '@/components/Container';
// --------------------------------------------------------------------- 

export interface FooterProps extends Pick<BaseSectionProps, 'className'> {
	data: {
		text: string;
		copyrightText: string;
	}
}

const Footer: React.FC<FooterProps> = ({ className, data: { text, copyrightText } }) => {
	return (
		<Section
			as="footer"
			className={twMerge(
				clsx(
					'brk-footer',
					'border-t-3 border-secondary-700 py-4 md:py-4 lg:py-4',
					className
				)
			)}
		>
			<Container className="text-center gap-2 md:gap-2 lg:gap-2">
				<Text
					className="text-sm md:text-base lg:text-base"
					withMarkdown
					as="div"
				>
					{text}
				</Text>
				<Text
					className="text-xs md:text-xs lg:text-xs font-light"
					withMarkdown
					as="div"
				>
					{copyrightText}
				</Text>
			</Container>
		</Section>
	)
}

export default Footer;