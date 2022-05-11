import { link } from 'fs'
import React from 'react'

export default function MemberCard(props: { link: string | undefined }) {
	return (
		<div className='col-span-1'>
			<div className='flex flex-col items-center pt-4  '>
				<div className='bg-gradient-to-tr from-blue-300 to-blue-900 rounded-xl'>
					<div>
						<img className='w-40 object-cover md:w-48 '
							src={props.link} />
					</div>
					<h1 className='text-black text-center'>FIRSTNAME LASTNAME</h1>
					<h1 className='text-black text-center'>CEO</h1>

				</div>
			</div>
		</div>
	)
}
