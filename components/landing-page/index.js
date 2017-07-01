import PageHeader from './page-header'
import EmailInput from './email-input'
import Header from './header'

const LandingPage = () => (
  <div>
    <Header />
    <PageHeader>
      Welcome to Dittly!
    </PageHeader>
    <p>When it comes to home-improvement, do it together.</p>
    <p><small>Introducing</small></p>
    <h2>Dittly</h2>
    <EmailInput />
  </div>
)

export default LandingPage
