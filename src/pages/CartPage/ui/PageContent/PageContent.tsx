import { useState } from 'react'
import { DeliveryForm } from '@/modules/DeliveryForm'
import { PaymentForm } from '@/modules/PaymentForm'
import { Cart } from '@/modules/Cart'
import type { IDeliveryData } from '@/types'

export const PageContent = () => {

    const [paymentFormOpen, setIsPaymentFormOpened] = useState(false)
    const closeModal = () => setIsPaymentFormOpened(false)

    const [deliveryData, setDeliveryData] = useState<IDeliveryData>({})

    return (
        <>
            <PaymentForm 
                isOpen={paymentFormOpen} 
                closeForm={() => closeModal()}                             
                onConfirm={(data: any) => console.log(data,'validated payment form values')}
                deliveryData={deliveryData}
            />
            <div className="cart-page">
                <div className="cart-page-container">
                    <div className="cart-page-content">
                        <Cart/>
                        <DeliveryForm 
                            onConfirm={(data: IDeliveryData) => setDeliveryData(data)}
                            extraConfirmHandlers={[() => setIsPaymentFormOpened(true)]} 
                        />
                    </div>
                </div>
            </div>    
        </>
    )
}