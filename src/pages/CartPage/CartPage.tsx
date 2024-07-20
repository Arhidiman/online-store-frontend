import './CartPage.scss'
import { Products } from '@/modules/Products'


export const CartPage = () => {
    return (

        <div className="cart-page">
            <div className="cart-page-container">
                <h2 className="cart-page-title">
                    Ваша корзина
                </h2>
                <div className="cart-page-content">
                    <Products></Products>
                </div>
            </div>
        </div>
    )
}