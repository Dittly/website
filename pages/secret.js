import React from 'react'
import cookie from 'cookie'
import { withApollo, compose } from 'react-apollo'

import { authRoutes } from '../utils/routes/routes-definitions'

import withData from '../utils/apollo/with-data'
import redirect from '../utils/apollo/redirect'
import checkLoggedIn from '../utils/apollo/check-logged-in'
import MainLayout from '../components/layouts/main'

class Secret extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)

    if (!loggedInUser.user) {
      // If not signed in, send them somewhere more useful
      redirect(context, authRoutes.login)
    }

    return { loggedInUser }
  }

  signout = () => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1 // Expire the cookie immediately
    })

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    this.props.client.resetStore().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, authRoutes.login)
    })
  }

  render() {
    return (
      <MainLayout>
        Hello {this.props.loggedInUser.user.name}!<br />
        <button onClick={this.signout}>Sign out</button>
      </MainLayout>
    )
  }
}

export default compose(
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo
)(Secret)
