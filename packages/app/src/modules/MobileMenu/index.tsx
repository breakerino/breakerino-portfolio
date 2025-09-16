// --------------------------------------------------------------------- 
// Components > Mobile menu
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
// --------------------------------------------------------------------- 

import { BaseComponentProps, MenuItem } from '@/app/types'
import { LogoProps } from '@/components/Logo'
import Link from '@/components/Link'
import { SocialProfile } from '@/app/types'
import { useMediaQuery } from '@/hooks/useMediaQuery'
// --------------------------------------------------------------------- 

import Hamburger from './components/Hamburger'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Overlay from './components/Overlay'
import { SOCIAL_SITES } from '@/app/constants'
// --------------------------------------------------------------------- 

export interface MobileMenuProps extends BaseComponentProps {
	logo: Omit<LogoProps, 'className' | 'href'>
	menuItems: MenuItem[]
	socialItems?: SocialProfile[]
	activeMenuItemID?: string | null;
	ariaLabel?: string
}

const MobileMenu: React.FC<MobileMenuProps> = ({
	className,
	logo,
	menuItems,
	activeMenuItemID,
	socialItems,
	ariaLabel: navigationAriaLabel,
}) => {
	const [isOpened, setIsOpened] = React.useState<boolean>(false)
	const [isMobile] = useMediaQuery('(max-width: 48rem)');

	const handleToggle = () => setIsOpened(state => !state);
	const handleClose = () => setIsOpened(false);

	React.useEffect(() => {
		if (!isMobile) {
			handleClose();
		}

		return () => handleClose();
	}, [isMobile])

	return (
		<>
			<Hamburger
				className={twMerge(
					className,
					'md:hidden'
				)}
				onClick={handleToggle}
			/>

			<Sidebar className="md:hidden" isOpened={isOpened}>
				<Header className="pl-10 pr-5 py-5" logo={logo} onClose={handleClose} />
				<Navigation
					className="px-10 py-8 flex-1"
					items={menuItems}
					activeItemID={activeMenuItemID}
					ariaLabel={navigationAriaLabel}
					onClose={handleClose}
				/>
				<Footer className="pl-10 pr-8 py-5" >
					{socialItems && (
						<div className={clsx(
							'brk-mobile-menu-socials',
							'w-full flex flex-wrap gap-2'
						)}>
							{socialItems.map(({ type, username }) => (
								<Link
									key={type}
									size="xs"
									showLabel={false}
									icon={SOCIAL_SITES[type].icon}
									text={SOCIAL_SITES[type].label}
									url={`${SOCIAL_SITES[type].baseURL}/${username}`}
								/>
							))}
						</div>
					)}
				</Footer>
			</Sidebar>

			<Overlay
				className="md:hidden"
				isOpened={isOpened}
				onClose={handleClose}
			/>
		</>
	)
}

export default MobileMenu
