import React from 'react'

import withAuth from '../components/with-auth'
import MainLayout from '../components/layouts/main'
import SecretContent from '../src/secret'

const Secret = (props) => (
  <MainLayout>
    <SecretContent {...props} />
  </MainLayout>
)

export default withAuth(Secret)
