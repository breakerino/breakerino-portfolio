// --------------------------------------------------------------------- 
// Modules > MobileMenu > Components > Hamburger
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Icon from '@/components/Icon';
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface HamburgerProps extends BaseComponentProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Hamburger: React.FC<HamburgerProps> = ({ className, onClick: handleClick }) => {
	return (
		<>
			<button className={twMerge(clsx('brk-mobile-menu-hamburger',
				'p-1 w-10 h-10 border-2 border-secondary-700 rounded-sm flex items-center justify-center hover:bg-secondary-800 active:bg-secondary-900 transition-colors cursor-none',
				className))}
				onClick={handleClick}	
			>
				<Icon id="hamburger" className="h-6" />
			</button>
		</>
	)
}

export default Hamburger;