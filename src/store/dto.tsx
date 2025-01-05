

export type OrderItemDto = {
    order_id: number,
    product_id?: number,
    product_count?: number,
    id: number,
    name: string,
    image: string
}

export type OrderDto = {
    id?: number,
    user_id?: number,
}