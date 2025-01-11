import { useState, useEffect } from "react"
import { CartProduct } from "@/components/CartProduct/UI/CartProduct"
import { useQuery } from "@apollo/client"
import { GET_ORDER_ITEMS } from "../queries"
import { GET_CURRENT_ORDER } from "@/queries/queries"
import { useGlobalStore } from "../../../store/useGlobalStore"
import { VALIDATE_JWT } from "@/queries/queries"
import type { OrderItemsInfoDto } from "../dto"
import './Cart.scss'

export const Cart = () => {

    const { orderData, setOrderData, setOrderItems, setOrderId } = useGlobalStore()
    const [ userId, setUserId ] = useState<number | undefined>()


    const { data } = useQuery(GET_ORDER_ITEMS, { variables: { order_id: orderData.order.id }, skip: !orderData.order.id, fetchPolicy: 'network-only' })
    const { data: orderGQLData } = useQuery(GET_CURRENT_ORDER, { variables: { user_id: userId }, skip: !userId, fetchPolicy: 'network-only'})


    const jwt_token: string | null = localStorage.getItem('token')
    const { data: validUserData } = useQuery(VALIDATE_JWT, { variables: { jwt_token }, skip: !jwt_token})


    useEffect(() => {
        if (validUserData) {
            const { validate } = validUserData
            const { id: user_id } = validate || {}
            setUserId(user_id)
        }

    }, [validUserData])

    useEffect(() => {
        if (orderGQLData) {
            const { getCurrentOrderByUserId: order } = orderGQLData
            const { id } = order || {}
            setOrderId(id)
        }

    }, [orderGQLData])

    useEffect(() => {
        if (data) {
            const { getOrderItemsInfo: orderItems }: { getOrderItemsInfo: OrderItemsInfoDto[]} = data || {}
            setOrderItems(orderItems)
        }

    }, [data])

    console.log(orderData.items, 'orderData')

    return (
        <div className="cart">
            <h2 className="cart-title">Корзина</h2>
            {
                orderData.items && orderData.items.map(({ id, name, image, price, product_count, order_id }: OrderItemsInfoDto) =>{
                    return <CartProduct
                                key={id}
                                id={id}
                                name={name} 
                                image={image}
                                price={price}
                                product_count={product_count}
                                order_id={order_id}
                            />
                })
            }
        </div>
    )
}