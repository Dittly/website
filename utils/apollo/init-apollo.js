import { ApolloClient, createNetworkInterface } from 'react-apollo'
import fetch from 'isomorphic-fetch'

let apolloClient = null

/* istanbul ignore next */
// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) { // eslint-disable-line no-undef
  global.fetch = fetch
}

const create = (initialState, { getToken }) => {
  const networkInterface = createNetworkInterface({
    // Server URL (must be absolute)
    uri: 'https://api.graph.cool/simple/v1/cj4c5zajubgpn0142pihd2xs3',
    // Additional fetch() options like `credentials` or `headers`
    opts: {
      credentials: 'same-origin'
    }
  })

  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {} // Create the header object if needed.
      }
      const token = getToken()
      req.options.headers.authorization = token ? `Bearer ${token}` : null
      next()
    }
  }])

  return new ApolloClient({
    initialState,
    // Disables forceFetch on the server (so queries are only run once)
    ssrMode: !process.browser, // eslint-disable-line no-undef
    networkInterface
  })
}

export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) { // eslint-disable-line no-undef
    return create(initialState, options)
  }

  /* istanbul ignore else */
  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}
