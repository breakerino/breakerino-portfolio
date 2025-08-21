// --------------------------------------------------------------------- 
// Components > HamburgerMenu
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Icon from '@/components/Icon';
// --------------------------------------------------------------------- 

export interface HamburgerProps {
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Hamburger: React.FC<HamburgerProps> = ({ className, onClick: handleClick }) => {
	return (
		<>
			<button className={twMerge(clsx('brk-hamburger',
				'p-1 w-10 h-10 border-2 border-secondary-700 rounded-sm flex items-center justify-center cursor-pointer hover:bg-secondary-700 active:bg-secondary-800 transition-colors',
				className))}
				onClick={handleClick}	
			>
				<Icon id="hamburger" className="h-6" />
			</button>
		</>
	)
}

export default Hamburger;