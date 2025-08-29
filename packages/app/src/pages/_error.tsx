// --------------------------------------------------------------------- 
// Pages > Error
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
// --------------------------------------------------------------------- 

export default function Error() {
	const router = useRouter();

	React.useEffect(() => {
		router.push('/');
	}, [router]);

	return null;
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  return { statusCode: res?.statusCode ?? err?.statusCode ?? 404 };
};