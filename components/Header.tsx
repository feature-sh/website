import { Fragment, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  ChatIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { BookOpenIcon } from '@heroicons/react/solid'

const NEXT_PUBLIC_DASHBOARD_URL_LINK = process.env.NEXT_PUBLIC_DASHBOARD_URL_LINK

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

const Header: React.FC = () => {
  const { t: translate } = useTranslation('header')

  const solutions = [
    {
      name: translate('navitem_product'),
      description:
        'Get a better understanding of where your traffic is coming from.',
      href: '/features',
      icon: ViewGridIcon,
    },
    {
      name: translate('navitem_docs'),
      description: 'Speak directly to your customers in a more meaningful way.',
      href: 'https://docs.feature.sh',
      icon: BookOpenIcon,
    },
  ]

  return (
    <Popover>
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <Link passHref={true} href="/" className="flex">
            <span className="sr-only">Feature</span>
            <Image src="/logo.svg" width={40} height={40} alt="FEATURE logo" />
          </Link>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-black hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            <Link
              href="https://docs.feature.sh"
              className="ml-8 text-base font-medium text-black hover:text-green-700"
            >
              {translate('navitem_docs')}
            </Link>
          </Popover.Group>
          <div className="flex items-center md:ml-12">
            <Link
              href={NEXT_PUBLIC_DASHBOARD_URL_LINK || '#'}
              className="ml-8 text-base font-medium text-black hover:text-green-700"
            >
              {translate('navitem_dashboard')}
            </Link>
            <Link
              href="https://github.com/marketplace/feature-bot"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-black border border-transparent shadow-sm hover:bg-green-700"
            >
              {translate('navitem_sign_up')}
            </Link>
            {/* <Link
              href={process.env.NEXT_PUBLIC_CALENDAR_URL_BOOK_A_DEMO || '#'}
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-black border border-transparent shadow-sm hover:bg-green-700"
            >
              {translate('navitem_book')}
            </Link> */}
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
          className="absolute inset-x-0 top-0 z-40 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="bg-black divide-y-2 shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
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
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-3 -m-3 text-white hover:bg-gray-50 hover:text-black"
                      passHref={true}
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="px-5 py-6">
              <div>
                <a
                  href={process.env.NEXT_PUBLIC_CALENDAR_URL_BOOK_A_DEMO || '#'}
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-black bg-white border border-transparent shadow-sm hover:bg-yellow-500"
                >
                  {translate('navitem_book')}
                </a>
                <Link
                  href="https://github.com/marketplace/feature-bot"
                  className="block mt-5 text-center text-indigo-600 hover:text-indigo-500"
                >
                  {translate('navitem_sign_up')}
                </Link>
                <Link
                  href="https://dashboard.feature.sh"
                  className="block mt-5 text-center text-indigo-600 hover:text-indigo-500"
                >
                  {translate('navitem_dashboard')}
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
