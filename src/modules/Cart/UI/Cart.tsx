import { CartProduct } from "@/components/CartProduct/CartProduct"
import './Cart.scss'

export const Cart = () => {

    return (

        <div className="cart">
            <h2 className="cart-title">Корзина</h2>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
        </div>

    )
}