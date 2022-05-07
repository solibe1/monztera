import React from 'react'

function Divider() {
	return (
		<div className=" flex flex-col text-white py-5 text-3xl text-center  h-32  bg-gradient-to-r from-cyan-500 to-blue-500 space-y-2 md:flex-row md:space-y-0 md:space-x-7 md:justify-center md:items-center">

			<div className='font-bold'>
				<h1>In collaboration with </h1></div>


			<div className='w-60 mx-auto '>
				<img className='object-cover' src="https://assets.website-files.com/6256869b1e8da354168b3369/6256869b1e8da319558b33d9_Logo%20cripto.com.svg" alt="crypto.com" />

			</div>

		</div>
	)
}

export default Divider