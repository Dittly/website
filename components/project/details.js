import PropTypes from 'prop-types'

export const ProjectDetails = ({id, title, location, type, user}) => (
  <div>
    <h1>{title}</h1><small>(#{id})</small><br />
    <small>{location}</small><br />
    <p>Type: {type}</p><br />
    <img src="https://unsplash.it/200/?random" alt={title} />
    <p>{user.name}</p>
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
