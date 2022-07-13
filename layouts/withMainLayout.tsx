import { ReactElement } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

const withMainLayout = (page: ReactElement) => (
  <>
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QL9D3K"
      height="0" width="0" style={{display: 'none',visibility: 'hidden'}} />
    </noscript>
    <Header />
    {page}
    <Footer />
  </>
)

export default withMainLayout
