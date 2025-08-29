// --------------------------------------------------------------------- 
// Modules > MobileMenu > Components > Footer
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import clsx from 'clsx';
import React from 'react';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface FooterProps extends BaseComponentProps {}

const Footer: React.FC<FooterProps> = ({ className, children }) => {
	if ( ! children ) {
		return null;
	}
	
	return (
		<div className={clsx(
			'brk-mobile-menu-footer',
			'w-full flex justify-between items-center gap-4 border-t-3 border-secondary-700',
			className
		)}>
			{children}
		</div>
	)
}

export default Footer;