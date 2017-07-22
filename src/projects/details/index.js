import {graphql} from 'react-apollo'
import {getProject} from './gq'

import ProjectDetails from '../../../components/project/details'

const Loading = () => (
  <p>Loading project...</p>
)

const Details = ({data: {loading, Project}}) => (
  <div>
    {
      loading ? <Loading /> : <ProjectDetails {...Project} />
    }
  </div>
)

export default graphql(getProject, {
  options: ({url: {query: {id}}}) => {
    return ({
      variables: {
        projectId: id
      }
    })
  }
})(Details)
