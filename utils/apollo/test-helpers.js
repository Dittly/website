import ApolloClient from 'apollo-client';
import { InMemoryCache as Cache } from 'apollo-cache-inmemory';
import { mockSingleLink } from 'react-apollo/test-utils';

export const createMockClient = () => {
  const query = '';
  const data = {};
  const link = mockSingleLink({
    request: { query },
    result: { data }
  });
  return new ApolloClient({ link, cache: new Cache({ addTypename: false }) });
};
