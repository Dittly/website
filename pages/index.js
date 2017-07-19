import MainLayout from '../components/layouts/main'
import withData from '../utils/apollo/with-data'

const Index = (props) => (
  <MainLayout>
    Homepage
  </MainLayout>
)

export default withData(Index)
