import {gql} from 'react-apollo'

export const getProjectTypes = gql`
  query enumValuesOfMetaInformationTags {
    __type(name: "PROJECT_TYPE") {
      name
      enumValues {
        name
      }
    }
  }
`

export const createProject = gql`
  mutation createProjectMutation($title: String!, $location: String!, $type: PROJECT_TYPE!, $userId: ID!) {
    createProject(title: $title, location: $location, type: $type, userId: $userId) {
      id
      title
      location
      type
      user {
        id
        name
        email
      }
    }
  }
`
