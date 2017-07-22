import {Link} from '../../utils/routes'
import {projectRoutes} from '../../utils/routes/routes-definitions'

export const ProjectListThumbnail = ({id, title, location, type, user}) => (
  <div>
    <Link route={projectRoutes.details.name} params={{id}}><a><h1>{title}</h1></a></Link><br />
    <small>{location}</small><br />
    <img src="https://unsplash.it/200/?random" alt={title} />
    <p>{user.name}</p>
  </div>
)

const ProjectList = ({projects}) => (
  <div>
    {
      projects.map((project) => (
        <ProjectListThumbnail key={project.id} {...project} />
      ))
    }
  </div>
)

export default ProjectList
