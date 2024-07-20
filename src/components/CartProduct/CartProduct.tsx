import mockProduct from './mock/mockProduct.jpg'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import './CartProduct.scss'


export const CartProduct = () => 
    <div className='cart-product'>
        <div className='cart-product-image'>
            <img alt='cart-product image' src={mockProduct}/>
        </div>
        <div>
            <p>Название товара</p>
            <p>Цена: 1000000р</p>   
        </div>
        <Button><DeleteOutlined/></Button>
    </div>


