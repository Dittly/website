import styled from 'styled-components'

import {neutrals} from '../../styles/constants'
import {media} from '../../styles/media'

import PropTypes from 'prop-types'
import HeaderBar from '../header-bar'
import Box from '../box'
import HeadBanner from '../head-banner'
import Section from '../section'
import Profile from '../profile'
import Journey from './journey'

const ProjectOwner = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;

  ${media.phone`
    justify-content: start;
  `};
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4px;
`

const Dt = styled.dt`
  display: inline;
  text-transform: uppercase;
  color: ${neutrals.neutral40};
  font-weight: 500;
  font-size: 12px;
`

const Dd = styled.dd`
  display: inline;
  margin: 0;
`

const MobileSlide = styled.div`
  img {
    width: 100%;
  }
  ${media.phone`
    display: none;
  `};
`
const DesktopTitle = styled.h1`
  display: none;
  ${media.phone`
    display: block;
    margin: 0;
    padding: 8px 0;
    font-size: 28px;
  `};
`

export const ProjectDetails = ({id, title, location, type, user}) => (
  <div>
    <HeaderBar>{title}</HeaderBar>
    <HeadBanner>
      <Box p={1}>
        <DesktopTitle>{title}</DesktopTitle>
        <ProjectOwner>
          <Profile userName={user.name} />
        </ProjectOwner>
        <Section>
          <small>(#{id})</small>
          <FlexContainer>
            <div>
              <Dt>Location: </Dt>
              <Dd>{location}</Dd>
            </div>
            <div>
              <Dt>Type: </Dt>
              <Dd>{type}</Dd>
            </div>
          </FlexContainer>
        </Section>
        <MobileSlide>
          <img src="https://unsplash.it/400/?random" alt={title} />
        </MobileSlide>
      </Box>
    </HeadBanner>
    <Box p={1}>
      <Journey />
    </Box>
  </div>
)

ProjectDetails.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

export default ProjectDetails
