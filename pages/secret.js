import React from 'react'
import PropTypes from 'prop-types'

import MainLayout from '../components/layouts/main'
import withAuth from '../components/with-auth'

const Secret = ({loggedInUser, signOut}) => (
  <MainLayout>
    Hello {loggedInUser.user.name}!<br />
    <button onClick={signOut}>Sign out</button>
  </MainLayout>
)

Secret.propTypes = {
  signOut: PropTypes.func.isRequired,
  loggedInUser: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  })
}

export default withAuth(Secret)
