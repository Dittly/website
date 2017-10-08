import PropTypes from 'prop-types'
import {graphql} from 'react-apollo'
import {getAllProjects} from './gq'

import ProjectList from '/components/project/list'

import Box from '/components/box'
import CreateButton from '/components/create-button'
import Search from '/components/search'
import Section from '/components/section'
import HeadBanner from '/components/head-banner'
import ContextButton from '/components/context-button'

export const Loading = () => <p>Loading projects...</p>

export const WelcomeWrapper = ({
  loggedInUser,
  data: {loading, allProjects}
}) => (
  <div>
    <Search mobile />
    <HeadBanner>
      <Section>
        <div>
          <h1>Hello {loggedInUser.user.name}!</h1>
          <p>
            We&#39;ve added a new feature! You can now add photos along with
            your posts.
          </p>
        </div>
        <div>
          <CreateButton />
        </div>
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
