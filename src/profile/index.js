import styled from 'styled-components'
import PropTypes from 'prop-types'
import {graphql} from 'react-apollo'
import {getAllProjects} from './gq'
import {media} from '../../styles/media'

import ProjectList from '/components/project/list'

import Avatar from '/components/avatar'
import CreateButton from '/components/create-button'
import Box from '/components/box'
import Section from '/components/section'
import HeadBanner from '/components/head-banner'
import HeaderBar from '/components/header-bar'
import ContextButton from '/components/context-button'

export const Loading = () => <p>Loading projects...</p>

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;

  ${media.tablet`
    justify-content: end;
  `};
`

export const ProfileWrapper = ({
  loggedInUser,
  signOut,
  data: {loading, allProjects}
}) => (
  <div>
    <HeaderBar>{loggedInUser.user.name}</HeaderBar>
    <HeadBanner>
      <Section>
        <FlexContainer>
          <Avatar large />
          <Box pl={1}>
            <h1>{loggedInUser.user.name}</h1>
          </Box>
        </FlexContainer>
        <div>
          <a onClick={signOut} onKeyPress={signOut} role="link" tabIndex={0}>
            Sign out
          </a>
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

ProfileWrapper.propTypes = {
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

export default graphql(getAllProjects, {
  options: ({loggedInUser}) => ({
    variables: {userId: loggedInUser.user.id}
  })
})(ProfileWrapper)
