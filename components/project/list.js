import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Link} from '../../utils/routes'
import {projectRoutes} from '../../utils/routes/routes-definitions'
import {sizes, neutrals, colors, typography} from '../../styles/constants'

import Card from '../card'
import H1 from '../h1'
import Box from '../box'
import Profile from '../profile'

const ProjectTitle = styled.h1`
  margin: 0;

  color: ${neutrals.neutral50};
  font-weight: 400;
  font-family: ${typography.fontFamily};
  font-size: 16px;
`

const Soft = styled.small`
  color: ${neutrals.neutral40};
  font-size: 10px;
`

const ProjectImage = styled.div`
  display: block;
  width: 100%;
  margin: 8px 0;

  text-align: center;
`

export const ProjectListThumbnail = ({id, title, location, type, user}) => (
  <div>
    <Card>
      <Box p={1}>
        <Link route={projectRoutes.details.name} params={{id}}><a><ProjectTitle secondary>{title}</ProjectTitle></a></Link>
        <Soft>{location}, {type}</Soft>
        <ProjectImage>
          <img src="https://unsplash.it/200/?random" alt={title} />
        </ProjectImage>
        <Profile userName={user.name} />
      </Box>
    </Card>
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
