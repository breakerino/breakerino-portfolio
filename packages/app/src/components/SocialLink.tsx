// --------------------------------------------------------------------- 
// Components > SocialLink
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { SocialProfile } from '@/app/types';
import { SOCIAL_SITES } from '@/app/constants';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Icon from '@/components/Icon';
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface SocialLinkProps extends BaseComponentProps, SocialProfile {
	variant?: 'xs' | 'sm' | 'md' | 'lg';
	showLabel?: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({
	className,
	type,
	username,
	showLabel = true,
	variant = 'md',
}) => {
	const socialSite = React.useMemo(() => SOCIAL_SITES[type], [type]);

	const variants: Record<NonNullable<SocialLinkProps['variant']>, { icon: string; text: string; padding: string; paddingIcon: string; gap: string }> = {
		xs: { icon: 'w-6 h-6', text: 'text-sm', padding: 'p-1', paddingIcon: 'p-1', gap: 'gap-1.5' },
		sm: { icon: 'w-8 h-8', text: 'text-lg', padding: 'p-1.5', paddingIcon: 'p-1.5', gap: 'gap-2' },
		md: { icon: 'w-10 h-10', text: 'text-xl', padding: 'px-3.5 py-2.5', paddingIcon: 'p-2.5', gap: 'gap-2.5' },
		lg: { icon: 'w-12 h-12', text: 'text-2xl', padding: 'px-5.5 py-2.5', paddingIcon: 'p-2.5', gap: 'gap-3' },
	};

	const styles = variants[variant];

	return (
		<Link
			href={`${socialSite.baseURL}/${username}`}
			target="_blank"
			className={twMerge(
				clsx(
					'brk-social-link',
					'w-fit flex items-center border-2 border-secondary-700 rounded-lg hover:bg-secondary-700 active:bg-secondary-800 transition-colors',
					styles.padding,
					styles.gap,
					!showLabel && styles.paddingIcon,
					className
				)
			)}
		>
			<Icon id={socialSite.icon} className={styles.icon} />
			{showLabel && (
				<span className={clsx('font-medium leading-[1.5]', styles.text)}>{socialSite.label}</span>
			)}
		</Link>
	);
};

export default SocialLink;