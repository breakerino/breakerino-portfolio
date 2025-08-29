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
// --------------------------------------------------------------------- 

export interface HeadProps extends BaseComponentProps {}

const Head: React.FC<HeadProps> = ({ children }) => {
	const { settings } = useAppContext();
	
	return (
		<NextHead>
			<title>{settings.site.meta.title}</title>
			<meta name="description" content={settings.site.meta.description} />
			<meta name="keywords" content={settings.site.meta.keywords} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="apple-mobile-web-app-title" content="Breakerino.me" />
			<link rel="icon" href="/favicon.ico" />
			{children}
		</NextHead>
	);
}

export default Head;