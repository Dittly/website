import {Link} from '../utils/routes'
import {projectRoutes} from '../utils/routes/routes-definitions'

const Index = () => (
  <div>
    <h1>Welcome!</h1>
    <p>Get started by creating your own project, or see what projects other’s have done.</p>
    <Link route={projectRoutes.create.name}><a>+ Create Project</a></Link>
  </div>
)

export default Index
