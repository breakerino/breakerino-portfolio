// --------------------------------------------------------------------- 
// Components > Logo
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React, { HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface LogoProps extends BaseComponentProps {
	href?: string;
	target?: HTMLAttributeAnchorTarget;
	src: string;
	width: number;
	height: number;
	alt?: string
	priority?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, href, target = '_self', src, alt, width, height, priority = false }) => {
	return (
		<Link
			className={twMerge(
				clsx(
					'brk-logo',
					'block h-6 no-underline',
					className
				)
			)}
			href={href ?? '#'}
			target={target}
		>
			<Image
				className={clsx(
					'brk-logo__image',
					'w-full h-full object-contain object-left'
				)}
				alt={alt ?? 'Logo'}
				{...{src, width, height, priority}}
			/>
		</Link>
	)
}

export default Logo;