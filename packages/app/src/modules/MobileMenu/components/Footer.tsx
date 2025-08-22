// --------------------------------------------------------------------- 
// Modules > MobileMenu > Components > Footer
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import clsx from 'clsx';
import React from 'react';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface FooterProps {
	className?: string;
	children?: React.ReactNode;
}
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const Footer: React.FC<FooterProps> = ({ className, children }) => {
	return (
		<div className={clsx(
			'brk-mobile-menu-footer',
			'w-full flex justify-between items-center gap-4 px-10 py-5 border-t-3 border-secondary-700',
			className
		)}>
			{children}
		</div>
	)
}

export default Footer;