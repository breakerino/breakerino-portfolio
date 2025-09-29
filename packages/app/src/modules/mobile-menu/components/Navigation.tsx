// --------------------------------------------------------------------- 
// Modules > Mobile menu > Components > Navigation
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { MenuItem, BaseComponentProps } from '@/app/types';
import { useAppContext } from '@/contexts/App';
// --------------------------------------------------------------------- 

export interface NavigationProps extends BaseComponentProps {
	items: MenuItem[];
	activeItemID?: string | null;
	ariaLabel?: string;
	onClose: React.MouseEventHandler<HTMLElement>;
}

const Navigation: React.FC<NavigationProps> = ({ className, items, activeItemID, ariaLabel, onClose: handleClose }) => {
	const { actions } = useAppContext();
	
	const handleNavigation = () => {
		actions.setIsNavigating(true);
		
		setTimeout(() => {
			actions.setIsNavigating(false);
		}, 1000)
	}
	
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
						'w-fit relative'
					)}
						key={id}
						onClick={handleClose}
					>
						<Link
							href={href}
							className={clsx(
								'brk-mobile-menu-list-item__link',
								'font-semibold text-3xl @sm:text-4xl no-underline transition-colors',
								className
							)}
							onClick={handleNavigation}
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

						<div
							className={clsx(
								'brk-mobile-menu-list-item__indicator',
								'absolute -bottom-1.5 bg-primary-400 rounded-sm',
								'transition-all duration-300 ease-in-out',
								'left-0 w-0 h-1',
								id === activeItemID && 'w-full'
							)}
						/>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation;