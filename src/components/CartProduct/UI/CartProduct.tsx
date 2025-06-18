import { useState, useEffect } from 'react'
import { Space, Divider, notification } from 'antd'
import { useQuery, useMutation } from '@apollo/client'
import { ActionButton } from '@/UI/ActionButton'
import { BaseModal } from '@/components/BaseModal/BaseModal'
import { useGlobalStore } from '@/store/useGlobalStore'
import { DELETE_ORDER_ITEM, GET_ORDER_ITEMS } from '../queries'
import type { OrderItemsInfoDto } from '@/modules/Cart/dto'
import './CartProduct.scss'

export const CartProduct = ({ id, name, image, price, product_count }: OrderItemsInfoDto) => {

    const [ count, setCount ] = useState<number>(product_count || 1)
    const [ modalOpen, setModalOpen ] = useState<boolean>(false)

    const { orderData, setOrderItems, removeItem } = useGlobalStore()

    const setProductCount = (change: 'add' | 'reduce') => {
        const updatedOrderItems = orderData.items.map(item => {
            if (item.id && item.product_count) {
                return  item.id !== id ? item : { 
                    ...item, 
                    product_count:  change === 'add' ? item.product_count + 1 : item.product_count - 1
                }
            } else return item
        })
        setOrderItems(updatedOrderItems)
    }

    const addItem = () => setProductCount('add')

    const reduceItems = () => setProductCount('reduce')

    const [ deleteItem, { error }] = useMutation(DELETE_ORDER_ITEM, 
        {
            fetchPolicy: 'network-only',
            refetchQueries: [{ query: GET_ORDER_ITEMS, variables: { order_id: orderData.order.id } }],
        }
    )

    const { data: orderItemsData } = useQuery(GET_ORDER_ITEMS, 
        { 
            variables: { order_id: orderData.order.id }, 
            skip: !orderData.order.id, fetchPolicy: 'network-only' 
        }
    )

    const deleteOrderItem = () => {


        const deleteOrderItem = () => {
            deleteItem( { variables: { id }, fetchPolicy: 'network-only' })
            id && removeItem(id)
        }

        if (orderData.items && orderData.items.length === 1 && !modalOpen) {
            setModalOpen(true)
        } else if (orderData.items && orderData.items.length === 1 && modalOpen) {
            deleteOrderItem()
            setModalOpen(false)
        } else {
            deleteOrderItem()
        }
    }

    if (error) {
        notification.error(error)
    }

    useEffect(() => {
        if (orderItemsData) {
            const { getOrderItemsInfo: orderItems }: { getOrderItemsInfo: OrderItemsInfoDto[]} = orderItemsData || {}
            setOrderItems(orderItems)
        }

    }, [orderItemsData])

    useEffect(() => {
        const orderItem = orderData.items.find(item => item.id === id)
        setCount(orderItem && orderItem?.product_count ? orderItem.product_count : 1)
    }, [JSON.stringify(orderData.items)])

    return (
        <>
            <BaseModal 
                isOpen={modalOpen} 
                onCancel ={() => setModalOpen(false)} 
                onOk={deleteOrderItem}
                title='Заказ будет удалён. Подтвердить?'
            >
            
            </BaseModal>
            <Space direction='vertical' key={JSON.stringify(orderData.items)}>
                <div className='cart-product'>
                    <div className='cart-product-image'>
                        <img alt='cart-product image' src={image}/>
                    </div>
                    <div className='cart-product-content'>

                        <Space direction='vertical'>
                            <p className='cart-product_name'>{name}</p>
                            <p className='cart-product_description'>Описание </p>
                        </Space>
                        <p className='cart-product_price'>{ price ? count*price : ''} ₽</p>   
                        
                        <Space direction='horizontal' align='center'>
                            <Space direction='horizontal' align='center'>
                                <ActionButton className='cart-product_button_count' type='reduce' actionHandler={ reduceItems } disabled={ count === 1 }/>
                                <p className='cart-product_count'>{ count }</p> 
                                <ActionButton className='cart-product_button_count' type='add' actionHandler={ addItem }/>
                                <ActionButton className='cart-product_button' type='delete' actionHandler={ deleteOrderItem }/>
                            </Space>
                        </Space>
                    </div>
                </div>
                <Divider/>
            </Space>
        </>
  
    )
}

    
 


