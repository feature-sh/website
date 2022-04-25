import { Fragment, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
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
  const { t: translate } = useTranslation('header')
  const [isOpaque, setIsOpaque] = useState(true)

  const handleScroll = () => {
    setIsOpaque(window.scrollY > 20)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Popover
      className={`fixed top-0 left-0 right-0 z-40 transition ${
        isOpaque ? 'bg-gray-900/[.99] drop-shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <Link href="/">
            <a className="flex">
              <span className="sr-only">Feature</span>
              <Image
                src="/logo.svg"
                width={40}
                height={40}
                alt="feature's logo"
              />
            </a>
          </Link>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          {/* TODO this part is commented in waiting the pages implementation */}
          <Popover.Group as="nav" className="flex space-x-10">
            <Link href="/features">
              <a className="text-base font-medium text-neutral-200 hover:text-white">
                {translate('navitem_features')}
              </a>
            </Link>
            <Link href="https://docs.feature.sh">
              <a className="ml-8 text-base font-medium text-neutral-200 hover:text-white">
                {translate('navitem_docs')}
              </a>
            </Link>
            {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-white' : 'text-neutral-200',
                      'group inline-flex items-center rounded-md bg-transparent text-base font-medium hover:text-white focus:outline-none '
                    )}
                  >
                    {translate('navitem_features')}
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-neutral-200' : 'text-neutral-100',
                        'ml-2 h-5 w-5 group-hover:text-white'
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
                    <Popover.Panel className="absolute z-10 mt-3 -ml-4 w-screen max-w-md transform lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                <item.icon
                                  className="h-6 w-6"
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
                        <div className="bg-gray-50 p-5 sm:p-8">
                          <a
                            href="#"
                            className="-m-3 flow-root rounded-md p-3 hover:bg-gray-100"
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
            */}

            {/*
            <Link href="/blog">
              <a className="text-base font-medium text-neutral-200 hover:text-white">
                {translate('navitem_blog')}
              </a>
            </Link>
            */}
          </Popover.Group>
          {/* FIXME remove this div if there is any item menu */}
          <div />
          <div className="flex items-center md:ml-12">
            <Link href="https://dashboard.feature.sh">
              <a className="ml-8 text-base font-medium text-neutral-200 hover:text-white">
                {translate('navitem_dashboard')}
              </a>
            </Link>
            <Link href="https://calendly.com/feature-sh/book-a-demo-to-boost-your-web3-development" passHref={true}>
              <a className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                {translate('navitem_book')}
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
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
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
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
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
                    {translate('navitem_product')}
                  </a>
                </Link>

                <Link href="/blog">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    {translate('navitem_blog')}
                  </a>
                </Link>
              </div>
              <div className="mt-6">
                <Link href="/book">
                  <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                    {translate('navitem_book')}
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className="mt-5 block text-center text-indigo-600 hover:text-indigo-500">
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
