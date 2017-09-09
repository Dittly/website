import React from 'react'
import {graphql, gql, withApollo, compose} from 'react-apollo'
import cookie from 'cookie'

import MainLayout from '../../components/layouts/main'
import {homeRoutes} from '../../utils/routes/routes-definitions'

import withData from '../../utils/apollo/with-data'
import redirect from '../../utils/apollo/redirect'
import checkLoggedIn from '../../utils/apollo/check-logged-in'
import LoginContent from '../../src/auth/login'

export class Login extends React.Component {
  /* istanbul ignore next */
  static async getInitialProps(context, apolloClient) {
    const {loggedInUser} = await checkLoggedIn(apolloClient)

    if (loggedInUser.user) {
      // Already signed in? No need to continue.
      // Throw them back to the welcome page
      redirect(context, homeRoutes.welcome)
    }

    return {}
  }

  render() {
    return (
      <MainLayout>
        <LoginContent {...this.props} />
      </MainLayout>
    )
  }
}

export default compose(
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo,
  graphql(
    // The `signinUser` mutation is provided by graph.cool by default
    gql`
      mutation Signin($email: String!, $password: String!) {
        signinUser(email: {email: $email, password: $password}) {
          token
        }
      }
    `,
    {
      // Use an unambiguous name for use in the `props` section below
      name: 'signinWithEmail',
      // Apollo's way of injecting new props which are passed to the component
      props: ({
        signinWithEmail,
        // `client` is provided by the `withApollo` HOC
        ownProps: {client}
      }) => ({
        // `signin` is the name of the prop passed to the component
        signin: event => {
          /* global FormData */
          const data = new FormData(event.target)

          event.preventDefault()
          event.stopPropagation()

          signinWithEmail({
            variables: {
              email: data.get('email'),
              password: data.get('password')
            }
          })
            .then(({data: {signinUser: {token}}}) => {
              // Store the token in cookie
              document.cookie = cookie.serialize('token', token, {
                maxAge: 30 * 24 * 60 * 60 // 30 days
              })

              // Force a reload of all the current queries now that the user is
              // logged in
              client.resetStore().then(() => {
                // Now redirect to the secret
                redirect({}, homeRoutes.welcome)
              })
            })
            .catch(error => {
              // Something went wrong, such as incorrect password, or no network
              // available, etc.
              console.error(error)
            })
        }
      })
    }
  )
)(Login)
