import withAuth from '../../components/with-auth'
import MainLayout from '../../components/layouts/main'
import DetailsContent from '../../src/projects/details'

export const Details = (props) => (
  <MainLayout>
    <DetailsContent {...props} />
  </MainLayout>
)

export default withAuth(Details)
