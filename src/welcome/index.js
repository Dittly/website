import PropTypes from 'prop-types'
import {graphql} from 'react-apollo'
import {getAllProjects} from './gq'

import ProjectList from '../../components/project/list'

const Welcome = ({loggedInUser, signOut, data}) => (
  <div>
    Hello {loggedInUser.user.name}!<br />
    <button onClick={signOut}>Sign out</button>
    <ProjectList isLoading={data.loading} projects={data.allProjects} />
  </div>
)

Welcome.propTypes = {
  signOut: PropTypes.func.isRequired,
  loggedInUser: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  })
}

export default graphql(getAllProjects)(Welcome)
