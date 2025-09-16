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
  const [portalRoot, setPortalRoot] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    const root = document.querySelector('.brk-portal-root');
		
    if (root instanceof HTMLElement) {
      setPortalRoot(root);
    }
  }, []);

  if (!portalRoot) {
    return null;
  }

  return createPortal(
    <div className={clsx('brk-portal', className)}>{children}</div>,
    portalRoot
  );
};

export default Portal;
