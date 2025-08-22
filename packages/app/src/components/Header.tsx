// --------------------------------------------------------------------- 
// Containers > Header
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { MenuItem, SocialProfile } from '@/app/types';
import Container from '@/components/Container';
import Logo, { LogoProps } from '@/components/Logo';
import DesktopMenu from '@/modules/DesktopMenu';
import MobileMenu from '@/modules/MobileMenu';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface HeaderProps {
	className?: string;
	logo: Omit<LogoProps, 'className' | 'href'>
	menuItems: MenuItem[];
	socialItems?: SocialProfile[];
};
// --------------------------------------------------------------------- 

const Header: React.FC<HeaderProps> = ({ className, logo, menuItems, socialItems }) => {
	return (
		<header className={twMerge(clsx('brk-header', 'w-full py-4 md:py-6 lg:py-8 xl:py-12', className))}>
			<Container className="@container/header flex items-center justify-between gap-8">
				<Logo
					{...logo}
					className={clsx('brk-header-logo', 'md:h-7 lg:h-8')}
				/>

				<DesktopMenu className="hidden md:flex" menuItems={menuItems} />
				<MobileMenu className="md:hidden" logo={logo} menuItems={menuItems} socialItems={socialItems} breakpoint={767} />
			</Container>
		</header>
	)
}

export default Header;