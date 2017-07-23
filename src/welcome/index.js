import PropTypes from 'prop-types'
import {graphql} from 'react-apollo'
import {getAllProjects} from './gq'

import ProjectList from '../../components/project/list'

const Loading = () => (
  <p>Loading projects...</p>
)

const Welcome = ({loggedInUser, signOut, data: {loading, allProjects}}) => (
  <div>
    Hello {loggedInUser.user.name}!<br />
    <button onClick={signOut}>Sign out</button>
    {
      loading ? <Loading /> : <ProjectList isLoading={loading} projects={allProjects} />
    }
  </div>
)

Welcome.propTypes = {
  signOut: PropTypes.func.isRequired,
  data: PropTypes.shape({
    allProjects: PropTypes.array,
    loading: PropTypes.bool
  }),
  loggedInUser: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  })
}

export default graphql(getAllProjects)(Welcome)
