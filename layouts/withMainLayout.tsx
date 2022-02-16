import { ReactElement } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

const withMainLayout = (page: ReactElement) => (
  <>
    <Header />
    {page}
    <Footer />
  </>
)

export default withMainLayout
