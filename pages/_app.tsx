import { ReactElement, ReactNode, Fragment } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import '../styles/globals.css'

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
