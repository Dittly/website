import BasePageComponent from '../../components/base-page'
import withAuth from '../../components/with-auth'
import Layout from '../../components/layouts'
import DetailsContent from '../../src/projects/details'

export class Details extends BasePageComponent {
  render() {
    return (
      <Layout>
        <DetailsContent {...this.props} />
      </Layout>
    )
  }
}

export default withAuth(Details)
