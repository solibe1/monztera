import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../Components/AboutUs'
import Divider from '../Components/Divider'
import Team from '../Components/Team'
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
			<h1 className='text-red-600'> testttttttttttttttt</h1>

			<Hero />
			<Divider />
			<AboutUs />
			<Team />
		</div>
	)
}

export default Home

