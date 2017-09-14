import PropTypes from 'prop-types'
import HeaderBar from '../header-bar'
import HeadBanner from '../head-banner'
import Section from '../section'
import Box from '../box'
import Profile from '../profile'

export const ProjectDetails = ({id, title, location, type, user}) => (
  <div>
    <HeaderBar>{title}</HeaderBar>
    <HeadBanner>
      <Profile />
      {user.name}
      <Section>
        <small>(#{id})</small>
        <br />
        <small>{location}</small>
        <br />
        <p>Type: {type}</p>
        <br />
      </Section>
      <Box>
        <img src="https://unsplash.it/400/?random" alt={title} />
      </Box>
    </HeadBanner>
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
