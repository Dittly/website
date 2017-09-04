import PropTypes from 'prop-types'
import {graphql} from 'react-apollo'
import {getAllProjects} from './gq'

import ProjectList from '../../components/project/list'
import Button from '../components/button'


export const Loading = () => (
  <p>Loading projects...</p>
)

export const WelcomeWrapper = ({loggedInUser, signOut, data: {loading, allProjects}}) => (
  <div>
    Hello {loggedInUser.user.name}!<br />
    <Button onClick={signOut}>Sign out</Button>
    {
      loading ? <Loading /> : <ProjectList isLoading={loading} projects={allProjects} />
    }
  </div>
)

WelcomeWrapper.propTypes = {
  data: PropTypes.shape({
    allProjects: PropTypes.array,
    loading: PropTypes.bool
  }).isRequired,
  loggedInUser: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }).isRequired,
  signOut: PropTypes.func.isRequired
}

export default graphql(getAllProjects)(WelcomeWrapper)
