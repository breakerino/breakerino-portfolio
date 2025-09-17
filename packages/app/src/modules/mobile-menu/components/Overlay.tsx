// --------------------------------------------------------------------- 
// Modules > MobileMenu > Components > Overlay
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 


export interface OverlayProps extends BaseComponentProps {
	isOpened?: boolean;
	onClose: React.MouseEventHandler<HTMLDivElement>;
}

const Overlay: React.FC<OverlayProps> = ({ className, isOpened, onClose: handleClose }) => {
	return (
		<div
			className={twMerge(
				clsx(
					'brk-mobile-menu-overlay',
					'fixed top-0 left-0 w-dvw h-dvh z-10 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity transition-backdrop duration-300 ease-in-out',
					className,
					isOpened && 'opacity-100 pointer-events-auto backdrop-blur-md',
					'md:hidden'
				)
			)}
			onClick={handleClose}
		></div>
	)
}

export default Overlay;