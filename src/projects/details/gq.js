import {gql} from 'react-apollo'

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
`
