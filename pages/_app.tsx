import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { Fragment } from 'react'

export type NextPageWithLayout = NextPage & {
  withLayout: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const withLayout = Component.withLayout || ((page) => page)

  return <Fragment>{withLayout(<Component {...pageProps} />)}</Fragment>
}

export default appWithTranslation(MyApp)
