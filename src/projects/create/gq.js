import gql from 'graphql-tag'

export const getProjectTypes = gql`
  query enumValuesOfMetaInformationTags {
    __type(name: "ProjectTypes") {
      name
      enumValues {
        name
      }
    }
  }
`

export const createProject = gql`
  mutation createProjectMutation(
    $title: String!
    $location: String!
    $type: ProjectTypes!
    $userId: ID!
  ) {
    createProject(
      title: $title
      location: $location
      type: $type
      userId: $userId
    ) {
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
