// --------------------------------------------------------------------- 
// Components > Container
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}
// --------------------------------------------------------------------- 

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div className={twMerge(clsx('brk-container', 'w-full max-w-container px-6 md:px-8 lg:px-12 m-auto', className))}>
			{children}
		</div>
	);
};

export default Container;