// --------------------------------------------------------------------- 
// Api > Config
// --------------------------------------------------------------------- 

const config = {
	baseURL: typeof window !== 'undefined'
		? process.env.API_PUBLIC_BASE_URL
		: process.env.API_INTERNAL_BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
}

export default config;