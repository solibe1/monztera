import React from 'react'

function Divider() {
	return (
		<div className=" text-white py-2 text-3xl text-center w-full h-24 bg-gradient-to-r from-cyan-500 to-blue-500 ">
			<div className=" flex flex-col  md:flex-row md:max-w-lg md:my-5	md:mx-auto md:justify-between ">
				<text className='  '>In collaboration with </text>
				<img className='w-60 mx-auto ' src="https://assets.website-files.com/6256869b1e8da354168b3369/6256869b1e8da319558b33d9_Logo%20cripto.com.svg" alt="crypto.com" />


			</div>
		</div>
	)
}

export default Divider