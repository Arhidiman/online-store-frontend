import { gql } from "@apollo/client"

export const CREATE_ORDER = gql`
    mutation createOrder ($user_id: ID!, $product_id: ID!, $product_count: Int! ) {
        createOrder (user_id: $user_id, product_id: $product_id, product_count: $product_count ) {
            id, user_id
        }
    }
`

export const ADD_ORDER_ITEM = gql`
     mutation addOrderItem ($order_id: ID!, $product_id: ID!, $product_count: Int! ) {
        addOrderItem (order_id: $order_id, product_id: $product_id, product_count: $product_count ) {
            id, order_id, product_id, product_count
        }
    }
`

export const GET_ORDER_ITEM = gql`
    query orderItem ($order_id: ID!, $product_id: ID!) {
        orderItem(order_id: $order_id, product_id: $product_id) {
            id, product_id
        }
    }
`