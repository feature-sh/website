import Image from 'next/image'

import { NextPageWithLayout } from './_app'
import withMainLayout from '../layouts/withMainLayout'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import {
  CashIcon,
  CogIcon,
  InboxIcon,
  SparklesIcon,
} from '@heroicons/react/outline'
import { GitHubIcon } from '../components/icons'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'feature',
        'header',
        'footer',
      ])),
    },
  }
}

const Features: NextPageWithLayout = () => {
  const { t: translate } = useTranslation('feature')

  return (
    <div className="bg-white pb-8 sm:pb-12 xl:pb-12">
      <div className="flex-col items-center overflow-hidden bg-gray-900 px-4 pt-24 pb-12 xl:relative xl:flex xl:flex-row xl:justify-between xl:py-48 2xl:px-0">
        <div className="mx-auto max-w-5xl text-center xl:text-left">
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
            {translate('hero_headline')}
          </h1>
          <h2 className="text-5xl font-extrabold tracking-tight text-indigo-500 text-white md:text-6xl">
            {translate('hero_subheadline')}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300 xl:mx-0">
            {translate('hero_description')}
          </p>
        </div>

        <div
          className={
            'mt-12 flex items-center justify-center xl:mt-0 xl:flex-shrink-0'
          }
        >
          <Image
            width={660}
            height={467}
            className="shadow-xl"
            src={'/features/transactions.png'}
            alt=""
          />
        </div>
      </div>

      <section className="relative overflow-hidden pt-16 pb-32" style={{
        background: 'linear-gradient(180deg, rgba(0, 194, 0, 0.05) 0%, rgba(0, 194, 0, 0) 100%)',
      }}>
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wider text-green-500">
              {translate('start_headline')}
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {translate('start_subheadline')}
            </p>
          </div>
        </div>
        <div className="relative mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-green-500/20 bg-gradient-to-r">
                    <GitHubIcon
                      className="h-6 w-6 fill-green-500 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {translate('start_block_1_headline')}
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    {translate('start_block_1_description')}
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex rounded-md border border-transparent bg-green-500 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                    >
                      {translate('start_block_1_cta')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/features/native-interaction.png"
                  alt="Native GitHub interaction illustration"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-green-500/20">
                    <CashIcon
                      className="h-6 w-6 text-white text-green-500"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {translate('start_block_2_headline')}
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    {translate('start_block_2_description')}
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex rounded-md border border-transparent bg-green-500 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                    >
                      {translate('start_block_2_cta')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/features/payment-integration.png"
                  alt="Payment integration illustration"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-8 lg:pl-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-green-500/20 bg-gradient-to-r">
                    <CogIcon
                      className="h-6 w-6 text-green-500 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {translate('start_block_3_headline')}
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    {translate('start_block_3_description')}
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex rounded-md border border-transparent bg-green-500 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                    >
                      {translate('start_block_3_cta')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex lg:pt-6 flex-shrink-0 flex-col items-center justify-center sm:mt-16 lg:mt-0">
              {[1, 2, 3].map((txnExampleId) => (
                <Image
                  key={txnExampleId}
                  src={`/features/txn-example-${txnExampleId}.png`}
                  alt={`transaction example ${txnExampleId}`}
                  width={758}
                  height={142}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Features.withLayout = withMainLayout

export default Features
