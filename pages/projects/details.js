import BasePageComponent from '../../components/base-page'
import withAuth from '../../components/with-auth'
import MainLayout from '../../components/layouts/main'
import DetailsContent from '../../src/projects/details'

export class Details extends BasePageComponent {
  render() {
    return (
      <MainLayout>
        <DetailsContent {...this.props} />
      </MainLayout>
    )
  }
}

export default withAuth(Details)
