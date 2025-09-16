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
import { useAppContext } from '@/contexts/App';
// ---------------------------------------------------------------------

export interface DesktopMenuProps extends BaseComponentProps {
	menuItems: MenuItem[];
	activeMenuItemID?: string | null;
	ariaLabel?: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuItems, activeMenuItemID, className, ariaLabel }) => {
	const { actions } = useAppContext();
	
	const activeItemRef = React.useRef<HTMLLIElement>(null);

	React.useEffect(() => {
		if (!(activeItemRef.current instanceof HTMLLIElement)) {
			document.documentElement.style.setProperty('--brk-menu-indicator-width', '0px');
			document.documentElement.style.setProperty('--brk-menu-indicator-offset-x', '0px');
			return () => void 1;
		}

		const activeItemRect = activeItemRef.current.getBoundingClientRect();

		document.documentElement.style.setProperty('--brk-menu-indicator-width', `${activeItemRect.width}px`);
		document.documentElement.style.setProperty('--brk-menu-indicator-offset-x', `${activeItemRef.current.offsetLeft}px`);
		return () => void 1;
	}, [activeMenuItemID]);
	
	const handleNavigation = () => {
		actions.setIsNavigating(true);
		
		setTimeout(() => {
			actions.setIsNavigating(false);
		}, 1000)
	}
	
	const handleMouseOver: React.MouseEventHandler<HTMLAnchorElement> = ({target}) => {
		const element = target as HTMLAnchorElement;
		const activeItemRect = element.getBoundingClientRect();

		document.documentElement.style.setProperty('--brk-menu-indicator-width', `${activeItemRect.width}px`);
		document.documentElement.style.setProperty('--brk-menu-indicator-offset-x', `${element.offsetLeft}px`);
	} 
	
	const handleMouseLeave: React.MouseEventHandler<HTMLUListElement> = () => {
		document.documentElement.style.setProperty('--brk-menu-indicator-width', '0px');
		document.documentElement.style.setProperty('--brk-menu-indicator-offset-x', '0px');
	}

	return (
		<nav
			className={twMerge(
				clsx(
					'brk-menu brk-desktop-menu',
					'relative flex items-center',
					className)
			)}
			aria-label={ariaLabel ?? 'Desktop navigation'}
		>
			<ul className="brk-menu-list flex items-center gap-8" onMouseLeave={handleMouseLeave}>
				{menuItems.map(({ id, href, label, className }) => (
					<li className="brk-menu-list__item" key={id} ref={id === activeMenuItemID ? activeItemRef : null}>
						<Link
							href={href}
							className={clsx(
								'brk-menu-list__link text-lg lg:text-xl no-underline transition-colors',
								className
							)}
							onClick={handleNavigation}
							onMouseOver={handleMouseOver}
						>
							{label}
						</Link>
					</li>
				))}
			</ul>

			<div
				className={clsx(
					'brk-menu-item-indicator',
					'absolute -bottom-1.5 bg-primary-400 rounded-sm',
					'transition-all duration-300 ease-in-out',
					'left-[var(--brk-menu-indicator-offset-x)]',
					'w-[var(--brk-menu-indicator-width)] h-1'
				)}
			/>
		</nav>
	);
};

export default DesktopMenu;