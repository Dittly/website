import BasePageComponent from '../components/base-page'
import withAuth from '../components/with-auth'
import MainLayout from '../components/layouts/main'
import WelcomeContent from '../src/welcome'

export class Welcome extends BasePageComponent {
  render() {
    return (
      <MainLayout>
        <WelcomeContent {...this.props} />
      </MainLayout>
    )
  }
}

export default withAuth(Welcome)
