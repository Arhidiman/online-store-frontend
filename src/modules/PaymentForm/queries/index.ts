import { gql } from "@apollo/client";

export const CREATE_TRANSACTION = gql`
    mutation CreateTransaction($order_id: ID!, $full_price: Int!, $order_items: [UpdatedOrderItem]!) {
        createTransaction(order_id: $order_id, full_price: $full_price, order_items: $order_items) {
            id, full_price
        }
    }
`

export const GET_ORDER_ITEMS = gql`
    query getOrderItemsInfo($order_id: ID!) {
        getOrderItemsInfo(order_id: $order_id) {
            order_id,
            product_count,
            id, product_id, name, image, price
        }
    }
`