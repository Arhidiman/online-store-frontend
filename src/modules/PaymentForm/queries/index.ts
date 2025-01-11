import { gql } from "@apollo/client";

export const CREATE_TRANSACTION = gql`
    mutation Mutation($orderId: ID!, $full_price: Int!) {
        createTransaction(order_id: $orderId, full_price: $fullPrice) {
            id, full_price  
        }
    }
`