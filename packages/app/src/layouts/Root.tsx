// --------------------------------------------------------------------- 
// Layouts > Root
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import ReactLenis from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';
import { Inter } from 'next/font/google';
import { isSafari, isIosSafari } from '@braintree/browser-detection'; 
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Head from '@/components/Head';
import SkipLink from '@/components/SkipLink';
import PortalRoot from '@/components/PortalRoot';
import Cursor from '@/components/Cursor';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Icons from '@/components/Icons';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const interFont = Inter({ variable: '--font-inter', subsets: ['cyrillic'], display: 'swap' });
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface RootLayoutProps {
	children?: React.ReactNode;
}
// --------------------------------------------------------------------- 

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	const lenisRef = React.useRef<LenisRef>(null)

	React.useEffect(() => {
		function update(data: { timestamp: number }) {
			const time = data.timestamp
			lenisRef.current?.lenis?.raf(time)
		}

		frame.update(update, true)

		return () => cancelFrame(update)
	}, [])
	
	const isSafariBrowser = React.useMemo(() => {
		return typeof window !== 'undefined' && (isSafari() || isIosSafari());
	}, []);

	return (
		<html lang="en" className={`${interFont.variable}`}>
			<Head />
			<body className="bg-secondary-950 text-primary-50">
				<ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
				<Cursor className="bg-primary-400 shadow-primary-400" size={20} trailLength={24} trailScale={0.85} />
				<Icons shouldLoad={isSafariBrowser} />
				<GoogleAnalytics />
				<SkipLink />
				{children}
				<PortalRoot />
			</body>
		</html>
	)
}

export default RootLayout;