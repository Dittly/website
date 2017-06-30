import MainLayout from '../components/layouts/main'
import Header from '../components/header'
import withData from '../utils/apollo/with-data'

export default withData((props) => (
  <MainLayout>
    <Header />
  </MainLayout>
))
