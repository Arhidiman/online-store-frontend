export type CreateOrderDto = { 
    user_id: number, 
    product_id: number, 
    product_count: number 
}

export type AddOrderItemDto = {
    order_id: number,
    product_id: number,
    product_count: number
}