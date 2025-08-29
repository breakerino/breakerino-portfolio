// --------------------------------------------------------------------- 
// Components > Container
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface ContainerProps extends BaseComponentProps {}
// --------------------------------------------------------------------- 

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div className={twMerge(
			clsx(
				'brk-container',
				'@container/container w-full max-w-container flex flex-col gap-8 md:gap-12 lg:gap-18 px-6 md:px-8 lg:px-12 m-auto',
				className
			)
		)}>
			{children}
		</div>
	);
};

export default Container;