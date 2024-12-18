export type OrderItemDto = {
    id: number,
    order_id: number,
    product_id: number,
    product_count: number
}

export type OrderDto = {
    id?: number,
    user_id?: number,
}