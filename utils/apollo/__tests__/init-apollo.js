/* eslint-env jest, node */
import initApollo, {_create} from '../init-apollo'

const verifyAuthorizationMiddlewareApplied = (middlewares) => {
  const authorizationMiddleware = middlewares[0]
  const mockNextFn = jest.fn()

  // Without request headers
  let mockReq = {
    options: {}
  }
  authorizationMiddleware.applyMiddleware(mockReq, mockNextFn)
  expect(mockNextFn).toHaveBeenCalled()

  // With request headers
  mockReq = {
    options: {
      headers: {}
    }
  }
  authorizationMiddleware.applyMiddleware(mockReq, mockNextFn)
  expect(mockNextFn).toHaveBeenCalledTimes(2) // Once for the test without headers, once for the test with headers
}

const expectApolloClientToBeInitializedProperly = (client, initialState) => {
  expect(client).toBeDefined()
  expect(client.initialState).toBe(initialState)
  expect(client.networkInterface._uri).toBe('https://api.graph.cool/simple/v1/cj4c5zajubgpn0142pihd2xs3')
}

describe('apollo/init-apollo', () => {
  it('successfully creates an Apollo client on the server', () => {
    // Simulate a server-side rendering
    process.browser = false

    const initialState = {}
    const client = initApollo(initialState)
    expect(client.ssrMode).toBe(true)
    expectApolloClientToBeInitializedProperly(client, initialState)
  })

  it('successfully creates an Apollo client on the client (aka in the browser)', () => {
    // Simulate a client-side rendering
    process.browser = true

    const initialState = {}
    const client = initApollo(initialState)
    expect(client.ssrMode).toBe(false)
    expectApolloClientToBeInitializedProperly(client, initialState)
  })

  describe('apollo/init-apollo#_create', () => {
    it('successfully applies the authorization middleware', () => {
      const initialState = {}
      const options = {
        getToken: jest.fn()
      }
      const client = _create(initialState, options)
      verifyAuthorizationMiddlewareApplied(client.networkInterface._middlewares)
    })

    it('successfully sets the Bearer token', () => {
      const initialState = {}
      const options = {
        getToken: jest.fn().mockReturnValueOnce('test-token')
      }
      const client = _create(initialState, options)

      const mockNextFn = jest.fn()
      const mockReq = {
        options: {
          headers: {}
        }
      }
      // Apply authorization middleware
      client.networkInterface._middlewares[0].applyMiddleware(mockReq, mockNextFn)
      expect(mockNextFn).toHaveBeenCalled()
      expect(mockReq.options.headers.authorization).toBe('Bearer test-token')
    })

    it('sets the authorization header to null if no token is available', () => {
      const initialState = {}
      const options = {
        getToken: jest.fn().mockReturnValueOnce(null)
      }
      const client = _create(initialState, options)

      const mockNextFn = jest.fn()
      const mockReq = {
        options: {
          headers: {}
        }
      }
      // Apply authorization middleware
      client.networkInterface._middlewares[0].applyMiddleware(mockReq, mockNextFn)
      expect(mockNextFn).toHaveBeenCalled()
      expect(mockReq.options.headers.authorization).toBe(null)
    })
  })
})
