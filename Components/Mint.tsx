import React from 'react'
import Image from 'next/image'
import monsters from '../images/monsters.gif'

import { Button } from './Hero'




function Mint() {


	return (


		<div id='Mint' className='bg-gradient-to-r from-[#eecda3] to-[#ef629f]'>
			<h1 className='text-6xl text-center font-bold pt-8 py-3'>Mint your
				<span className='relative'>
					<span className="block absolute -inset-1 -skew-y-3 bg-cyan-500"></span>

					<span className="relative text-white">NFT</span>
				</span>
			</h1>

			<div className='flex flex-col items-center space-y-6 '>
				<div className=''>


					<Image src={monsters} />
					<p className='text-center'>NFT claimed 0/20</p>

				</div>
				<div className='pb-5'>
					<Button>Mint NFT (0.01ETH)</Button>
				</div>

			</div>

		</div >
	)
}

export default Mint