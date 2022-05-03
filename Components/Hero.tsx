import React from 'react'
import Image from 'next/image'
import monster1 from '../images/monster1.png'


import tw from "tailwind-styled-components"
export const OuterDev = tw.div`

text-white 
 w-full h-screen
 bg-[url('../images/background.jpg')]
 
`

export const InnerDev = tw.div`
flex
max-w-7xl
mx-auto
py-24
justify-between
space-x-72
`


function Hero() {
	return (
		<OuterDev>
			<InnerDev>
				<div>
					<Image src={monster1} alt="monster1" />

				</div>
				<div className='my-auto space-y-5 '>
					<h1 className=' text-3xl md:text-5xl lg:text-8xl font-bold '>
						Monztera
						NFT Collection
					</h1>

					<p>Lectus rhoncus nunc mattis viverra laoreet mi turpis  etiam  class vulputate auctor suscipit fermentum netus cras vehicula eget urna.

					</p>

					<button className='items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'> connect your wallet </button>
				</div>

			</InnerDev>
		</OuterDev>
	)
}

export default Hero