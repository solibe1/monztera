import React from 'react'
import Image from 'next/image'
import monster1 from '../images/monster1.png'
import monster2 from '../images/monster2.png'
import monster3 from '../images/monster3.png'
import monster4 from '../images/monster4.png'
import monster5 from '../images/monster5.png'
import monster6 from '../images/monster6.png'
import { Button } from './Hero'




function Mint() {


	return (

		<div className='bg-gradient-to-r from-[#eecda3] to-[#ef629f] '>
			<h1 className='text-6xl text-center font-bold py-3'>Mint your NFT</h1>

			<div className='flex flex-col items-center space-y-6 '>
				<div className=''>
					<Image src={monster1} />
					<p className='text-center'>NFT claimed 0/20</p>

				</div>
				<div className='pb-5'>
					<Button>Mint NFT (0.01ETH)</Button>
				</div>

			</div>

		</div>
	)
}

export default Mint