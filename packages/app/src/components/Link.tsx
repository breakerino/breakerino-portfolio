// --------------------------------------------------------------------- 
// Components > Link
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React, { HTMLAttributeAnchorTarget } from 'react';
import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Link as LinkType } from '@/app/types';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Icon from '@/components/Icon';
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface LinkProps extends BaseComponentProps, LinkType {
	size?: 'xs' | 'sm' | 'md' | 'lg';
	variant?: 'default' | 'animated';
	showLabel?: boolean;
	target?: HTMLAttributeAnchorTarget;
}

const Link: React.FC<LinkProps> = ({
	className,
	icon,
	text,
	url,
	showLabel = true,
	target = '_self',
	size = 'md',
	variant = 'default'
}) => {
	const sizes: Record<NonNullable<LinkProps['size']>, { wrapper: string, icon: string; text: string }> = {
		xs: { wrapper: 'gap-1.5 p-1.5', icon: 'w-6 h-6', text: 'text-base' },
		sm: { wrapper: 'gap-2 p-2', icon: 'w-8 h-8', text: 'text-lg' },
		md: { wrapper: twMerge(clsx('gap-2.5 px-3 py-2.5', !showLabel && 'p-2.5')), icon: 'w-10 h-10', text: 'text-xl' },
		lg: { wrapper: twMerge(clsx('gap-3 px-4 py-2.5', !showLabel && 'p-2.5')), icon: 'w-12 h-12', text: 'text-2xl' },
	};

	const variants: Record<NonNullable<LinkProps['variant']>, { wrapper: string }> = {
		default: { wrapper: '' },
		animated: { wrapper: 'hover:-translate-y-1 transition-transform duration-300 ease-in-out' }
	}

	const sizeStyles = sizes[size];
	const variantStyles = variants[variant];

	return (
		<NextLink
			href={url}
			target={target}
			className={twMerge(
				clsx(
					'brk-link',
					'w-fit flex items-center border-2 border-secondary-700 rounded-lg hover:bg-secondary-800 active:bg-secondary-900 transition-colors cursor-none',
					sizeStyles.wrapper,
					variantStyles.wrapper,
					className
				)
			)}
		>
			<Icon id={icon} className={sizeStyles.icon} />
			
			{showLabel && (
				<span className={clsx('font-medium leading-[1.5]', sizeStyles.text)}>{text}</span>
			)}
		</NextLink>
	);
};

export default Link;