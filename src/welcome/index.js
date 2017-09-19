import PropTypes from 'prop-types'
import {graphql} from 'react-apollo'
import {getAllProjects} from './gq'
import {Link} from '/utils/routes'
import {projectRoutes} from '/utils/routes/routes-definitions'

import ProjectList from '/components/project/list'

import Box from '/components/box'
import Search from '/components/search'
import Section from '/components/section'
import HeadBanner from '/components/head-banner'
import ContextButton from '/components/context-button'

export const Loading = () => <p>Loading projects...</p>

export const WelcomeWrapper = ({
  loggedInUser,
  signOut,
  data: {loading, allProjects}
}) => (
  <div>
    <Search />
    <HeadBanner>
      <Section>
        <h1>Hello {loggedInUser.user.name}!</h1>
        <p>
          We&#39;ve added a new feature! You can now add photos along with your
          posts.
        </p>
        <a onClick={signOut} onKeyPress={signOut} role="link" tabIndex={0}>
          Sign out
        </a>
        <Link route={projectRoutes.create.name}>
          <a>+ Create Project</a>
        </Link>
      </Section>
      <Box>
        <ContextButton>Projects</ContextButton>
      </Box>
    </HeadBanner>
    <Box p={1}>
      {loading ? (
        <Loading />
      ) : (
        <ProjectList isLoading={loading} projects={allProjects} />
      )}
    </Box>
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
