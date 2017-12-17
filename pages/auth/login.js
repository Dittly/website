import BasePageComponent from '/components/base-page'
import {graphql, withApollo, compose} from 'react-apollo'
import gql from 'graphql-tag'
import cookie from 'cookie'

import Layout from '/components/layouts'
import {homeRoutes} from '/utils/routes/routes-definitions'

import withData from '/utils/apollo/with-data'
import redirect from '/utils/apollo/redirect'
import checkLoggedIn from '/utils/apollo/check-logged-in'
import LoginContent from '/src/auth/login'

export class Login extends BasePageComponent {
  /* istanbul ignore next */
  static async getInitialProps(context, apolloClient) {
    const {loggedInUser} = await checkLoggedIn(context, apolloClient)

    if (loggedInUser.user) {
      // Already signed in? No need to continue.
      // Throw them back to the welcome page
      redirect(context, homeRoutes.welcome)
    }

    return {}
  }

  render() {
    return (
      <Layout>
        <LoginContent {...this.props} />
      </Layout>
    )
  }
}

export const _signInSuccess = client => ({data: {signinUser: {token}}}) => {
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
}

export const _signInError = error => {
  // Something went wrong, such as incorrect password, or no network
  // available, etc.
  console.error(error)
}

export const _mapApolloDataToProps = ({
  signinWithEmail,
  // `client` is provided by the `withApollo` HOC
  ownProps: {client}
}) => ({
  // `signin` is the name of the prop passed to the component
  signin: /* istanbul ignore next*/ event => {
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
      .then(_signInSuccess(client))
      .catch(_signInError)
  }
})

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
      props: _mapApolloDataToProps
    }
  )
)(Login)
