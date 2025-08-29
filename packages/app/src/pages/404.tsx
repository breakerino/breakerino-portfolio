// --------------------------------------------------------------------- 
// Pages > Not found
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { useRouter } from 'next/router';
// --------------------------------------------------------------------- 

export default function NotFound() {
	const router = useRouter();

	React.useEffect(() => {
		router.replace('/');
	}, [router]);

	return null;
}