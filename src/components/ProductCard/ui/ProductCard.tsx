import { useEffect, useState } from "react";
import { Card } from 'antd'
import { useQuery, useMutation } from "@apollo/client";
import { ActionButton } from "@/UI/ActionButton"
import { useGlobalStore } from "@/store/useGlobalStore"
import { CREATE_ORDER, ADD_ORDER_ITEM, GET_ORDER_ITEM } from "../queries";
import './ProductCard.scss'

interface IProductCard {
    name: string,
    product_id: number,
    image: string,
    price: number,
    userId: number | undefined,
    description: string
}

export const ProductCard = ({name, product_id, image, price, userId, description}: IProductCard) => {

    const { orderData, setOrderData, addItem } = useGlobalStore()
    const [ initialProductCount ] = useState<number>(1)
    const [ inCart, setInCart ] = useState<boolean>(false)

    const [ createOrder, { data: createOrderData }] = useMutation(CREATE_ORDER)
    const [ addOrderItem, { data: addOrderItemData }] = useMutation(ADD_ORDER_ITEM)

    const { data: orderItemData } = useQuery(
        GET_ORDER_ITEM, 
        { 
            variables: { order_id: orderData.order.id, product_id},
            fetchPolicy: "network-only",
            skip: !orderData.order.id
        }
    )
   
    const createOrderHandler = () => {
        userId && createOrder({ variables: { user_id: userId, product_id,  product_count: initialProductCount } })
    }
    
    const addOrderItemHandler = () => {
        userId && addOrderItem({ variables: { order_id: Number(orderData.order.id), product_id,  product_count: 1 } })
    }

    const addItemClickHandler = !orderData.order.id ? createOrderHandler : addOrderItemHandler

    useEffect(() => {
        if (createOrderData) {
            const { id } = createOrderData.createOrder
            setOrderData({ ...orderData, order: { id }})
        }
    }, [createOrderData])


    useEffect(() => {
        if (addOrderItemData) {
            const data = addOrderItemData && addOrderItemData.addOrderItem
            const { id, product_id }: { id: number, product_id: number} = data || {}

            if (orderData.items.every(item => item.id != id)) {
                id && product_id && addItem({id, product_id})
            }

        }
    }, [addOrderItemData, inCart])

    useEffect(() => {
        if (orderData) {
            const orderItem = orderData.items.find(item => item.product_id === product_id)
            const inCart = (orderItem && orderItem.product_id === product_id) || false
            setInCart(inCart)
        }
    }, [orderData])

    useEffect(() => {
        if (orderItemData) {
            const { id, product_id: orderProductId } = orderItemData.orderItem || {}
            setInCart(product_id === orderProductId)

            if (orderData.items.every(item => item.id != id)) {
                setOrderData({ ...orderData, ...( id && {items: [ ...orderData.items, { id, product_id }]} )   })
            }

        }
    }, [orderItemData])

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