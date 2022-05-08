import React from 'react'
import tw from "tailwind-styled-components"

import { OuterDev } from './Hero'

const OuterDev2 = tw(OuterDev)`
bg-[url('../images/background2.jpg')]
`



function AboutUs() {
	return (
		<OuterDev2>
			<div className="container pt-6 pl-6 mx-auto space-y-5 lg:grid lg:grid-cols-12 lg:pl-0 ">
				{/* left section */}
				<div className=' divide-x  divide-blue-500 space-y-7 lg:col-span-6'>
					<h1 className='font-bold text-7xl text-center lg:text-left '>Our Story</h1>
					<p className='text-gray-400 pl-5'>
						Raciti duis auctor pharetra ultrices eget, cras bibendum accumsan turpis fermentum metus, neque dui per velit.
						Tempus nisl mauris cras orci taciti tellus pretium, erat platea iaculis porttitor fringilla. Habitasse ac laoreet scelerisque dictumst nulla pretium habitant congue vitae, leo nunc ullamcorper turpis id mus viverra mauris metus semper, ornare morbi sociis lacinia gravida proin augue integer.
						Raciti duis auctor pharetra ultrices eget, cras bibendum accumsan turpis fermentum metus, neque dui per velit.

					</p>
				</div>
				{/* right section */}
				<div className="divide-y divide-dashed text-4xl space-y-11 text-gray-400 lg:col-span-6">
					<div>01
						High-quality rendered and equally affordable artwork
					</div>
					<div>02
						Learning, researching, and studying the crypto market daily</div>
					<div>03
						The immersive world of NFTs with all its collectors and projects</div>
					<div>04
						Slow, steady, and natural community growth within the Lazy Lounge Club</div>

				</div>

			</div>


		</OuterDev2>
	)
}

export default AboutUs