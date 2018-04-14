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
          fetchMore: jest.fn(),
          updateQuery: jest.fn(),
          startPolling: jest.fn(),
          stopPolling: jest.fn(),
          subscribe: jest.fn(),
          subscribeToMore: jest.fn(),
          refetch: jest.fn()
        })
      }}
    >
      {Component}
    </ApolloProvider>
  )
