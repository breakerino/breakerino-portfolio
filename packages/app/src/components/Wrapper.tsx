// --------------------------------------------------------------------- 
// Components > Wrapper
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface WrapperProps extends BaseComponentProps {}

const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
	return (
		<div
			className={twMerge(clsx('brk-wrapper', '@container/wrapper flex flex-col bg-secondary-950 text-primary-50', className))}>
			{children}
		</div>
	);
};

export default Wrapper;