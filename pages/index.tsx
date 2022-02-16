import { Fragment } from 'react'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

import Header from '../components/Header';
import Footer from '../components/Footer'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['homepage', 'header', 'footer'])),
    },
  }
}

const Home = () => {
  const { t } = useTranslation('homepage')

  return (
    <Fragment>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Feature</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
          <h1>{t('hero_heading')}</h1>
          <h2>{t('hero_subheading')}</h2>
        </main>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Home;
