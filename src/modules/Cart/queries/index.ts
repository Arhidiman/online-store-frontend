import { gql } from "@apollo/client"

export const GET_ORDER_ITEMS = gql`
    query getOrderItemsInfo($order_id: ID!) {
        getOrderItemsInfo(order_id: $order_id) {
            order_id,
            product_count,
            id, name, image
        }
    }
`

