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
export interface PortalProps {
	className?: string;
	children?: React.ReactNode;
};
// --------------------------------------------------------------------- 

export default function Portal({ className, children }: PortalProps) {
	if (typeof document === 'undefined') {
		return null;
	}
	
	return createPortal(
		<div className={clsx('brk-portal', className)}>{children}</div>,
		document.body
	);
}