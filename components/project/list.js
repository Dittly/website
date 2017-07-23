import PropTypes from 'prop-types'
import {Link} from '../../utils/routes'
import {projectRoutes} from '../../utils/routes/routes-definitions'

export const ProjectListThumbnail = ({id, title, location, type, user}) => (
  <div>
    <Link route={projectRoutes.details.name} params={{id}}><a><h1>{title}</h1></a></Link><br />
    <small>{location}</small><br />
    <p>Type: {type}</p><br />
    <img src="https://unsplash.it/200/?random" alt={title} />
    <p>{user.name}</p>
  </div>
)

ProjectListThumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

const ProjectList = ({projects}) => (
  <div>
    {
      projects.map((project) => (
        <ProjectListThumbnail key={project.id} {...project} />
      ))
    }
  </div>
)

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
}

export default ProjectList
