import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../components/AboutUs'
import Divider from '../components/Divider'
import Team from '../components/Team'
import Hero from '../components/Hero'
import Navbar from '../components/NavBar'
const Home: NextPage = () => {
	return (
		<div className="w-full">
			<Head>
				<title>MONTZERA NFT Drop</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<h1 className='text-red-600'> testttttttttttttttt</h1>

			<Hero />
			<Divider />
			<AboutUs />
			<Team />
		</div>
	)
}

export default Home

