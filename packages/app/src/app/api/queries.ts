// --------------------------------------------------------------------- 
// Api > Queries
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { createApiClient } from '.';
// --------------------------------------------------------------------- 

const api = createApiClient();

const queries = [
	{ queryKey: ['settings', 'site'], queryFn: () => api.getSiteSettings() },
	{ queryKey: ['settings', 'personal'], queryFn: () => api.getPersonalSettings() },
	{ queryKey: ['sections', 'header'], queryFn: () => api.getSection({ urlParams: { id: 'header' } }) },
	{ queryKey: ['sections'], queryFn: () => api.getSections() },
	{ queryKey: ['sections', 'footer'], queryFn: () => api.getSection({ urlParams: { id: 'footer' } }) },
];

export default queries;