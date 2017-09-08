import {gql} from 'react-apollo'

export const signIn = gql`
mutation Signin($email: String!, $password: String!) {
  signinUser(email: { email: $email, password: $password }) {
    token
  }
}
`
