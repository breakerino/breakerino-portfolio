// ---------------------------------------------------------------------
// Modules > Desktop menu
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import { BaseComponentProps, MenuItem } from '@/app/types';
// ---------------------------------------------------------------------

export interface DesktopMenuProps extends BaseComponentProps {
	menuItems: MenuItem[];
	ariaLabel?: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuItems, className, ariaLabel }) => {
	return (
		<nav
			className={twMerge(
				clsx(
					'brk-menu brk-desktop-menu',
					'flex items-center',
					className)
			)}
			aria-label={ariaLabel ?? 'Desktop navigation'}
		>
			<ul className="brk-menu-list flex items-center gap-8">
				{menuItems.map(({ id, href, label, className }) => (
					<li className="brk-menu-list__item" key={id}>
						<Link
							href={href}
							className={clsx(
								'brk-menu-list__link text-lg lg:text-xl no-underline hover:underline transition-colors',
								className
							)}
						>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default DesktopMenu;