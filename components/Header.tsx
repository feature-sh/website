import { useState } from 'react'
import { items as navItems } from '../constants/navigation'
import { classNames } from '../utils/classNames'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
	ChartBarIcon,
	CursorClickIcon,
	DocumentReportIcon,
	MenuIcon,
	RefreshIcon,
	ShieldCheckIcon,
	ViewGridIcon,
	XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Image from 'next/image'

import { useTranslation } from 'next-i18next'
import Link from 'next/link'

// {{{ tailwind example metadata - will be replaced

const solutions = [
	{
		name: 'Analytics',
		description:
			'Get a better understanding of where your traffic is coming from.',
		href: '#',
		icon: ChartBarIcon,
	},
	{
		name: 'Engagement',
		description: 'Speak directly to your customers in a more meaningful way.',
		href: '#',
		icon: CursorClickIcon,
	},
	{
		name: 'Security',
		description: "Your customers' data will be safe and secure.",
		href: '#',
		icon: ShieldCheckIcon,
	},
	{
		name: 'Integrations',
		description: "Connect with third-party tools that you're already using.",
		href: '#',
		icon: ViewGridIcon,
	},
	{
		name: 'Automations',
		description:
			'Build strategic funnels that will drive your customers to convert',
		href: '#',
		icon: RefreshIcon,
	},
	{
		name: 'Reports',
		description:
			'Get detailed reports that will help you make more informed decisions ',
		href: '#',
		icon: DocumentReportIcon,
	},
]
const resources = [
	{
		name: 'Help Center',
		description:
			'Get all of your questions answered in our forums or contact support.',
		href: '#',
	},
	{
		name: 'Guides',
		description:
			'Learn how to maximize our platform to get the most out of it.',
		href: '#',
	},
	{
		name: 'Events',
		description:
			'See what meet-ups and other events we might be planning near you.',
		href: '#',
	},
	{
		name: 'Security',
		description: 'Understand how we take your privacy seriously.',
		href: '#',
	},
]

// }}}

const Header: React.FC = () => {
	const { t } = useTranslation('header')

	return (
		<Popover className="relative bg-white">
			<div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
				<div>
					<a href="#" className="flex">
						<span className="sr-only">Workflow</span>
						<Image
							src="/logo.svg"
							width={40}
							height={40}
							alt="feature's logo"
						/>
					</a>
				</div>
				<div className="-my-2 -mr-2 md:hidden">
					<Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
						<span className="sr-only">Open menu</span>
						<MenuIcon className="w-6 h-6" aria-hidden="true" />
					</Popover.Button>
				</div>
				<div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
					<Popover.Group as="nav" className="flex space-x-10">
						<Link href="/product">
							<a className="text-base font-medium text-gray-500 hover:text-gray-900">
								{t('navitem_product')}
							</a>
						</Link>
						<Popover className="relative">
							{({ open }) => (
								<>
									<Popover.Button
										className={classNames(
											open ? 'text-gray-900' : 'text-gray-500',
											'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
										)}
									>
										{t('navitem_features')}
										<ChevronDownIcon
											className={classNames(
												open ? 'text-gray-600' : 'text-gray-400',
												'ml-2 h-5 w-5 group-hover:text-gray-500'
											)}
											aria-hidden="true"
										/>
									</Popover.Button>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="opacity-0 translate-y-1"
										enterTo="opacity-100 translate-y-0"
										leave="transition ease-in duration-150"
										leaveFrom="opacity-100 translate-y-0"
										leaveTo="opacity-0 translate-y-1"
									>
										<Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 -ml-4 transform lg:max-w-3xl">
											<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
												<div className="relative px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
													{solutions.map((item) => (
														<a
															key={item.name}
															href={item.href}
															className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
														>
															<div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12">
																<item.icon
																	className="w-6 h-6"
																	aria-hidden="true"
																/>
															</div>
															<div className="ml-4">
																<p className="text-base font-medium text-gray-900">
																	{item.name}
																</p>
																<p className="mt-1 text-sm text-gray-500">
																	{item.description}
																</p>
															</div>
														</a>
													))}
												</div>
												<div className="p-5 bg-gray-50 sm:p-8">
													<a
														href="#"
														className="p-3 -m-3 flow-root rounded-md hover:bg-gray-100"
													>
														<div className="flex items-center">
															<div className="text-base font-medium text-gray-900">
																Enterprise
															</div>
															<span className="ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium leading-5 text-indigo-800">
																New
															</span>
														</div>
														<p className="mt-1 text-sm text-gray-500">
															Empower your entire team with even more advanced
															tools.
														</p>
													</a>
												</div>
											</div>
										</Popover.Panel>
									</Transition>
								</>
							)}
						</Popover>

						<Popover className="relative">
							{({ open }) => (
								<>
									<Popover.Button
										className={classNames(
											open ? 'text-gray-900' : 'text-gray-500',
											'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
										)}
									>
										<span>{t('navitem_blog')}</span>
										<ChevronDownIcon
											className={classNames(
												open ? 'text-gray-600' : 'text-gray-400',
												'ml-2 h-5 w-5 group-hover:text-gray-500'
											)}
											aria-hidden="true"
										/>
									</Popover.Button>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="opacity-0 translate-y-1"
										enterTo="opacity-100 translate-y-0"
										leave="transition ease-in duration-150"
										leaveFrom="opacity-100 translate-y-0"
										leaveTo="opacity-0 translate-y-1"
									>
										<Popover.Panel className="absolute z-10 w-screen max-w-xs px-2 mt-3 left-1/2 -translate-x-1/2 transform sm:px-0">
											<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
												<div className="relative px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8">
													{resources.map((item) => (
														<a
															key={item.name}
															href={item.href}
															className="block p-3 -m-3 rounded-md hover:bg-gray-50"
														>
															<p className="text-base font-medium text-gray-900">
																{item.name}
															</p>
															<p className="mt-1 text-sm text-gray-500">
																{item.description}
															</p>
														</a>
													))}
												</div>
											</div>
										</Popover.Panel>
									</Transition>
								</>
							)}
						</Popover>
					</Popover.Group>
					<div className="flex items-center md:ml-12">
						<Link href="/dashboard">
							<a className="text-base font-medium text-gray-500 hover:text-gray-900">
								{t('navitem_dashboard')}
							</a>
						</Link>
						<Link href="/book">
							<a className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">
								{t('navitem_book')}
							</a>
						</Link>
					</div>
				</div>
			</div>

			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute inset-x-0 top-0 p-2 origin-top-right transform transition md:hidden"
				>
					<div className="bg-white rounded-lg shadow-lg divide-y-2 divide-gray-50 ring-1 ring-black ring-opacity-5">
						<div className="px-5 pt-5 pb-6">
							<div className="flex items-center justify-between">
								<div>
									<Image
										src="/logo.svg"
										width={40}
										height={40}
										alt="feature's logo"
									/>
								</div>
								<div className="-mr-2">
									<Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Close menu</span>
										<XIcon className="w-6 h-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-6">
									{solutions.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
										>
											<div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md">
												<item.icon className="w-6 h-6" aria-hidden="true" />
											</div>
											<div className="ml-4 text-base font-medium text-gray-900">
												{item.name}
											</div>
										</a>
									))}
								</nav>
							</div>
						</div>
						<div className="px-5 py-6">
							<div className="grid grid-cols-2 gap-4">
								<Link href="/product">
									<a className="text-base font-medium text-gray-900 hover:text-gray-700">
										{t('navitem_product')}
									</a>
								</Link>

								<Link href="/blog">
									<a className="text-base font-medium text-gray-900 hover:text-gray-700">
										{t('navitem_blog')}
									</a>
								</Link>

								{/*
								{resources.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										{item.name}
									</a>
								))}
								*/}
							</div>
							<div className="mt-6">
								<Link href="/book">
									<a className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">
										{t('navitem_book')}
									</a>
								</Link>
								<Link href="/dashboard">
									<a className="block mt-5 text-center text-indigo-600 hover:text-indigo-500">
										Or go to your dashboard
									</a>
								</Link>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	)
}

export default Header
