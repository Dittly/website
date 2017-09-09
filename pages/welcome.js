import React from 'react'

import withAuth from '../components/with-auth'
import MainLayout from '../components/layouts/main'
import WelcomeContent from '../src/welcome'

export const Welcome = props => (
  <MainLayout>
    <WelcomeContent {...props} />
  </MainLayout>
)

export default withAuth(Welcome)
