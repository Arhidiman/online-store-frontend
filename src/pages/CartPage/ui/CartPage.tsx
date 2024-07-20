import { Space } from 'antd'
import { Products } from '@/modules/Products'
import { CartProduct } from '@/components/CartProduct/CartProduct'
import './CartPage.scss'





export const CartPage = () => {


    return (

        <div className="cart-page">
            <div className="cart-page-container">
                <h2 className="cart-page-title">
                    Ваша корзина
                </h2>
                <div className="cart-page-content">
                    <Space direction='vertical' size={30}>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                    </Space>
                </div>
            </div>
        </div>
    )
}