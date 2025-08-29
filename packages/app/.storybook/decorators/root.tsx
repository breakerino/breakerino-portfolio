// ---------------------------------------------------------------------
// Storybook > Decorators > RootDecorator
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import { AppContextProvider } from '@/contexts/App';
import queryClient from '@/app/api/client';
import { queries } from '@/storybook/data';
// ---------------------------------------------------------------------

const RootDecorator: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
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

	if (!hasPrefetchedQueries) {
		return null;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<AppContextProvider>{children}</AppContextProvider>
		</QueryClientProvider>
	);
};

export default RootDecorator;
