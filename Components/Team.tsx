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

				<MemberCard link='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160' />
				<MemberCard link='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160' />
				<MemberCard link='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160' />
				<MemberCard link='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160' />


			</div>
		</OuterDev2>
	)
}

export default Team