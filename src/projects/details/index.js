import PropTypes from 'prop-types'
import {graphql} from 'react-apollo'
import {getProject} from './gq'

import ProjectDetails from './components/details'

export const Loading = () => <p>Loading project...</p>

export const ProjectDetailsWrapper = ({data: {loading, Project}}) => (
  <div>{loading ? <Loading /> : <ProjectDetails {...Project} />}</div>
)

ProjectDetailsWrapper.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    Project: PropTypes.object
  })
}

export default graphql(getProject, {
  options: /* istanbul ignore next */ ({url: {query: {id}}}) => {
    return {
      variables: {
        projectId: id
      }
    }
  }
})(ProjectDetailsWrapper)
