import { gql } from "@apollo/client";

export const GET_CURRENT_ORDER = gql`
    query getCurrentOrder($user_id: ID!) {
        getCurrentOrderByUserId(user_id: $user_id) {
            id
        }
    }
`