/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-scroll'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import logo from '../images/logo.png'



const navigation = [
	{ name: 'Home', href: 'Home', current: false },
	{ name: 'About', href: 'About', current: false },
	{ name: 'Team', href: 'Team', current: false },
	{ name: 'Mint', href: 'Mint', current: false },

]

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
	const address = useAddress();
	const disconnect = useDisconnect();
	return (
		<Disclosure as="nav" className="bg-gray-800 sticky top-0 z-10">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex-shrink-0 flex items-center cursor-pointer">
									<Link
										to="Home"
										smooth={true}
										duration={500}
										href="/"
									>
										<img
											className="block lg:hidden h-8 w-auto"
											src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
											alt="Workflow"
										/>
										<img
											className="hidden lg:block h-8 w-auto"
											src={logo.src}
											alt="Workflow"
										/>
									</Link>
								</div>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4 cursor-pointer">
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												smooth={true}
												duration={500}
												offset={-60}
												className={classNames(
													item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
													'px-3 py-2 rounded-md text-sm font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


								{/* Profile dropdown */}
								<Menu as="div" className="ml-3 relative">
									<div>
										{address && <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
											<span className="sr-only">Open user menu</span>
											<p className='text-white'>Wallet Connected: {address.substring(0, 3)}...{address.substring(address.length - 3, address.length)}</p>
										</Menu.Button>}
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a className='cursor-pointer'>
														<Link
															key="Mint"
															to="Mint"
															smooth={true}
															duration={500}
															offset={-60}
															className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
														>
															Mint an NFT
														</Link>
													</a>
												)}
											</Menu.Item>

											<Menu.Item>
												{({ active }) => (
													<button onClick={() => disconnect()}

														className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
													>
														Sign out
													</button>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Link
									key={item.name}
									as="a"
									to={item.href}
									smooth={true}
									duration={500}
									offset={-60}
									className={classNames(
										item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block px-3 py-2 rounded-md text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

