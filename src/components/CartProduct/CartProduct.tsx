import { useState, useEffect } from 'react'
import { ActionButton } from '@/UI/ActionButton'
import { Space, Divider } from 'antd'
import type { OrderItemsInfoDto } from '@/modules/Cart/dto'
import './CartProduct.scss'

export const CartProduct = ({ id, name, image, product_count }: OrderItemsInfoDto) => {

    const [ count, setCount ] = useState<number>(product_count || 1)
    const [ mockPrice ] = useState<number>(1000)

    const addItem = () => setCount(count + 1)
    const reduceItems = () => setCount(count === 1 ? count :count - 1)

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
                    <p className='cart-product_price'>{ count*mockPrice} ₽</p>   
                     
                    <Space direction='horizontal' align='center'>
                        <Space direction='horizontal' align='center'>
                            <ActionButton className='cart-product_button_count' type='reduce' actionHandler={ reduceItems } disabled={ count === 1 }/>
                            <p className='cart-product_count'>{ count }</p> 
                            <ActionButton className='cart-product_button_count' type='add' actionHandler={ addItem }/>
                            <ActionButton className='cart-product_button' type='delete' actionHandler={() => console.log('delete from cart')}/>
                        </Space>
                    </Space>
                </div>
            </div>
            <Divider/>
        </Space>
    )


}

    
 


