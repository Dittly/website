import {Link} from '../utils/routes'
import {projectRoutes} from '../utils/routes/routes-definitions'

import Box from '../components/box'
import Button from '../components/button'
import Search from '../components/search'
import Section from '../components/section'
import Add from '../components/add'
import HeadBanner from '../components/head-banner'
import ContextButton from '../components/context-button'

const Index = () => (
  <div>
    <Search />
    <HeadBanner>
      <Section >
        <h1 center >Welcome!</h1>
        <p>Get started by creating your own project, or see what projects other’s have done.</p>
        <Link route={projectRoutes.create.name}><Add >+ Create Project</Add></Link>
      </Section>
      <Box>
      <ContextButton>Projects</ContextButton>
    </Box>
    </HeadBanner>


  </div>
)

export default Index
