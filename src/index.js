import Box from '../components/box'
import CreateButton from '../components/create-button'
import Search from '../components/search'
import Section from '../components/section'
import HeadBanner from '../components/head-banner'
import ContextButton from '../components/context-button'

const Index = () => (
  <div>
    <Search mobile />
    <HeadBanner>
      <Section>
        <div>
          <h1>Welcome!</h1>
          <p>
            Get started by creating your own project, or see what projects
            other’s have done.
          </p>
        </div>
        <CreateButton />
      </Section>
      <Box>
        <ContextButton>Projects</ContextButton>
      </Box>
    </HeadBanner>
  </div>
)

export default Index
