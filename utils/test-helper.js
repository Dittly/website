/* eslint-env jest */
import {mount} from 'enzyme'
import {ApolloProvider} from 'react-apollo'

export const mountComponentWithApolloProvider = (
  Component,
  mockCurrentResult
) =>
  mount(
    <ApolloProvider
      client={{
        initStore: jest.fn(),
        watchQuery: jest.fn().mockReturnValue({
          currentResult: mockCurrentResult,
          subscribe: jest.fn()
        })
      }}
    >
      {Component}
    </ApolloProvider>
  )
