import React from 'react'
import PropTypes from 'prop-types'
import cookie from 'cookie'
import {withApollo, compose} from 'react-apollo'

import checkLoggedIn from '../../utils/apollo/check-logged-in'
import withData from '../../utils/apollo/with-data'

import {authRoutes} from '../../utils/routes/routes-definitions'
import redirect from '../../utils/apollo/redirect'

export default (WrappedComponent) => {
  class WithAuth extends React.Component {
    static async getInitialProps(context, apolloClient) {
      const {loggedInUser} = await checkLoggedIn(context, apolloClient)

      if (!loggedInUser.user) {
        // If not signed in, send them somewhere more useful
        redirect(context, authRoutes.login)
      }

      return {loggedInUser}
    }

    signOut = () => {
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
        <WrappedComponent {...this.props} signOut={this.signOut} />
      )
    }
  }

  WithAuth.propTypes = {
    client: PropTypes.shape({
      resetStore: PropTypes.func.isRequired
    })
  }

  return compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    // withApollo exposes `this.props.client` used when logging out
    withApollo
  )(WithAuth)
}
