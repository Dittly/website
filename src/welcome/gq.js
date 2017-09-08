import {gql} from 'react-apollo'

export const getAllProjects = gql`
  query getAllProjects {
    allProjects(orderBy: createdAt_DESC) {
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
