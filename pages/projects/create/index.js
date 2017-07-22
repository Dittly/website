import withAuth from '../../../components/with-auth'
import MainLayout from '../../../components/layouts/main'
import CreateContent from '../../../src/projects/create'

const Create = (props) => (
  <MainLayout>
    <CreateContent {...props} />
  </MainLayout>
)

export default withAuth(Create)
