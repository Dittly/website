import BasePageComponent from '../components/base-page'
import withAuth from '../components/with-auth'
import Layout from '../components/layouts'
import ProfileContent from '../src/profile/index'

export class Profile extends BasePageComponent {
  render() {
    return (
      <Layout>
        <ProfileContent {...this.props} />
      </Layout>
    )
  }
}

export default withAuth(Profile)
