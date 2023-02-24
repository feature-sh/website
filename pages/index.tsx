import { useRef, useState, useMemo } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { Fade } from 'react-awesome-reveal'

import { NextPageWithLayout } from './_app'
import { useInterval } from '../hooks/useInterval'
import withMainLayout from '../layouts/withMainLayout'
import { VideoDemo, videoDemos } from '../constants/videoDemo'
import { features } from '../constants/features'
import { testimonials } from '../constants/testimonials'

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

  return (
    <>
      <div className="mx-auto px-4 py-32 lg:-mt-[90px] lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto -mt-12 max-w-xl text-center">
          <h1 className="hubot-sans text-6xl font-black tracking-tight text-gray-900 sm:text-6xl">
            WEB3 DEVTOOL
          </h1>
          <h2 className="mt-1 font-inter text-lg font-extralight leading-8 text-black">
            🏁The Fatest Way to Fix Github Issues 🐙 for Open Source Project 🦄
          </h2>
        </div>
      </div>
    </>
  )
}

const BuildFasterSection: React.FC = () => {
  const { t: translate } = useTranslation('homepage')

  return (
    <section className="grid grid-cols-12">
      <div className="hubot-sans2 col-span-4 col-start-3 row-span-3 border-[1px] border-r-0 border-black text-8xl font-extrabold">
        BUILD FASTER
      </div>
      <div className="mona-sans col-span-4 border-[1px] border-b-0 border-black p-7 text-center text-3xl font-extrabold">
        Give Economic 🤑
        <br />
        Incentives to Contribute
      </div>
      <div className="mona-sans col-span-4 border-[1px] border-black p-7 text-center text-3xl font-extrabold">
        Give Economic 🤑
        <br />
        Incentives to Contribute
      </div>
      <div className="mona-sans col-span-4 border-[1px]  border-t-0 border-black p-7 text-center text-3xl font-extrabold">
        Pay Contributors
        <br />
        Automatically 🤖
      </div>
    </section>
  )
}

const FeaturesSection = () => {
  const { t: translate } = useTranslation('homepage')

  return (
    <section className="bg-white px-2 pt-16 pb-4 lg:pt-28 lg:pt-8">
      <h2 className="text-center text-2xl font-normal font-bold uppercase sm:text-3xl xl:text-4xl">
        {translate('features_subheading')}
      </h2>
      <h3 className="mt-4 text-center text-3xl font-bold sm:text-4xl xl:text-5xl">
        {translate('features_heading')}
      </h3>
      <p className="text-md mx-auto mt-6 max-w-7xl text-center text-gray-800 sm:text-lg lg:text-xl xl:text-2xl">
        {translate('features_description')}
      </p>
      <div className="mx-auto mt-20 max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {features.map((feature) => (
            <div key={feature.i18nLabel}>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 flex h-12 w-full items-center justify-between text-lg font-medium leading-6 text-gray-900">
                  <span>{translate(feature.i18nLabel)}</span>
                  {feature.isPremium && (
                    <span className="rounded bg-orange-400/50 px-3 py-1 text-sm font-bold uppercase">
                      Premium
                    </span>
                  )}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {translate(feature.i18nDescription)}
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex justify-center lg:justify-end">
          <Link
            passHref
            href="/features"
            className="mt-12 flex items-center gap-x-2 text-right"
          >
            {translate('features_more')}
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

type TestimonialSectionProps = {
  slideInterval: number // in seconds
  n: number // temporary: number of fake testimonials to generate
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  n,
  slideInterval,
}) => {
  const { t: translate } = useTranslation('homepage')
  const [currentTestimonialId, setCurrentTestimonialId] = useState(0)

  const resetInterval = useInterval(() => {
    nextTestimonial(true)
  }, slideInterval * 3000)

  // gen fake testimonials only one time
  // const testimonials = useMemo(() => genFakeTestimonials(n), [])

  const nextTestimonial = (auto: boolean = false) => {
    if (!auto) {
      resetInterval()
    }
    setCurrentTestimonialId((currentTestimonialId + 1) % testimonials.length)
  }

  const previousTestimonial = (auto: boolean = false) => {
    if (!auto) {
      resetInterval()
    }
    setCurrentTestimonialId(
      currentTestimonialId === 0
        ? testimonials.length - 1
        : currentTestimonialId - 1
    )
  }

  const testimonial = testimonials[currentTestimonialId]

  return (
    <div className="bg-white pt-16 lg:pt-24">
      <div className="bg-indigo-700 lg:relative lg:z-10">
        <div className="mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="mx-auto max-w-md items-center px-4 sm:max-w-3xl sm:px-6 lg:flex lg:h-full lg:px-10">
              <Fade key={currentTestimonialId}>
                <div className="aspect-w-10 aspect-h-6 mx-auto flex w-2/3 items-center overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 sm:w-1/2 lg:aspect-none lg:h-full lg:w-full">
                  <img
                    className="object-cover object-center lg:h-full lg:w-full"
                    src={testimonial.photo}
                    alt=""
                  />
                </div>
              </Fade>
            </div>
          </div>
          <div className="mt-6 h-full py-3 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto flex h-full max-w-md flex-col justify-between gap-y-8 px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:pt-8 lg:pb-4">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <Fade key={currentTestimonialId}>
                    <p
                      className="text-md mt-6 font-medium text-white md:text-lg lg:text-xl xl:text-2xl"
                      key={currentTestimonialId}
                    >
                      {translate(
                        testimonials[currentTestimonialId].i18nContent
                      )}
                    </p>
                  </Fade>
                </div>
                <footer className="mt-6">
                  <Fade key={currentTestimonialId}>
                    <p className="md:text-md text-sm text-base font-medium text-white lg:text-lg xl:text-xl">
                      {testimonial.author}
                    </p>
                    <p className="md:text-md h-12 text-sm text-base font-medium text-indigo-100 lg:text-lg xl:text-xl">
                      {testimonial.role} {translate('testimonial_at')}{' '}
                      {testimonial.workplace}
                    </p>
                  </Fade>
                </footer>
              </blockquote>
              <div className="flex flex-col items-center gap-y-4">
                {/* carrousel dot indicator */}
                <div className="flex items-center gap-x-3 pb-8 md:pb-0">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 bg-white ${
                        index === currentTestimonialId
                          ? 'opacity-100'
                          : 'opacity-50'
                      } rounded-full`}
                      onClick={() => {
                        setCurrentTestimonialId(index)
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Temporary placeholders, will be replaced when a proper blog implementation will be available.

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

const BlogSection: React.FC = () => {
  const { t: translate } = useTranslation('homepage')

  return (
    <section className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-center text-2xl font-normal font-bold uppercase sm:text-3xl xl:text-4xl">
            {translate('blog_subheading')}
          </h2>
          <h3 className="mt-4 text-center text-3xl font-bold sm:text-4xl xl:text-5xl">
            {translate('blog_heading')}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            {translate('blog_description')}
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const BlockchainAvailable: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 lg:py-16">
        <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
          Deployed on
        </p>
        <div className="mt-6 grid grid-cols-1 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center bg-gray-50 px-8 py-8">
            <img
              className="contrast-240 max-h-12 grayscale"
              src="/xdai-logo.png"
              alt="Xdai logo"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 px-8 py-8">
            <img
              className="max-h-12 contrast-50 grayscale"
              src="/polygon-logo.webp"
              alt="Polygon logo"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 px-8 py-8">
            <img
              className="contrast-70 max-h-12 grayscale"
              src="/arbitrum-logo.png"
              alt="Arbitrum logo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const CTA: React.FC = () => {
  const { t: translate } = useTranslation('homepage')

  return (
    <div className="flex bg-gray-900 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="px-4 text-3xl font-extrabold text-white sm:px-6 sm:text-4xl">
          <span className="block">Be like them</span>
          <span className="block">And start your Feature</span>
        </h2>
        <Link
          href={process.env.NEXT_PUBLIC_DAPP_BASE_URL || '#'}
          passHref
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
        >
          {translate('hero_try_free')}
        </Link>
      </div>
    </div>
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
        <BuildFasterSection />
        <FeaturesSection />
        <BlockchainAvailable />
        <TestimonialSection n={10} slideInterval={3} />
        {/*<BlogSection />*/}
        <CTA />
      </main>
    </>
  )
}

Home.withLayout = withMainLayout

export default Home
