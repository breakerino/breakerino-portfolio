// --------------------------------------------------------------------- 
// Api > Config
// --------------------------------------------------------------------- 

const config = {
	baseURL: typeof window !== 'undefined'
		? process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL
		: process.env.API_INTERNAL_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${process.env.API_TOKEN}`
	}
}

export default config;