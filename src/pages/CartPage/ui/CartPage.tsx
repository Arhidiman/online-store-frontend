import { useState } from 'react'
import { Space, Modal } from 'antd'
import { useForm } from "antd/es/form/Form"
import { PayCard } from '@/modules/PayCard'
import { DeliveryForm } from '@/modules/DeliveryForm'
import { PaymentForm } from '@/modules/PaymentForm'
import { Cart } from '@/modules/Cart'
import './CartPage.scss'


export const CartPage = () => {

    const [form] = useForm()
    
    const validateFields = async () => {
        await form.validateFields()
        setIsModalOpened(false)
    }

    const [isModalOpened, setIsModalOpened] = useState(false)
    const closeModal = () => setIsModalOpened(false)


    return (
        <>
            <Modal
                open={isModalOpened}
                onCancel={closeModal}
                onOk={validateFields}
                title='Форма оплаты заказа'    
            >
                <PaymentForm form={form}/>
            </Modal>
            <div className="cart-page">
                <div className="cart-page-container">
                    <div className="cart-page-content">
                        <Cart/>
                        <PayCard switchPaymentModal={setIsModalOpened}/>
                        <DeliveryForm/>
                    </div>
                </div>
            </div>
        </>
    )
}