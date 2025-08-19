// --------------------------------------------------------------------- 
// Pages > Index
// --------------------------------------------------------------------- 


// --------------------------------------------------------------------- 
import Image from "next/image";
import Head from 'next/head';
import { GetServerSideProps } from 'next';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { useApi } from '@/app/api/server';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import "./index.scss";
// --------------------------------------------------------------------- 

type IndexProps = {
	text: string;
};

export default function Index({text}: IndexProps) {
	return (
		<>
			<Head>
				<title>{text}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="wrapper">
				<main>
					<div className="container">
						<a href="https://nextjs.org/" target="_blank">
							<Image
								className="nextjs-logo"
								src="/nextjs-logo-icon.svg"
								alt="Next.js logo"
								width={180}
								height={38}
								priority
							/>
						</a>
						<h1>{text}</h1>
					</div>
				</main>
				<footer>
					<div className="container">
						<div className="created-by">
							<span>Created by</span>
							<a href="https://breakerino.me" target="_blank">
								<Image
									className="breakerino-logo"
									src="/breakerino-logo-icon.svg"
									alt="Breakerino logo"
									width={110}
									height={16}
									priority
								/>
							</a>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const api = useApi();
	
	try {
		const response = await api.getData();
		
		return {
			props: {
				text: response?.data?.data?.text ?? null
			}
		}
	} catch (error) {
		console.error(error)
		
		return {
			props: {
				text: null
			}
		}
	}
};