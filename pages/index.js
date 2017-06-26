import MainLayout from '../components/layouts/main'
// The LandingPage is a placeholder until we go live
import LandingPage from '../components/landing-page'

import withData from '../utils/apollo/with-data'

export default withData((props) => (
  <MainLayout>
    <LandingPage />
  </MainLayout>
))