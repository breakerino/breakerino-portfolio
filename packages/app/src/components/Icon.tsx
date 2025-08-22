// --------------------------------------------------------------------- 
// Components > Icon
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { ICON_SET_URI } from '@/app/constants';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface IconProps {
  id: string;
  size?: number;
  className?: string;
}
// --------------------------------------------------------------------- 

const Icon: React.FC<IconProps> = ({ className, id }) => (
  <svg
    className={twMerge(clsx('brk-icon', 'w-6 h-6', className))}
    aria-label={id}
    role="img"
  >
    <use href={`${ICON_SET_URI}#${id}`} />
  </svg>
);

export default Icon;
