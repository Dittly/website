import {Link} from '../utils/routes'
import {projectRoutes} from '../utils/routes/routes-definitions'

import Box from '../components/box'
import Search from '../components/search'
import Section from '../components/section'
import HeadBanner from '../components/head-banner'
import ContextButton from '../components/context-button'

const Index = () => (
  <div>
    <Search />
    <HeadBanner>
      <Section>
        <h1>Welcome!</h1>
        <p>
          Get started by creating your own project, or see what projects other’s
          have done.
        </p>
        <Link route={projectRoutes.create.name}>
          <a>+ Create Project</a>
        </Link>
      </Section>
      <Box>
        <ContextButton>Projects</ContextButton>
      </Box>
    </HeadBanner>
  </div>
)

export default Index
