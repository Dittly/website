import BasePageComponent from '../components/base-page'
import withAuth from '../components/with-auth'
import Layout from '../components/layouts'
import WelcomeContent from '../src/welcome'

export class Welcome extends BasePageComponent {
  render() {
    return (
      <Layout>
        <WelcomeContent {...this.props} />
      </Layout>
    )
  }
}

export default withAuth(Welcome)
