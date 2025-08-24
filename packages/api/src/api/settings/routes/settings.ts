// ---------------------------------------------------------------------
// Api > Settings > Routes > Settings
// ---------------------------------------------------------------------

export default {
	routes: [
		{
			method: 'GET',
			path: '/settings/site',
			handler: 'settings.getSiteSettings',
		},
		{
			method: 'GET',
			path: '/settings/personal',
			handler: 'settings.getPersonalSettings',
		},
		{
			method: 'GET',
			path: '/settings/layout',
			handler: 'settings.getLayoutSettings',
		}
	],
};