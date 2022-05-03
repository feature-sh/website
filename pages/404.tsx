import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from './_app'
import withMainLayout from '../layouts/withMainLayout'

const NotFound: NextPageWithLayout = () => {
  const { t: translate } = useTranslation('404')

  return (
    <div className="min-h-full bg-gray-900 px-4 sm:px-6 py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {translate('title')}
              </h1>
              <p className="mt-1 mt-2 text-base text-neutral-200">
                {translate('subtitle')}
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link href={'/'}>
                <a className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  {translate('cta_go_back')}
                </a>
              </Link>
              <Link href={'/contact'}>
                <a className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  {translate('cta_contact')}
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

NotFound.withLayout = withMainLayout

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'header',
        'footer',
        '404',
      ])),
    },
  }
}

export default NotFound
