// --------------------------------------------------------------------- 
// Modules > MobileMenu > Components > Sidebar
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface SidebarProps extends BaseComponentProps {
	isOpened: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ className, isOpened, children }) => {	
	return (
		<aside className={twMerge(
			clsx(
				'brk-menu brk-mobile-menu',
				'@container/sidebar flex flex-col justify-between fixed top-0 left-0 z-100 w-[90dvw] max-w-[var(--spacing-menu)] h-dvh  bg-secondary-950 border-r-3 border-secondary-700 rounded-xl rounded-r-none transition-transform duration-300 ease-in-out -translate-x-full',
				className,
				isOpened && 'translate-x-0'
			)
		)}>
			{children}
		</aside>
	)
}

export default Sidebar;