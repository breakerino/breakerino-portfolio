// --------------------------------------------------------------------- 
// Components > Wrapper
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface WrapperProps {
	children?: React.ReactNode;
	className?: string;
}
// --------------------------------------------------------------------- 

const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
	return (
		<div
			className={twMerge(clsx('brk-wrapper', '@container/wrapper flex flex-col bg-secondary-950 text-primary-50', className))}>
			{children}
		</div>
	);
};

export default Wrapper;