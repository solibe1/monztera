import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container } from './Container'
const Home: NextPage = () => {
	return (
		<div className="">
			<Head>
				<title>MONTZERA NFT Drop</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>


			<Container>
				<h1>Montzera NFT Drop</h1>
				<p>
					This is a simple Next.js project that uses Tailwind CSS with styled-components, and React.
				</p>
			</Container>

		</div>
	)
}

export default Home

