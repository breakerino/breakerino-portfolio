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
import SocialLink from '@/components/SocialLink'
import { SocialProfile } from '@/app/types'
import { useMediaQuery } from '@/hooks/useMediaQuery'
// --------------------------------------------------------------------- 

import Hamburger from './components/Hamburger'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Overlay from './components/Overlay'
// --------------------------------------------------------------------- 

export interface MobileMenuProps extends BaseComponentProps {
	logo: Omit<LogoProps, 'className' | 'href'>
	menuItems: MenuItem[]
	socialItems?: SocialProfile[]
	ariaLabel?: string
}

const MobileMenu: React.FC<MobileMenuProps> = ({
	className,
	logo,
	menuItems,
	socialItems,
	ariaLabel: navigationAriaLabel,
}) => {
	const [isOpened, setIsOpened] = React.useState<boolean>(false)
	const [isMobile] = useMediaQuery('(max-width: 47.9375rem)')

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

			<Sidebar className="md:hidden" isOpened={isOpened} >
				<Header className="pl-10 pr-5 py-5" logo={logo} onClose={handleClose} />
				<Navigation
					className="px-10 py-8 flex-1"
					items={menuItems}
					ariaLabel={navigationAriaLabel}
					onClose={handleClose}
				/>
				<Footer className="pl-10 pr-8 py-5" >
					{socialItems && (
						<div className={clsx('brk-mobile-menu-socials w-full flex flex-wrap gap-2')}>
							{
								socialItems.map(item => (
									<SocialLink key={item.type} variant="xs" showLabel={false} {...item} />
								))
							}
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
