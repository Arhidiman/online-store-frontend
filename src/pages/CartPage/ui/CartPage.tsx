import { useState } from 'react'
import { Space, Modal } from 'antd'
import { useForm } from "antd/es/form/Form"
import { OrderCard } from '@/modules/OrderCard'
import { DeliveryForm } from '@/modules/DeliveryForm'
import { PaymentForm } from '@/modules/PaymentForm'
import { Cart } from '@/modules/Cart'
import './CartPage.scss'


export const CartPage = () => {

    const [paymentForm] = useForm()
    const [deliveryForm] = useForm()
    


    const [isModalOpened, setIsModalOpened] = useState(false)
    const closeModal = () => setIsModalOpened(false)

    return (
        <>
            <Modal
                open={isModalOpened}
                onCancel={closeModal}
                title='Форма оплаты заказа'  
                footer={null}  
            >
                <PaymentForm cancelHandler={closeModal}/>
            </Modal>
            <div className="cart-page">
                <div className="cart-page-container">
                    <div className="cart-page-content">
                        <Cart/>
                        <OrderCard/>
                        <DeliveryForm confirmHandler={setIsModalOpened} form={deliveryForm}/>
                    </div>
                </div>
            </div>
        </>
    )
}