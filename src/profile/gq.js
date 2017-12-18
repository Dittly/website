import gql from 'graphql-tag'

export const getAllProjects = gql`
  query getAllProjects($userId: ID!) {
    allProjects(filter: {user: {id: $userId}}, orderBy: createdAt_DESC) {
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
