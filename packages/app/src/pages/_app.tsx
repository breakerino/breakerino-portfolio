// --------------------------------------------------------------------- 
// Pages > App
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { MotionConfig } from 'framer-motion'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import RootLayout from '@/layouts/Root';
import { AppContextProvider } from '@/contexts/App';
import queryClient from '@/app/api/query-client';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
// Stylesheets
// --------------------------------------------------------------------- 
import '@/assets/css/tailwind.css';
import '@/assets/scss/index.scss';
import '@splidejs/react-splide/css/core';
// --------------------------------------------------------------------- 

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
	const isErrorPage = router.pathname === '/404' || router.pathname === '/_error';

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				{isErrorPage
					? (
						<Component {...pageProps} />
					)
					: (
						<AppContextProvider>
							<MotionConfig reducedMotion="user" transition={{ type: 'spring' }}>
								<RootLayout>
									<Component {...pageProps} />
								</RootLayout>
							</MotionConfig>
						</AppContextProvider>
					)}
			</Hydrate>
		</QueryClientProvider>
	);
};

export default App;