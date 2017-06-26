jest.mock('react-ga')

import React from 'react'
import { ApolloClient, ApolloProvider } from 'react-apollo'
import { mockNetworkInterface } from 'react-apollo/lib/test-utils'
import renderer from 'react-test-renderer'
import { createMockClient } from '../../utils/apollo/test-helpers'
import Index from '../../pages'

describe('Index page', () => {
  let apolloClient

  beforeAll(() => {
    apolloClient = createMockClient()
  })
  
  it('renders / correctly', () => {
    const tree = renderer.create(
      <ApolloProvider client={apolloClient}>
        <Index serverState={{}}/>
      </ApolloProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
