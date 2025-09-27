// --------------------------------------------------------------------- 
// Components > Head
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import NextHead from 'next/head';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { useAppContext } from '@/contexts/App';
import { BaseComponentProps } from '@/app/types';
import { APP_BASE_URL } from '@/app/constants';
import { getStaticAssetURL } from '@/app/functions';
// --------------------------------------------------------------------- 

export interface HeadProps extends BaseComponentProps { }

const Head: React.FC<HeadProps> = ({ children }) => {
	const { settings } = useAppContext();

	return (
		<NextHead>
			<title>{settings.site.meta.title}</title>
			<meta name="description" content={settings.site.meta.description} />
			<meta name="keywords" content={settings.site.meta.keywords} />

			<meta property="og:title" content={settings.site.meta.title} />
			<meta property="og:description" content={settings.site.meta.description} />
			<meta property="og:image" content={getStaticAssetURL(settings.site.meta.image.url)} />
			<meta property="og:url" content={APP_BASE_URL} />
			<meta property="og:type" content="website" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={settings.site.meta.title} />
			<meta name="twitter:description" content={settings.site.meta.description} />
			<meta name="twitter:image" content={getStaticAssetURL(settings.site.meta.image.url)} />

			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<link rel="icon" href="/favicon.ico" />
			<meta name="apple-mobile-web-app-title" content="Breakerino.me" />

			{children}
		</NextHead>
	);
}

export default Head;