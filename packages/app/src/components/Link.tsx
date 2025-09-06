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
}) => {
	const sizes: Record<NonNullable<LinkProps['size']>, { wrapper: string, icon: string; text: string }> = {
		xs: { icon: 'w-6 h-6', text: 'text-base', wrapper: 'gap-1.5 p-1.5' },
		sm: { icon: 'w-8 h-8', text: 'text-lg', wrapper: 'gap-2 p-2' },
		md: { icon: 'w-10 h-10', text: 'text-xl', wrapper: twMerge(clsx('gap-2.5 px-3 py-2.5', !showLabel && 'p-2.5')) },
		lg: { icon: 'w-12 h-12', text: 'text-2xl', wrapper: twMerge(clsx('gap-3 px-4 py-2.5', !showLabel && 'p-2.5')) },
	};

	const sizeStyles = sizes[size];

	return (
		<NextLink
			href={url}
			target={target}
			className={twMerge(
				clsx(
					'brk-link',
					'w-fit flex items-center border-2 border-secondary-700 rounded-lg hover:bg-secondary-800 active:bg-secondary-900 transition-colors',
					sizeStyles.wrapper,
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