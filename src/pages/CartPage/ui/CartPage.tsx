import { useState } from 'react'
import { OrderCard } from '@/modules/OrderCard'
import { DeliveryForm } from '@/modules/DeliveryForm'
import { PaymentForm } from '@/modules/PaymentForm'
import { Cart } from '@/modules/Cart'
import './CartPage.scss'


export const CartPage = () => {

    const [paymentFormOpen, setIsPaymentFormOpened] = useState(false)
    const closeModal = () => setIsPaymentFormOpened(false)

    return (
        <>
            <PaymentForm 
                isOpen={paymentFormOpen} 
                closeForm={closeModal}                             
                onConfirm={(data: any) => console.log(data,'validated payment form values')}
            />
            <div className="cart-page">
                <div className="cart-page-container">
                    <div className="cart-page-content">
                        <Cart/>
                        <OrderCard/>
                        <DeliveryForm 
                            onConfirm={(data: any) => console.log(data,'validated delivery form values')}
                            extraConfirmHandlers={[() => setIsPaymentFormOpened(true)]} 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}