// --------------------------------------------------------------------- 
// Api > Endpoints
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { EndpointsArgs } from './types';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export type EndpointName = 'getSiteSettings' | 'getPersonalSettings' | 'getLayoutSettings' | 'getSection' | 'getSections';
// --------------------------------------------------------------------- 

const endpoints: Record<EndpointName, EndpointsArgs> = {
	getSiteSettings: {
		url: '/settings/site',
		method: 'GET'
	},
	getPersonalSettings: {
		url: '/settings/personal',
		method: 'GET'
	},
	getLayoutSettings: {
		url: '/settings/layout',
		method: 'GET'
	},
	getSection: {
		url: '/sections/:id',
		method: 'GET'
	},
	getSections: {
		url: '/sections',
		method: 'GET'
	},
};

export default endpoints;