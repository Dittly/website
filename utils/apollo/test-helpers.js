import {ApolloClient} from 'react-apollo'
import {mockNetworkInterface} from 'react-apollo/test-utils'

export const createMockClient = () => {
  const query = ''
  const data = {}
  const networkInterface = mockNetworkInterface(
    {request: {query}, result: {data}}
  )
  return new ApolloClient({networkInterface})
}
