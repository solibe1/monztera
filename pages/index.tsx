import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../Components/AboutUs'
import Divider from '../Components/Divider'
import Team from '../Components/Team'
import Hero from '../Components/Hero'
import Navbar from '../Components/NavBar'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
			<Team />
		</div>
	)
}

export default Home

