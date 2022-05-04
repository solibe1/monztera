import React from 'react'
import tw from "tailwind-styled-components"

import { OuterDev } from './Hero'

const OuterDev2 = tw(OuterDev)`
bg-[url('../images/background2.jpg')]
`



function AboutUs() {
	return (
		<OuterDev2>
			<div>AboutUs</div>
		</OuterDev2>
	)
}

export default AboutUs