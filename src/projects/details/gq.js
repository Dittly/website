import gql from 'graphql-tag';

export const getProject = gql`
  query getProject($projectId: ID!) {
    Project(id: $projectId) {
      id
      title
      location
      type
      user {
        id
        name
      }
    }
  }
`;
