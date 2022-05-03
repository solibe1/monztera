import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/Hero'
import Navbar from '../Components/NavBar'
import { Container } from './Container'
const Home: NextPage = () => {
	return (
		<div className="w-full">
			<Head>
				<title>MONTZERA NFT Drop</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<Hero />
		</div>
	)
}

export default Home

