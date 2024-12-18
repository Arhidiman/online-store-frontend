import { ReactNode, useEffect } from "react";
import { Card } from 'antd'
import {  useMutation } from "@apollo/client";
import { ActionButton } from "@/UI/ActionButton"
import { useGlobalStore } from "@/store/useGlobalStore"
import { CREATE_ORDER, ADD_ORDER_ITEM } from "../queries";

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

const cardContent = (url: string, price: number) => 
    <div className="product-card">
        <img alt='product image' src={url}/>
        <div className="product-card-content-bottom">
            <div className="product-card-content-bottom-container">
                <p className="product-card-content-bottom-price">{price} Р</p>     
                <ActionButton className="product-card_button" text="В корзину" actionHandler={() => console.log('to cart')}/>
            </div>
        </div>
    </div>

export const ProductCard = ({name, product_id, image, price, description}: IProductCard) => {






    const mockUser = 102
    const mockProduct = 12

    const { currentUser, orderData, setOrderData } = useGlobalStore()

    const [ createOrder, { data: createOrderData }] = useMutation(CREATE_ORDER, { variables: { } })
    const [ addOrderItem, { data: addOrderItemData }] = useMutation(ADD_ORDER_ITEM)



    const createOrderHandler = () => {
        console.log('createOrderHandler')
        createOrder({ variables: { user_id: mockUser, product_id: mockProduct,  product_count: 1} })
    }
    
    const addOrderItemHandler = () => {
        console.log('addOrderItemHandler')
        addOrderItem({ variables: { order_id: Number(orderData.order.id), product_id: mockProduct,  product_count: 2 } })
    }


    const addItemClickHandler = !orderData.order.id ? createOrderHandler : addOrderItemHandler

    useEffect(() => {
        if (createOrderData) {
            const { id } = createOrderData.createOrder
            setOrderData({ ...orderData, order: { id }})
        }

        if (addOrderItemData) {
            const { id } = createOrderData.createOrder
            setOrderData({ ...orderData, order: { id }})
        }


    }, [createOrderData, addOrderItemData])


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
                        <ActionButton className="product-card_button" text="В корзину" actionHandler={() => addItemClickHandler()}/>
                    </div>
                </div>
            </div>
        </div>
    </Card>
}