// --------------------------------------------------------------------- 
// Components > MobileMenu
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { MenuItem } from '@/app/types';
import { LogoProps } from '@/components/Logo';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Hamburger from './components/Hamburger';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Overlay from './components/Overlay';
import { useMediaQuery } from '@/hooks/useMediaQuery';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface MobileMenuProps {
	className?: string;
	logo: Omit<LogoProps, 'className' | 'href'>;
	items: MenuItem[];
	ariaLabel?: string;
	breakpoint?: number;
}
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const MobileMenu: React.FC<MobileMenuProps> = ({ className, logo, items, breakpoint, ariaLabel: navigationAriaLabel }) => {
	const [isOpened, setIsOpened] = React.useState<boolean>(false);
	const [isMobile] = useMediaQuery(`(max-width: ${breakpoint ?? '767px'})`)

	const handleToggle = () => setIsOpened(state => !state);
	const handleClose = () => setIsOpened(false);
	
	React.useEffect(() => {
		if ( ! isMobile ) {
			handleClose();
		}
		
		return () => handleClose();
	}, [isMobile])

	return (
		<>
			<Hamburger className={className} onClick={handleToggle} />

			<Sidebar isOpened={isOpened}>
				<Header logo={logo} onClose={handleClose} />
				<Navigation items={items} ariaLabel={navigationAriaLabel} onClose={handleClose} />
				<Footer />
			</Sidebar>

			<Overlay isOpened={isOpened} onClose={handleClose} />
		</>
	)
}

export default MobileMenu;