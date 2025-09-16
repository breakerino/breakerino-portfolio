// --------------------------------------------------------------------- 
// Components > Portal
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
'use client';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface PortalProps extends BaseComponentProps {}

const Portal: React.FC<PortalProps> = ({ className, children }) => {	
	const portalRoot = React.useMemo(() => {
		return document.querySelector('.brk-portal-root');
	}, []);
	
	if (typeof document === 'undefined' || ! ( portalRoot instanceof HTMLElement )) {
		return null;
	}
	
	return createPortal(
		<div className={clsx('brk-portal', className)}>{children}</div>,
		portalRoot
	);
}

export default Portal;