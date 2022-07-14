import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Script from 'next/script'

import '../styles/globals.css'

export type NextPageWithLayout = NextPage & {
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
        id="googletagmanager"
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
        id="google-optimize"
      />
      <Script id="matomo">
        {`
          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="https://feature.matomo.cloud/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='//cdn.matomo.cloud/feature.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `}
      </Script>
      <Script id="gtm">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5QL9D3K');
        `}
      </Script>
      {withLayout(<Component {...pageProps} />)}
    </>
  )
}

export default appWithTranslation(MyApp)
