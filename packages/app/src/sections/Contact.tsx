// --------------------------------------------------------------------- 
// Sections > Contact
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseSectionProps, SocialSiteType } from '@/app/types';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { useAppContext } from '@/contexts/App';
import { SOCIAL_SITES } from '@/app/constants';
import Link from '@/components/Link';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface ContactSectionProps extends BaseSectionProps {
	text: string;
	email: string;
	socials: SocialSiteType[];
}
// --------------------------------------------------------------------- 

const ContactSection: React.FC<ContactSectionProps> = ({ className, text, email, socials }) => {
	const { settings } = useAppContext();

	const socialItems = React.useMemo(() => {
		return settings.personal.socials.filter(social => socials.includes(social.type))
	}, [socials, settings.personal.socials])

	return (
		<Section
			id="contact"
			className={twMerge(
				clsx(
					'brk-section--contact',
					'border-t-3 border-secondary-700',
					className
				)
			)}>
			<Container>
				<div className="flex flex-col items-center gap-8">
					<div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
						<h2 className="text-primary-50 text-3xl md:text-5xl lg:text-6xl font-bold text-center">
							<span>{text}</span>
							<abbr className="text-primary-400" aria-hidden={true}>.</abbr>
						</h2>
						<NextLink
							href={`mailto:${email}`}
							className="text-primary-50 text-xl md:text-3xl lg:text-4xl font-semibold text-center underline decoration-3"
						>
							{email}
						</NextLink>
					</div>
					<div className="flex flex-wrap gap-4 justify-center">
						{socialItems.map(({ type, username }) => (
							<Link
								key={type}
								size="xs"
								showLabel={false}
								icon={SOCIAL_SITES[type].icon}
								text={SOCIAL_SITES[type].label}
								url={`${SOCIAL_SITES[type].baseURL}/${username}`}
							/>
						))}
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default ContactSection;