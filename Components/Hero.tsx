import React from 'react'
import Image from 'next/image'
import monster1 from '../images/monster1.png'


import tw from "tailwind-styled-components"
export const OuterDev = tw.div`

text-white 
 w-full 
 md:h-screen
 bg-[url('../images/background.jpg')]
 
`

export const InnerDev = tw.div`
flex
max-w-7xl
mx-auto
py-24
justify-between
space-x-72
items-center
`
export const Button = tw.button`

bg-gradient-to-r from-cyan-500 to-blue-500
 hover:bg-blue-400
 text-white 
 font-bold 
 py-2 px-4 
 border-b-4 
 border-blue-700
 hover:border-blue-500 
 rounded-full
`


function Hero() {
	return (
		<OuterDev>
			<InnerDev>

				<div className='my-auto space-y-16 mx-auto pl-6 xl:pl-0 '>
					<h1 className=' text-3xl md:text-5xl lg:text-8xl font-bold font-mono '>
						Monztera
						NFT Collection
					</h1>

					<p className='text-2xl'>Lectus rhoncus nunc mattis viverra laoreet mi turpis  etiam  class vulputate auctor suscipit fermentum netus cras vehicula eget urna.

					</p>

					<Button> connect your wallet </Button>
				</div>
				<div className=' pr-5 w-full hidden md:inline-flex ms:pr-0'>
					<Image src={monster1} alt="monster1" />

				</div>
			</InnerDev>
		</OuterDev>
	)
}

export default Hero