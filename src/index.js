import {Link} from '../utils/routes'
import {projectRoutes} from '../utils/routes/routes-definitions'

import Button from '../components/button'
import Search from '../components/search'
import Section from '../components/section'
import Add from '../components/add'
import Card from '../components/card'

const Index = () => (
  <div>
    <Search />
    <Card>
      <Section >
        <h1 center >Welcome!</h1>
        <p>Get started by creating your own project, or see what projects other’s have done.</p>
        <Link route={projectRoutes.create.name}><Add >+ Create Project</Add></Link>
      </Section>
    </Card>

  </div>
)

export default Index
