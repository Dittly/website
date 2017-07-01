import PageHeader from './page-header'
import EmailInput from './email-input'
import Logo from './logo'
import Text from './text'

const LandingPage = () => (
  <div>
    <PageHeader>
      When it comes to home&#8209;improvement,<br /> do it together.
    </PageHeader>
    <div>
      <Text color="#9B9B9B">Coming Soon</Text>
      <Logo />
      <Text>Plan - Connect - Build</Text>
    </div>
    <label>Subscibe for progress updates and to be the first one to recieve an invitaion the instant we launch.</label>
    <EmailInput />
    <p>Coming to your smartphone, tablet, and desktop computer.</p>
  </div>
)

export default LandingPage
