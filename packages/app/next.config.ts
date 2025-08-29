// --------------------------------------------------------------------- 
import type { NextConfig } from 'next';
// --------------------------------------------------------------------- 

const remoteURLs = [
	process.env?.NEXT_PUBLIC_STATIC_BASE_URL,
].filter(Boolean) as string[];

const remotePatterns = remoteURLs.map((url) => {
	const parsedURL = new URL(url);
	
	return {
		protocol: parsedURL.protocol.replace(':', '') as 'http' | 'https',
		hostname: parsedURL.hostname,
		...(parsedURL.port ? { port: parsedURL.port } : {}),
		pathname: '/**',
	};
});

const nextConfig: NextConfig = {
	output: 'standalone',
	devIndicators: false,
	basePath: '',
	assetPrefix: '',
	images: {
		remotePatterns,
	},
};

export default nextConfig;