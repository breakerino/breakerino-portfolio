// --------------------------------------------------------------------- 
// Components > MobileMenu
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { MenuItem, SocialProfile } from '@/app/types';
import { LogoProps } from '@/components/Logo';
import SocialLink from '@/components/SocialLink';
import { useMediaQuery } from '@/hooks/useMediaQuery';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Hamburger from './components/Hamburger';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Overlay from './components/Overlay';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface MobileMenuProps {
	className?: string;
	logo: Omit<LogoProps, 'className' | 'href'>;
	menuItems: MenuItem[];
	socialItems?: SocialProfile[];
	ariaLabel?: string;
	breakpoint?: number;
}
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const MobileMenu: React.FC<MobileMenuProps> = ({ className, logo, menuItems, socialItems, breakpoint, ariaLabel: navigationAriaLabel }) => {
	const [isOpened, setIsOpened] = React.useState<boolean>(false);
	const [isMobile] = useMediaQuery(`(max-width: ${breakpoint ? `${breakpoint}px` : '767px'})`)

	const handleToggle = () => setIsOpened(state => !state);
	const handleClose = () => setIsOpened(false);

	React.useEffect(() => {
		if (!isMobile) {
			handleClose();
		}

		return () => handleClose();
	}, [isMobile])

	return (
		<>
			<Hamburger className={className} onClick={handleToggle} />

			<Sidebar isOpened={isOpened}>
				<Header className="pl-10 pr-5 py-5" logo={logo} onClose={handleClose} />
				<Navigation className="px-10 py-8 flex-1" items={menuItems} ariaLabel={navigationAriaLabel} onClose={handleClose} />
				<Footer className="pl-10 pr-8 py-5">
					{socialItems && (
						<div className={clsx(
							'brk-mobile-menu-socials',
							'w-full flex flex-wrap gap-2'
						)}>
							{socialItems.map((item) => <SocialLink key={item.id} variant="xs" showLabel={false} {...item} />)}
						</div>
					)}
				</Footer>
			</Sidebar>

			<Overlay isOpened={isOpened} onClose={handleClose} />
		</>
	)
}

export default MobileMenu;