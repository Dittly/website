import { gql } from 'react-apollo'

export const createSignUpPreview = gql`
  mutation createSignUpPreview($email: String!) {
    createSignUpPreview(email: $email) {
      id
      createdAt
      email
    }
  }
`
