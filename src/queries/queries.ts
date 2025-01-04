import { gql } from "@apollo/client";

export const GET_CURRENT_ORDER = gql`
    query getCurrentOrder($user_id: ID!) {
        getCurrentOrderByUserId(user_id: $user_id) {
            id
        }
    }
`

export const VALIDATE_JWT = gql`
    query validate ($jwt_token: String!) {
        validate(jwt_token: $jwt_token) {
            username, id
        }
    }
`