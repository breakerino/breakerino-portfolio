// --------------------------------------------------------------------- 
// Layouts > Root
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { Inter } from 'next/font/google';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const interFont = Inter({ variable: '--font-inter', subsets: ['cyrillic'], display: 'swap', });
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface RootLayoutProps {
	children: React.ReactNode;
}
// --------------------------------------------------------------------- 

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
	<html lang="en" className={`${interFont.variable}`}>
		{/* <head>
			<meta name="apple-mobile-web-app-title" content="Breakerino.me" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</head> */}
		<body>
			{children}
		</body>
	</html>
)

export default RootLayout;