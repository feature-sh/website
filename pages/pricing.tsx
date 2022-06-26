import React from 'react'
import withMainLayout from '../layouts/withMainLayout'
import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { classNames } from '../utils/classNames'
import { CheckIcon } from '@heroicons/react/solid'
import { NextPageWithLayout } from './_app'
import { I18nBilling, isFrequencyPricing, pricing } from '../constants/pricing'
import { useTranslation } from 'next-i18next'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'pricing',
        'header',
        'footer',
      ])),
    },
  }
}

const faqs = [
  {
    id: 1,
    question: "Is-it a decentralized dApp ?",
    answer:
      "It's fully decentralized for the smart contract size. No ownership, no proxy pattern. The interface use Github, a centralized platform.",
  },
  // More questions...
]

type PriceFrequencyProps = {
  billing: I18nBilling
  price: number
}

const PriceFrequency: React.FC<PriceFrequencyProps> = ({ billing, price }) => {
  const { t: translate } = useTranslation('footer')

  return (
    <>
      <span className="text-5xl font-extrabold tracking-tight">{price}</span>
      <span className="ml-1 text-xl font-semibold">{translate(billing)}</span>
    </>
  )
}

const Pricing: NextPageWithLayout = () => {
  const { t: translate } = useTranslation('pricing')

  return (
    <>
      <div className={'bg-gray-900'}>
        <div className="relative mx-auto max-w-2xl py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-28 lg:px-8">
          <div className="relative">
            <h1 className="max-w-xl text-3xl font-extrabold text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
              Pricing plans for teams of all sizes
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-400">
              Choose an affordable plan that's packed with the best features for
              engaging your audience, creating customer loyalty, and driving
              sales.
            </p>
          </div>
        </div>
      </div>
      <main className={'-translate-y-4'}>
        {/* Pricing Section */}
        <section className="relative" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="sr-only">
            Pricing
          </h2>

          {/* Tiers */}
          <div className="mx-auto max-w-2xl space-y-12 px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 lg:px-8">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.i18nTitle}
                className={classNames(
                  'relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm'
                )}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {translate(tier.i18nTitle)}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 py-1.5 px-4 text-xs font-semibold uppercase tracking-wide text-white">
                      Most popular
                    </p>
                  ) : null}
                  <p className="mt-4 flex items-baseline text-gray-900">
                    {isFrequencyPricing(tier.i18nBilling) ? (
                      <>
                        <span className="text-5xl font-extrabold tracking-tight">
                          ${tier.payload?.price}
                        </span>
                        <span className="ml-1 text-xl font-semibold">
                          /{translate(tier.i18nBilling)}
                        </span>
                      </>
                    ) : (
                      <span className="text-5xl font-extrabold tracking-tight">
                        {translate(tier.i18nBilling)}
                      </span>
                    )}
                  </p>
                  <p className="mt-6 text-gray-500">
                    {translate(tier.i18nDescription)}
                  </p>

                  {/* Feature list */}
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex">
                        <CheckIcon
                          className="h-6 w-6 flex-shrink-0 text-indigo-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                    'mt-8 block w-full rounded-md border border-transparent py-3 px-6 text-center font-medium'
                  )}
                >
                  {translate(tier.i18nCta)}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Logo Cloud */}
        <section
          aria-labelledby="customer-heading"
          className="mx-auto max-w-2xl py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
        >
          <h2 id="customer-heading" className="sr-only">
            Our customers
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <div className="relative">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-white to-gray-50"
          />

          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative overflow-hidden rounded-xl bg-indigo-500 py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
              <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
                <img
                  src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative lg:col-span-1">
                <img
                  className="h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                  alt=""
                />
                <blockquote className="mt-6 text-white">
                  <p className="text-xl font-medium sm:text-2xl">
                    Workflow has completely transformed how we interact with
                    freelancers. We've seen more productivity, higher development interaction, 
                    and reduced churn.
                  </p>
                  <footer className="mt-6">
                    <p className="flex flex-col font-medium">
                      <span>Marie Chilvers</span>
                      <span>CEO, Workcation</span>
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className="mx-auto max-w-2xl divide-y divide-gray-200 py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
        >
          <h2
            id="faq-heading"
            className="text-3xl font-extrabold text-gray-900"
          >
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
    </>
  )
}

Pricing.withLayout = withMainLayout

export default Pricing
