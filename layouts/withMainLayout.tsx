import { Fragment, ReactElement } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

const withMainLayout = (page: ReactElement) => (
  <Fragment>
    <Header />
    {page}
    <Footer />
  </Fragment>
)

export default withMainLayout
