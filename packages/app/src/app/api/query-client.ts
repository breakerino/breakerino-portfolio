// --------------------------------------------------------------------- 
// Api > Query client
// ---------------------------------------------------------------------

// --------------------------------------------------------------------- 
import { QueryClient } from '@tanstack/react-query';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { DEFAULT_CACHE_TIME, DEFAULT_STALE_TIME } from '@/app/constants';
// --------------------------------------------------------------------- 

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: DEFAULT_STALE_TIME,
			cacheTime: DEFAULT_CACHE_TIME,
		},
	},
});

export default queryClient;