import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

import { NextPageWithLayout } from './_app'
import withMainLayout from '../layouts/withMainLayout'

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

const Home: NextPageWithLayout = () => {
  const { t: translate } = useTranslation('homepage')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>{translate('title')}</title>
        <meta name="description" content={translate('description')} />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>{translate('hero_heading')}</h1>
        <h2>{translate('hero_subheading')}</h2>
      </main>
    </div>
  )
}

Home.withLayout = withMainLayout

export default Home
