import { gql } from "@apollo/client"

export const SIGN_IN = gql`
    mutation signIn ($username: String!, $password: String!) {
        signIn(username: $username, password: $password) {
            jwt_token
        }
    }
`