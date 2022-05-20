import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../Components/AboutUs'
import Divider from '../Components/Divider'
import Team from '../Components/Team'
import Hero from '../Components/Hero'
import Navbar from '../Components/NavBar'
import Mint from '../Components/Mint'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const Home: NextPage = () => {
	const address = useAddress();

	return (
		<div className="w-full">
			<Head>
				<title>MONTZERA NFT Drop</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Hero />
			<Divider />
			{address && <Mint />}
			<AboutUs />
			<Team />
		</div>
	)
}

export default Home

