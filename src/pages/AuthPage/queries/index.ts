import { gql } from "@apollo/client"


export const SIGN_IN = gql`
    query signIn ($username: String!, $password: String!) {
        signIn(username: $username, password: $password) {
            username, id, jwt_token
        }
    }
`

export const VALIDATE_JWT = gql`
    query signIn ($jwt_token: String!) {
        signIn(jwt_token: $jwt_token) {
            username, id
        }
    }
`