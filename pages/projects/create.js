import BasePageComponent from '../../components/base-page'
import withAuth from '../../components/with-auth'
import MainLayout from '../../components/layouts/main'
import CreateContent from '../../src/projects/create'

export class Create extends BasePageComponent {
  render() {
    return (
      <MainLayout>
        <CreateContent {...this.props} />
      </MainLayout>
    )
  }
}

export default withAuth(Create)
