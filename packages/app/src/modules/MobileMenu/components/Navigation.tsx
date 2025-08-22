// --------------------------------------------------------------------- 
// Modules > MobileMenu > Components > Navigation
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { MenuItem } from '@/app/types';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface NavigationProps {
	className?: string;
	items: MenuItem[];
	ariaLabel?: string;
	onClose: React.MouseEventHandler<HTMLElement>;
}
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const Navigation: React.FC<NavigationProps> = ({ className, items, ariaLabel, onClose: handleClose }) => {
	return (
		<nav
			className={twMerge(
				clsx(
					'brk-mobile-menu-navigation',
					'flex flex-col overflow-y-auto',
					className
				)
			)}
			aria-label={ariaLabel ?? 'Mobile navigation'}
		>
			<ul className="brk-mobile-menu-list flex flex-col gap-8">
				{items.map(({ id, href, label, className }) => (
					<li className={clsx(
						'brk-mobile-menu-list-item',
						'w-fit'
					)}
						key={id}
						onClick={handleClose}
					>
						<Link
							href={href}
							className={clsx(
								'brk-mobile-menu-list-item__link',
								'font-semibold text-3xl @sm:text-4xl no-underline hover:underline active:underline transition-colors',
								className
							)}
						>
							<span className={clsx(
								'brk-menu-list-item__text',
								'text-primary-50'
							)}>{label}</span>
							<span className={clsx(
								'brk-menu-list-item__dot',
								'text-primary-400'
							)}>.</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation;