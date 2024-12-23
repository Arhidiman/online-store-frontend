import { ActionButton } from '@/UI/ActionButton'
import { Space, Divider } from 'antd'
import type { OrderItemsInfoDto } from '@/modules/Cart/dto'
import './CartProduct.scss'

export const CartProduct = ({ id, name, image, product_count }: OrderItemsInfoDto) => 

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
              
                <p className='cart-product_count'>Количество: {product_count}</p>   
                <p className='cart-product_price'>Цена: 1000000р</p>   
                <ActionButton className='cart-product_button' type='delete' actionHandler={() => console.log('delete from cart')}/>
            </div>
        </div>
        <Divider/>
    </Space>
 


