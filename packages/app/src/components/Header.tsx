// --------------------------------------------------------------------- 
// Containers > Header
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Container from '@/components/Container';
import Logo, { LogoProps } from '@/components/Logo';
import DesktopMenu from '@/containers/DesktopMenu';
import MobileMenu from '@/containers/MobileMenu';
import { MenuItem } from '@/app/types';
import { useMediaQuery } from '@uidotdev/usehooks';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface HeaderProps {
	className?: string;
	logo: Omit<LogoProps, 'className' | 'href'>
	menuItems: MenuItem[]
};
// --------------------------------------------------------------------- 

const Header: React.FC<HeaderProps> = ({ className, logo, menuItems: items }) => {
	const isMobile = useMediaQuery('(max-width: 767px)');

	return (
		<header className={twMerge(clsx('brk-header', 'w-full py-4 md:py-6 lg:py-8 xl:py-12', className))}>
			<Container className="@container/header flex items-center justify-between gap-8">
				<Logo
					{...logo}
					className="md:h-7 lg:h-8 n"
				/>

				{!isMobile && <DesktopMenu menuItems={items} />}
				{isMobile && <MobileMenu menuItems={items} />}
			</Container>
		</header>
	)
}

export default Header;