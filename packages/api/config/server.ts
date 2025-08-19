// --------------------------------------------------------------------- 
// Config > Server
// --------------------------------------------------------------------- 

export default ({ env }) => {
	const API_SERVER_PROTOCOL = env('API_SERVER_PROTOCOL', null)
	const API_SERVER_NAME = env('API_SERVER_NAME', null)
	
	const url = API_SERVER_PROTOCOL && API_SERVER_NAME ? `${API_SERVER_PROTOCOL}://${API_SERVER_NAME}` : undefined;
	
	return {
		host: env('API_HOST', '0.0.0.0'),
		port: env.int('API_PORT', 1337),
		proxy: !!url,
		url,
		app: {
			keys: env.array('API_APP_KEYS'),
		},
		logger: {
			updates: {
				enabled: env.bool('API_LOGGER_UPDATES_ENABLED', false)
			}
		}
	}
};