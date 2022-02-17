import { useRef, useState } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { NextPageWithLayout } from './_app'
import withMainLayout from '../layouts/withMainLayout'
import { VideoDemo, videoDemos } from '../constants/videoDemo'

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
      <div className="absolute flex justify-center -right-14 -top-14">
        <Image src="/logos/github.svg" height={850} width={850} />
      </div>

      <div className="relative z-10 flex min-h-[70vh] items-center pt-32 lg:px-4 lg:pt-8">
        <div className="w-full lg:grid lg:grid-cols-5 lg:gap-8 lg:px-12">
          <div className="px-2 sm:px-6 sm:text-center lg:col-span-3 lg:flex lg:items-center lg:px-0 lg:text-left">
            <div className="lg:py-2 lg:pl-16">
              <h1 className="flex flex-col mt-4 text-4xl font-extrabold tracking-tight text-center text-white gap-y-2 sm:mt-5 sm:text-5xl lg:mt-6 lg:text-left xl:text-6xl">
                <span className="block">{translate('hero_heading_part1')}</span>
                <span className="block text-indigo-400">
                  {translate('hero_heading_part2')}
                </span>
              </h1>
              <p className="mt-3 text-base text-center text-gray-300 sm:mt-5 sm:text-xl lg:max-w-3xl lg:text-left lg:text-lg xl:text-xl">
                {translate('hero_subheading')}
              </p>
              <div className="mt-10 sm:mt-12">
                <form
                  className="sm:mx-auto sm:max-w-xl lg:mx-0"
                  onSubmit={handleDemoBookingSubmit}
                >
                  <div className="sm:flex">
                    <div className="flex-1 min-w-0">
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
                        className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full px-4 py-3 font-medium text-white bg-indigo-500 shadow rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
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
            <Image src="/hero_snippet.png" width={579} height={377} />
          </div>
        </div>
      </div>
    </section>
  )
}

const VideoDemoSection: React.FC = () => {
  const { t: translate } = useTranslation('homepage')
  const [selectedDemo, setSelectedDemo] = useState<VideoDemo>(videoDemos[0])

  const handleDemoChange = (demo: VideoDemo) => {
    setSelectedDemo(demo)
  }

  return (
    <section className="flex flex-col justify-center p-8 py-16 text-center lg:py-24">
      <h3 className="text-2xl font-normal font-bold uppercase sm:text-3xl xl:text-4xl">
        {translate('video_demo_subheading')}
      </h3>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl xl:text-5xl">
        {translate('video_demo_heading')}
      </h2>
      <p className="mt-6 text-gray-800 text-md sm:text-lg lg:text-xl xl:text-2xl">
        {translate('video_demo_description')}
      </p>
      <div className="flex flex-wrap items-start justify-center mt-8 start gap-y-4 gap-x-4 md:gap-x-8">
        {videoDemos.map((demo) => (
          <button
            key={demo.label}
            className={`${
              selectedDemo === demo ? 'opacity-1' : 'opacity-80'
            } sm:text-md  block rounded-md bg-indigo-600 px-4 py-3 font-medium text-white shadow hover:opacity-100 focus:outline-none lg:text-lg xl:text-xl`}
            onClick={() => {
              handleDemoChange(demo)
            }}
          >
            {demo.label}
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <video
          controls
          autoPlay
          className="max-w-full rounded aspect-video md:w-3/4 md:border-2 md:border-indigo-500 md:p-2 xl:w-2/4"
          src={selectedDemo.videoUrl}
        >
          Sorry, look like your browser can't play videos :(
        </video>
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
        <VideoDemoSection />
      </main>
    </>
  )
}

Home.withLayout = withMainLayout

export default Home
