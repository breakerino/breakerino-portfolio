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
		deviceSizes: [540, 640, 750, 828, 960, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		qualities: [25, 50, 75],
		remotePatterns,
	},
};

export default nextConfig;