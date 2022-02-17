import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { NextPageWithLayout } from './_app'
import withMainLayout from '../layouts/withMainLayout'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { useRef } from 'react'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'homepage',
        'header',
        'footer',
      ])),
    },
  }
}

const HeroSection: React.FC = () => {
  const { t: translate } = useTranslation('homepage')

  const bookDemoEmailInputField = useRef<HTMLInputElement | null>(null)

  const handleDemoBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // using HTML5 validation for now
    if ((e.target as any).reportValidity()) {
      const email = bookDemoEmailInputField.current?.value
      console.log(email)
    } else {
      console.log('Not a valid email')
    }
  }

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gray-900 pb-4">
      <div className="absolute -right-14 -top-14 flex justify-center">
        <Image src="/logos/github.svg" height={850} width={850} />
      </div>

      <div className="relative z-10 flex min-h-[70vh] items-center pt-32 lg:px-4 lg:pt-8">
        <div className="w-full lg:grid lg:grid-cols-5 lg:gap-8 lg:px-12">
          <div className="px-2 sm:px-6 sm:text-center lg:col-span-3 lg:flex lg:items-center lg:px-0 lg:text-left">
            <div className="lg:py-2 lg:pl-16">
              <h1 className="mt-4 flex flex-col gap-y-2 text-center text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-5xl lg:mt-6 lg:text-left xl:text-6xl">
                <span className="block">{translate('hero_heading_part1')}</span>
                <span className="block text-indigo-400">
                  {translate('hero_heading_part2')}
                </span>
              </h1>
              <p className="mt-3 text-center text-base text-gray-300 sm:mt-5 sm:text-xl lg:max-w-3xl lg:text-left lg:text-lg xl:text-xl">
                {translate('hero_subheading')}
              </p>
              <div className="mt-10 sm:mt-12">
                <form
                  className="sm:mx-auto sm:max-w-xl lg:mx-0"
                  onSubmit={handleDemoBookingSubmit}
                >
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        required
                        autoComplete="off"
                        ref={bookDemoEmailInputField}
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-500 px-4 py-3 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                      >
                        Book a demo
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-8 lg:col-span-2 lg:py-0">
            <Image src="/hero_snippet.svg" width={579} height={377} />
          </div>
        </div>
      </div>
    </section>
  )
}

const Home: NextPageWithLayout = () => {
  const { t: translate } = useTranslation('homepage')

  return (
    <>
      <Head>
        <title>{translate('title')}</title>
        <meta name="description" content={translate('description')} />
      </Head>

      <main>
        <HeroSection />
      </main>
    </>
  )
}

Home.withLayout = withMainLayout

export default Home
