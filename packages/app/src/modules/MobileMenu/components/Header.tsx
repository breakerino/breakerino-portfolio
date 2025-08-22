// --------------------------------------------------------------------- 
// Modules > MobileMenu > Components > Header
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import clsx from 'clsx';
import React from 'react';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Icon from '@/components/Icon';
import Logo, { LogoProps } from '@/components/Logo';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface MobileMenuProps {
	className?: string;
	logo: Omit<LogoProps, 'className' | 'href'>;
	onClose?: React.MouseEventHandler<HTMLButtonElement>;
}
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const Header: React.FC<MobileMenuProps> = ({ className, logo, onClose: handleClose }) => {
	return (
		<div className={clsx(
			'brk-mobile-menu-header',
			'w-full flex justify-between items-center gap-4 px-10 py-5 border-b-3 border-secondary-700',
			className
		)}>
			<Logo {...logo} className="brk-mobile-menu-logo h-5" />
			<button className="brk-mobile-menu-close flex cursor-pointer rounded-sm hover:bg-secondary-700 active:bg-secondary-800 transition-colors" onClick={handleClose}>
				<Icon id="cross" className="w-8 h-8" />
			</button>
		</div>
	)
}

export default Header;