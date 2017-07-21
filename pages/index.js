import withData from '../utils/apollo/with-data'
import MainLayout from '../components/layouts/main'
import IndexContent from '../src'

const Index = (props) => (
  <MainLayout>
    <IndexContent />
  </MainLayout>
)

export default withData(Index)
