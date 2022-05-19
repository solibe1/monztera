import React from 'react'

export default function MemberCard(props: { link: string }) {
	return (
		<div className='flex flex-col items-center pt-4 '>
			<div className='bg-gradient-to-tr from-blue-300 to-blue-900 rounded-xl'>
				<img className='w-44 object-cover md:w-48 rounded-xl '
					src={props.link} />
				<h1 className='text-black text-center'>FIRSTNAME LASTNAME</h1>
				<h1 className='text-black text-center'>CEO</h1>

			</div>

		</div>
	)
}
