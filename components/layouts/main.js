import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'

const MainLayout = ({children, pageTitle}) => (
  <div>
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string
}

MainLayout.defaultProps = {
  pageTitle: 'Dittly - When it comes to home‑improvement, do it together.'
}

export default MainLayout
