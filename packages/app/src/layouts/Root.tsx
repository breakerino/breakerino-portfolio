// --------------------------------------------------------------------- 
// Layouts > Root
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { Inter } from 'next/font/google';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Head from '@/components/Head';
import SkipLink from '@/components/SkipLink';
import PortalRoot from '@/components/PortalRoot';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const interFont = Inter({ variable: '--font-inter', subsets: ['cyrillic'], display: 'swap' });
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface RootLayoutProps {
	children?: React.ReactNode;
}
// --------------------------------------------------------------------- 

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
	<html lang="en" className={`${interFont.variable}`}>
		<Head />
		<body className="bg-secondary-950 text-primary-50">
			<SkipLink />
			{children}
			<PortalRoot />
		</body>
	</html>
)

export default RootLayout;