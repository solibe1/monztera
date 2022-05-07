import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../Components/AboutUs'
import Divider from '../Components/Divider'
import Hero from '../Components/Hero'
import Navbar from '../Components/NavBar'
const Home: NextPage = () => {
	return (
		<div className="w-full">
			<Head>
				<title>MONTZERA NFT Drop</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<Hero />
			<Divider />
			<AboutUs />
		</div>
	)
}

export default Home

