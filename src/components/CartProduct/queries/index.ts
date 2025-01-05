import { gql } from "@apollo/client"


export const DELETE_ORDER_ITEM = gql`
    mutation deleteOrderItem($id: ID!) {
        deleteOrderItem(id: $id)
    }
`

export const GET_ORDER_ITEMS = gql`
    query getOrderItemsInfo($order_id: ID!) {
        getOrderItemsInfo(order_id: $order_id) {
            order_id,
            product_count,
            id, name, image
        }
    }
`