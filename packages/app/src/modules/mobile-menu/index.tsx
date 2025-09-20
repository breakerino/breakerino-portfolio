// --------------------------------------------------------------------- 
// Components > Mobile menu
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react'
import clsx from 'clsx'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, MenuItem , SocialProfile } from '@/app/types'
import { SOCIAL_SITES } from '@/app/constants'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Portal from '@/components/Portal'
import Link from '@/components/Link'
import { LogoProps } from '@/components/Logo'
// --------------------------------------------------------------------- 

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
				className={className}
				onClick={handleToggle}
			/>

			<Portal className="md:hidden">
				<Sidebar isOpened={isOpened}>
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
					isOpened={isOpened}
					onClose={handleClose}
				/>
			</Portal>
		</>
	)
}

export default MobileMenu
