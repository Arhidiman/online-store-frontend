import { useState, useEffect } from 'react'
import { Space, Divider, notification } from 'antd'
import { useQuery, useMutation } from '@apollo/client'
import { ActionButton } from '@/UI/ActionButton'
import { useGlobalStore } from '@/store/useGlobalStore'
import { DELETE_ORDER_ITEM, GET_ORDER_ITEMS } from '../queries'
import type { OrderItemsInfoDto } from '@/modules/Cart/dto'
import './CartProduct.scss'

export const CartProduct = ({ id, name, image, price, product_count }: OrderItemsInfoDto) => {

    const [ count, setCount ] = useState<number>(product_count || 1)

    const addItem = () => setCount(count + 1)
    const reduceItems = () => setCount(count === 1 ? count : count - 1)


    const { orderData, setOrderData} = useGlobalStore()

    console.log(name, price, product_count)

    const [ deleteItem, { data, error }] = useMutation(DELETE_ORDER_ITEM, 
        
        {
            fetchPolicy: 'network-only',
            refetchQueries: [{ query: GET_ORDER_ITEMS, variables: { order_id: orderData.order.id } }],
        }
    )

    const { data: orderItemsData } = useQuery(GET_ORDER_ITEMS, { variables: { order_id: orderData.order.id }, skip: !orderData.order.id, fetchPolicy: 'network-only' })

    const deleteOrderItem = () => {
        deleteItem( { variables: { id }, fetchPolicy: 'network-only' })
    }

    if (error) {
        notification.error(error)
    }

    useEffect(() => {
        if (orderItemsData) {
            const { getOrderItemsInfo: orderItems }: { getOrderItemsInfo: OrderItemsInfoDto[]} = orderItemsData || {}

            console.log(orderItems, 'orderItems')


            setOrderData({ ...orderData, items: orderItems})
        }

    }, [orderItemsData])

    return (
        <Space direction='vertical'>
            <div className='cart-product'>
                <div className='cart-product-image'>
                    <img alt='cart-product image' src={image}/>
                </div>
                <div className='cart-product-content'>

                    <Space direction='vertical'>
                        <p className='cart-product_name'>{name}</p>
                        <p className='cart-product_description'>Описание описание описание описание описание описание описание описание описание</p>
                    </Space>
                    <p className='cart-product_price'>{ count*price} ₽</p>   
                     
                    <Space direction='horizontal' align='center'>
                        <Space direction='horizontal' align='center'>
                            <ActionButton className='cart-product_button_count' type='reduce' actionHandler={ reduceItems } disabled={ count === 1 }/>
                            <p className='cart-product_count'>{ count }</p> 
                            <ActionButton className='cart-product_button_count' type='add' actionHandler={ addItem }/>
                            <ActionButton className='cart-product_button' type='delete' actionHandler={deleteOrderItem}/>
                        </Space>
                    </Space>
                </div>
            </div>
            <Divider/>
        </Space>
    )


}

    
 


