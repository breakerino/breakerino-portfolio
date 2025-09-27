// --------------------------------------------------------------------- 
// Components > Logo
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React, { HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface LogoProps extends BaseComponentProps {
	href?: string;
	target?: HTMLAttributeAnchorTarget;
	src: string;
	width?: number | null;
	height?: number | null;
	alt?: string
	priority?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, href, target = '_self', src, alt, width, height, priority = false }) => {
	return (
		<Link
			className={twMerge(
				clsx(
					'brk-logo',
					'block h-6 no-underline cursor-none',
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
				draggable={false}
				{...{
					src,
					width: width ?? undefined,
					height: height ?? undefined,
					priority
				}}
			/>
		</Link>
	)
}

export default Logo;