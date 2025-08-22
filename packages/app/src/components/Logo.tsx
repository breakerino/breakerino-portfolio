// --------------------------------------------------------------------- 
// Components > Logo
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

export interface LogoProps {
	className?: string;
	href?: string;
	src: string;
	width: number;
	height: number;
	alt?: string
}

const Logo: React.FC<LogoProps> = ({ className, href, src, alt, width, height }) => {
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
		>
			<Image
				className={clsx(
					'brk-logo__image',
					'w-full h-full object-contain object-left'
				)}
				src={src}
				alt={alt ?? 'Logo'}
				width={width}
				height={height}
				priority
			/>
		</Link>
	)
}

export default Logo;