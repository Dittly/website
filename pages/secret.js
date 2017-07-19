import React from 'react'

import MainLayout from '../components/layouts/main'
import withAuth from '../components/with-auth'

const Secret = ({ loggedInUser, signOut }) => (
  <MainLayout>
    Hello {loggedInUser.user.name}!<br />
    <button onClick={signOut}>Sign out</button>
  </MainLayout>
)

export default withAuth(Secret)
