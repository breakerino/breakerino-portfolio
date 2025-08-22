// --------------------------------------------------------------------- 
// Modules > MobileMenu > Components > Wrapper
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface WrapperProps {
	className?: string;
	isOpened: boolean;
	children?: React.ReactNode;
}
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const Wrapper: React.FC<WrapperProps> = ({ className, isOpened, children }) => {	
	return (
		<div className={twMerge(
			clsx(
				'brk-menu brk-mobile-menu',
				'flex flex-col gap-8 justify-between fixed top-0 left-0 w-[90dvw] max-w-[var(--spacing-menu)] h-dvh z-20 overflow-y-auto bg-secondary-950 border-r-3 border-secondary-700 rounded-xl rounded-r-none transition-transform duration-300 ease-in-out -translate-x-full',
				className,
				isOpened && 'translate-x-0'
			)
		)}>
			{children}
		</div>
	)
}

export default Wrapper;