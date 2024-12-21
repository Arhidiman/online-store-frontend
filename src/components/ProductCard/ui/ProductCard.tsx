import { ReactNode, useEffect, useState } from "react";
import { Card } from 'antd'
import {  useQuery, useMutation } from "@apollo/client";
import { ActionButton } from "@/UI/ActionButton"
import { useGlobalStore } from "@/store/useGlobalStore"
import { CREATE_ORDER, ADD_ORDER_ITEM, GET_ORDER_ITEM } from "../queries";

import type { CreateOrderDto, AddOrderItemDto } from "../dto";

import './ProductCard.scss'

interface IProductCard {
    name: string
    product_id: number,
    image: string
    price: number
    description: string
    cardSign: ReactNode
}


export const ProductCard = ({name, product_id, image, price, description}: IProductCard) => {

    const mockUser = 102

    const { currentUser, orderData, setOrderData } = useGlobalStore()
    const [ initialProductCount ] = useState<number>(1)
    const [ inCart, setInCart ] = useState<boolean>(false)

    const [ createOrder, { data: createOrderData }] = useMutation(CREATE_ORDER)
    const [ addOrderItem, { data: addOrderItemData }] = useMutation(ADD_ORDER_ITEM)

    if (orderData.order.id) {

        console.log(orderData.order.id, product_id)
    }

    const { data: orderItemData } = useQuery(GET_ORDER_ITEM, { variables: { order_id: orderData.order.id, product_id} })


   


    const createOrderHandler = () => {
        createOrder({ variables: { user_id: mockUser, product_id,  product_count: initialProductCount } })
    }
    
    const addOrderItemHandler = () => {
        addOrderItem({ variables: { order_id: Number(orderData.order.id), product_id,  product_count: 1 } })
    }

    const addItemClickHandler = !orderData.order.id ? createOrderHandler : addOrderItemHandler

    useEffect(() => {
        if (createOrderData) {
            const { id } = createOrderData.createOrder
            setOrderData({ ...orderData, order: { id }})
        }
    }, [createOrderData, addOrderItemData])


    useEffect(() => {
        if (addOrderItemData) {
            const data = addOrderItemData && addOrderItemData.addOrderItem
            const { id } = data || {}
            setOrderData({ ...orderData, ...( id && {items: { id }} )   })
        }
    }, [addOrderItemData, inCart])


    useEffect(() => {

        if (orderItemData) {
            const { product_id: orderProductId } = orderItemData.orderItem || {}


            console.log(orderProductId, product_id)
            setInCart(product_id === orderProductId)
        }
    }, [orderItemData, orderData])


    return <Card
        key={product_id}
        title={name}
        content={description}
        className='product-card-custom'
    >
        <div className='product-card-content-container'>
            <div className="product-card">
                <img alt='product image' src={image}/>
                <div className="product-card-content-bottom">
                    <div className="product-card-content-bottom-container">
                        <p className="product-card-content-bottom-price">{price} Р</p>     
                        {
                            !inCart
                                ? <ActionButton className="product-card_button" text="В корзину" actionHandler={() => addItemClickHandler()}/>
                                : <ActionButton type="check" text="В корзине"/>
                        }
                    </div>
                </div>
            </div>
        </div>
    </Card>
}