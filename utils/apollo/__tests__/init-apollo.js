import initApollo from '../init-apollo'

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
})
