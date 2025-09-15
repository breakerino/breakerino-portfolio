// --------------------------------------------------------------------- 
// Containers > Header
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import clsx from 'clsx';
import { pick } from 'lodash';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { NavigationItem, SocialSiteType, Image } from '@/app/types';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { MenuItem, BaseSectionProps } from '@/app/types';
import { getStaticAssetURL } from '@/app/functions';
import { useAppContext } from '@/contexts/App';
import DesktopMenu from '@/modules/DesktopMenu';
import MobileMenu from '@/modules/MobileMenu';
import Container from '@/components/Container';
import Logo, { LogoProps } from '@/components/Logo';
import Section from '@/components/Section';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface HeaderProps extends Pick<BaseSectionProps, 'className'> {
	data: {
		logo: Image;
		navigation: NavigationItem[]
		socials: SocialSiteType[];
	}
};
// --------------------------------------------------------------------- 

const Header: React.FC<HeaderProps> = ({ className, data: { logo: logoImage, navigation, socials } }) => {
	const { settings } = useAppContext();

	const logo: LogoProps = React.useMemo(() => ({
		...pick(logoImage, ['width', 'height']),
		src: getStaticAssetURL(logoImage.url),
		alt: logoImage.alternativeText ?? 'Logo',
		priority: true
	}), [logoImage]);

	const menuItems: MenuItem[] = React.useMemo(() => (
		navigation.map(({ label, slug }) => ({ label, id: slug, href: `#${slug}` }))
	), [navigation]);

	const socialItems = React.useMemo(() => {
		return settings.personal.socials.filter(social => socials.includes(social.type))
	}, [socials, settings.personal.socials])

	return (
		<Section
			id="header"
			as="header"
			className={twMerge(
				clsx(
					'brk-header',
					'@container/header w-full py-4 sm:py-4 md:py-8 lg:py-9',
					className)
			)}
		>
			<Container className="flex flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10">
				<Logo
					{...logo}
					className={clsx('brk-header-logo', 'md:h-7 lg:h-8')}
				/>
				<DesktopMenu className="hidden md:flex" menuItems={menuItems} />
				<MobileMenu {...{ logo, menuItems, socialItems }} />
			</Container>
		</Section>
	)
}

export default Header;