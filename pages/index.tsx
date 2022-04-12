import { useEffect, useRef, useState, useMemo } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline'
import { Fade } from 'react-awesome-reveal'

import { NextPageWithLayout } from './_app'
import { useInterval } from '../hooks/useInterval'
import withMainLayout from '../layouts/withMainLayout'
import { VideoDemo, videoDemos } from '../constants/videoDemo'
import { features } from '../constants/features'
import { genFakeTestimonials } from '../constants/testimonials'

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
                <span className="block whitespace-pre-line">
                  {translate('hero_heading_part1')}
                </span>
                <span className="block text-indigo-400">
                  {translate('hero_heading_part2')}
                </span>
              </h1>
              <p className="mt-3 whitespace-pre-line text-center text-base text-gray-300 sm:mt-5 sm:text-xl lg:max-w-3xl lg:text-left lg:text-lg xl:text-xl">
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
    <section className="flex flex-col justify-center bg-gray-100 p-8 py-16 text-center lg:py-24">
      <h2 className="text-2xl font-normal font-bold uppercase sm:text-3xl xl:text-4xl">
        {translate('features_subheading')}
      </h2>
      <h3 className="mt-4 text-3xl font-bold sm:text-4xl xl:text-5xl">
        {translate('features_heading')}
      </h3>
      <p className="text-md mx-auto mt-6 max-w-7xl whitespace-pre-line text-gray-800 sm:text-lg lg:text-xl xl:text-2xl">
        {translate('features_description')}
      </p>
      <div className="start mt-8 flex flex-wrap items-start justify-center gap-y-4 gap-x-4 md:gap-x-8">
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
            {translate(demo.label)}
          </button>
        ))}
      </div>
      <Fade key={selectedDemo.label}>
        <div className="mt-8 flex justify-center">
          <div className="aspect-video relative max-w-full rounded p-2 md:w-3/4 xl:w-2/4">
            <div className="absolute inset-0 translate-x-4 translate-y-4 border-4 border-indigo-500" />
            <video
              title={
                selectedDemo.videoUrl.includes("polygon")
                ? "Demo video for how to create a deal on the Polygon (Matic) blockchain with Feature Bot on a GitHub issue"
                : "Demo video for how to create a deal on the Gnosis (xDai) blockchain with Feature Bot on a GitHub issue"
              }
              controls
              autoPlay
              className="relative z-10 h-full w-full drop-shadow-md"
              src={selectedDemo.videoUrl}
            >
              Sorry, look like your browser can't play videos :(
            </video>
          </div>
        </div>
      </Fade>
    </section>
  )
}

const FeaturesSection = () => {
  const { t: translate } = useTranslation('homepage')

  return (
    <section className="bg-white px-2 pt-16 pb-4 lg:pt-28 lg:pt-8">
      <h2 className="text-center text-2xl font-normal font-bold uppercase sm:text-3xl xl:text-4xl">
        {translate('video_demo_subheading')}
      </h2>
      <h3 className="mt-4 text-center text-3xl font-bold sm:text-4xl xl:text-5xl">
        {translate('video_demo_heading')}
      </h3>
      <p className="text-md mx-auto mt-6 max-w-7xl text-center text-gray-800 sm:text-lg lg:text-xl xl:text-2xl">
        {translate('video_demo_description')}
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
          <Link href="#">
            <a className="mt-12 flex items-center gap-x-2 text-right">
              {translate('features_more')}
              <ArrowRightIcon className="h-5 w-5" />
            </a>
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
  }, slideInterval * 1000)

  // gen fake testimonials only one time
  const testimonials = useMemo(() => genFakeTestimonials(n), [])

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
    <div className="bg-white px-4 pt-16 lg:px-16 lg:py-24">
      <div className="bg-indigo-600 pb-8 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="mx-auto max-w-md items-center px-4 sm:max-w-3xl sm:px-6 lg:flex lg:h-full lg:px-10">
              <Fade key={currentTestimonialId}>
                <div className="aspect-w-10 aspect-h-6 mx-auto flex w-2/3 items-center overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 sm:w-1/2 lg:aspect-none lg:h-full lg:w-full lg:w-full">
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
                <div className="flex items-center gap-x-3">
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
        <FeaturesSection />
        <TestimonialSection n={10} slideInterval={3} />
        <BlogSection />
      </main>
    </>
  )
}

Home.withLayout = withMainLayout

export default Home
