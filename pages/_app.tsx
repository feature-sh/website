import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { GoogleAnalyticsProvider } from '../context/google-analytics/google-analytics-provider'

import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  withLayout: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const withLayout = Component.withLayout || ((page) => page)

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());


          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Script
        src={`https://www.googleoptimize.com/optimize.js?id=${process.env.NEXT_PUBLIC_OPTIMIZE_CONTAINER_ID}`}
      />
      <GoogleAnalyticsProvider>
        {withLayout(<Component {...pageProps} />)}
      </GoogleAnalyticsProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
