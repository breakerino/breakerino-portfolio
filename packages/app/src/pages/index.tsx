// --------------------------------------------------------------------- 
// Pages > Index
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { dehydrate } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { GetServerSideProps } from 'next';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { useAppContext } from '@/contexts/App';
import queryClient from '@/app/api/client';
import queries from '@/app/api/queries';
import Wrapper from '@/components/Wrapper';
import Content from '@/containers/Content';
import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
// --------------------------------------------------------------------- 

export default function Index() {
	const { sections } = useAppContext();

	return (
		<Wrapper>
			<Header data={sections.header} />
			<Content data={sections.content} />
			<Footer data={sections.footer} />
		</Wrapper>
	);
}

// --------------------------------------------------------------------- 
// Server-side data prefetch
// --------------------------------------------------------------------- 
export const getServerSideProps: GetServerSideProps = async () => {
	await Promise.all(
		queries.map(({ queryKey, queryFn }) =>
			queryClient.prefetchQuery({
				queryKey,
				queryFn: async () => {
					try {
						const { status, data: { data } } = await queryFn();
						return status === 200 ? data : [];
					} catch (e) {
						if (e instanceof AxiosError) console.error('Axios Error:', e.message);
						else console.error(e);
						return [];
					}
				}
			})
		)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};