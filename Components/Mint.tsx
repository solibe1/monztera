import React, { useEffect } from 'react'
import Image from 'next/image'
import monsters from '../images/monsters.gif'
import { useNFTDrop, useAddress } from '@thirdweb-dev/react'

import { Button } from './Hero'
import { BigNumber } from 'ethers'




function Mint() {
	const [totalSupply, setTotalSupply] = React.useState<BigNumber>()
	const nftDrop = useNFTDrop("0x712F1513B241e84b2be0c1459E7198a4916a6467") //smart contract address of nft drop
	const [loading, setLoading] = React.useState<boolean>(true)
	const [price, setPrice] = React.useState<string>()


	useEffect(() => {
		if (!nftDrop) return

		const fetchNftData = async () => {
			setLoading(true);
			const total = await nftDrop.totalUnclaimedSupply()
			setTotalSupply(total)
			setLoading(false);
			const claimConditions = await nftDrop.claimConditions.getAll()
			setPrice(claimConditions?.[0].currencyMetadata.displayValue)
		}
		fetchNftData();
	}, [nftDrop])


	const mintNFT = () => {
		console.log("minting")

	}

	return (


		<div id='Mint' className='bg-gradient-to-r from-[#eecda3] to-[#ef629f]'>
			<h1 className='text-6xl text-center font-bold pt-8 py-3'>Mint your
				<span className='relative'>
					<span className="block absolute -inset-1 -skew-y-3 bg-cyan-500"></span>

					<span className="relative text-white">NFT</span>
				</span>
			</h1>

			<div className='flex flex-col items-center space-y-6 '>
				<div className=''>


					<Image src={monsters} />
					<p className={loading ? 'text-center w-auto animate-pulse  rounded-md bg-white py-3 px-4 font-poppins text-lg font-medium uppercase text-pink-600 shadow-lg  lg:mb-0' : "text-center w-auto  rounded-md bg-white py-3 px-4 font-poppins text-lg font-medium uppercase text-pink-600 shadow-lg  lg:mb-0"}>
						{loading ? <>loading supply...</>
							: <> NFT supplies left: {totalSupply?.toString()}</>

						}
					</p>




				</div>
				<div className='pb-5'>
					<Button onClick={mintNFT}>Mint NFT ({price} ETH) </Button>
				</div>

			</div>

		</div >
	)
}

export default Mint