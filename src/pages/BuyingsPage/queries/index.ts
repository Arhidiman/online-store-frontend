import { gql } from "@apollo/client";

export const GET_ALL_TRANSACTIONS = gql`
    query GetTransactionsItemsData($jwt_token: String!) {
        getTransactionsItemsData(jwt_token: $jwt_token) {
            full_price, created_at, city, street, building
        }
    }
`