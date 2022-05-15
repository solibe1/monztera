import React from 'react'
import tw from 'tailwind-styled-components'

import { OuterDev } from './Hero'
import MemberCard from './MemberCard'

const OuterDev2 = tw(OuterDev)`
bg-[url('../images/background2.jpg')]
`
function Team() {
	return (
		<OuterDev2 id="Team">
			<h1 className='text-6xl text-center pt-7'>Meet Our Team</h1>
			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center ">

				<MemberCard link='https://monztera.1onestrong.com/wp-content/uploads/sites/3/2021/12/team-5.png' />
				<MemberCard link='https://monztera.1onestrong.com/wp-content/uploads/sites/3/2021/12/team-5.png' />
				<MemberCard link='https://monztera.1onestrong.com/wp-content/uploads/sites/3/2021/12/team-5.png' />
				<MemberCard link='https://monztera.1onestrong.com/wp-content/uploads/sites/3/2021/12/team-5.png' />

			</div>
		</OuterDev2>
	)
}

export default Team