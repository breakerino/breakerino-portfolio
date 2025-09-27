// ---------------------------------------------------------------------
// Storybook > Decorators > Root
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import ReactLenis from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';
import { isIosSafari, isSafari } from '@braintree/browser-detection';
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import PortalRoot from '@/components/PortalRoot';
import Cursor from '@/components/Cursor';
import { AppContextProvider } from '@/contexts/App';
import Icons from '@/components/Icons';
import queryClient from '@/app/api/query-client';
import { queries } from '@/storybook/data';
// ---------------------------------------------------------------------

const RootDecorator: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	const lenisRef = React.useRef<LenisRef>(null)
	const [hasPrefetchedQueries, setHasPrefetchedQueries] = React.useState(false);

	React.useEffect(() => {
		const prefetchQueries = async () => {
			await Promise.all(
				queries.map(({ queryKey, data }) =>
					queryClient.prefetchQuery({
						queryKey,
						queryFn: async () => data
					})
				)
			);

			setHasPrefetchedQueries(true);
		};

		prefetchQueries();
	}, []);

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

	if (!hasPrefetchedQueries) {
		return null;
	}

	return (
		<>
			<ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
			<Cursor className="bg-primary-400 shadow-primary-400" size={20} trailLength={24} trailScale={0.85} />
			<Icons shouldLoad={isSafariBrowser} />
			<QueryClientProvider client={queryClient}>
				<AppContextProvider>{children}</AppContextProvider>
			</QueryClientProvider>
			<PortalRoot />
		</>
	);
};

export default RootDecorator;