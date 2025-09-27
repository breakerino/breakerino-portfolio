// --------------------------------------------------------------------- 
// Components > Skip link
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface PortalRootProps extends Omit<BaseComponentProps, 'children'> {}

const PortalRoot: React.FC<PortalRootProps> = ({ className }) => {
	return (
		<div
			className={twMerge(
				clsx(
					'brk-portal-root',
					className
				)
			)}
		/>
	)
}

export default PortalRoot;