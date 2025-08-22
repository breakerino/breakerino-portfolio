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
}
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const Navigation: React.FC<NavigationProps> = ({ className, items, ariaLabel }) => {
	return (
		<nav
			className={twMerge(
				clsx(
					'brk-mobile-menu-navigation',
					'flex flex-col justify-center px-10',
					className
				)
			)}
			aria-label={ariaLabel ?? 'Mobile navigation'}
		>
			<ul className="brk-mobile-menu-list flex flex-col gap-8">
				{items.map(({ id, href, label, className }) => (
					<li className="brk-mobile-menu-list__item" key={id}>
						<Link
							href={href}
							className={clsx(
								'brk-menu-list__link font-semibold text-4xl no-underline hover:underline transition-colors',
								className
							)}
						>
							<span className="brk-mobile-menu__item-text text-primary-50">{label}</span><span className="brk-mobile-menu__item-dot text-primary-400">.</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation;