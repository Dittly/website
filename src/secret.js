import PropTypes from 'prop-types'

const Secret = ({loggedInUser, signOut}) => (
  <div>
    Hello {loggedInUser.user.name}!<br />
    <button onClick={signOut}>Sign out</button>
  </div>
)

Secret.propTypes = {
  signOut: PropTypes.func.isRequired,
  loggedInUser: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  })
}

export default Secret
