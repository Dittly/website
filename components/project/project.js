import ProjectSC from './project-sc'
import PropTypes from 'prop-types'

const Project = ({children}) => <ProjectSC>{children}</ProjectSC>

Project.propTypes = {
  children: PropTypes.node.isRequired
}

export default Project
