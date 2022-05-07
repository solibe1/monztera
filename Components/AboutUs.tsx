import React from 'react'
import tw from "tailwind-styled-components"

import { OuterDev } from './Hero'

const OuterDev2 = tw(OuterDev)`
bg-[url('../images/background2.jpg')]
`



function AboutUs() {
	return (
		<OuterDev2>

			{/* left section */}

			<div className='space-y-5 pl-5'>
				<h1 className='font-bold text-7xl'>Our Story</h1>
				<p className='text-gray-400 w-1/2'> Raciti duis auctor pharetra ultrices eget, cras bibendum accumsan turpis fermentum metus, neque dui per velit.

					Tempus nisl mauris cras orci taciti tellus pretium, erat platea iaculis porttitor fringilla. Habitasse ac laoreet scelerisque dictumst nulla pretium habitant congue vitae, leo nunc ullamcorper turpis id mus viverra mauris metus semper, ornare morbi sociis lacinia gravida proin augue integer.

				</p>
			</div>
			{/* right section */}
			<div>
				hi
			</div>




		</OuterDev2>
	)
}

export default AboutUs