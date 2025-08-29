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

export default function Portal({ className, children }: PortalProps) {
	if (typeof document === 'undefined') {
		return null;
	}
	
	return createPortal(
		<div className={clsx('brk-portal', className)}>{children}</div>,
		document.body
	);
}