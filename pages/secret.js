import React from 'react'

import MainLayout from '../components/layouts/main'
import withAuth from '../components/with-auth'

const Secret = () => (
  <MainLayout>
    Hello {this.props.loggedInUser.user.name}!<br />
    <button onClick={this.props.signOut}>Sign out</button>
  </MainLayout>
)

export default withAuth(Secret)
