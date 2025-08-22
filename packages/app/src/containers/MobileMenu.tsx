// --------------------------------------------------------------------- 
// Components > MobileMenu
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Portal } from 'react-portal';
import { useMediaQuery } from '@uidotdev/usehooks';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Hamburger from '@/components/Hamburger';
import { MenuItem } from '@/app/types';
import Logo from '@/components/Logo';
import { LOGO } from '@/app/constants';
import Icon from '@/components/Icon';
//import Portal from '@/components/Portal';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface MobileMenuProps {
	className?: string;
	menuItems: MenuItem[];
	ariaLabel?: string;
}
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const MobileMenu: React.FC<MobileMenuProps> = ({ className, menuItems: items, ariaLabel }) => {
	const [isOpened, setIsOpened] = React.useState<boolean>(false);

	return (
		<>
			<Hamburger
				className={twMerge(clsx('brk-menu__hamburger', className))}
				onClick={() => setIsOpened((state) => !state)}
			/>

			<div className={twMerge(
				clsx(
					'brk-menu brk-mobile-menu',
					'flex flex-col gap-8 justify-between fixed top-0 left-0 w-[90dvw] max-w-[var(--spacing-menu)] h-dvh z-20 overflow-y-auto bg-secondary-950 border-r-3 border-secondary-700 rounded-xl rounded-r-none transition-transform duration-300 ease-in-out -translate-x-full',
					isOpened && 'translate-x-0'
				)
			)}>
				<div className={clsx(
					'brk-mobile-menu-header',
					'w-full flex justify-between items-center gap-4 px-10 py-5 border-b-3 border-secondary-700'
				)}>
					<Logo {...LOGO} className="brk-mobile-menu-logo h-5" />
					<button className="brk-mobile-menu-close flex cursor-pointer rounded-sm hover:bg-secondary-700 active:bg-secondary-800 transition-colors" onClick={() => setIsOpened(false)}>
						<Icon id="cross" className="w-8 h-8" />
					</button>
				</div>

				<nav
					className={twMerge(
						clsx(
							'brk-mobile-menu-navigation',
							'flex flex-col justify-center px-10'
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

				<div className={clsx(
					'brk-mobile-menu-footer',
					'w-full flex justify-between items-center gap-4 px-10 py-5 border-t-3 border-secondary-700'
				)}>
					<Logo {...LOGO} className="brk-mobile-menu-logo h-5" />
				</div>

			</div>


			<div
				className={twMerge(
					clsx(
						'brk-mobile-menu-overlay',
						'fixed top-0 left-0 w-dvw h-dvh z-10 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity transition-backdrop duration-300 ease-in-out',
						isOpened && 'opacity-100 pointer-events-auto backdrop-blur-md'
					)
				)}
				onClick={() => setIsOpened(false)}
			></div>
		</>
	)
}

export default MobileMenu;