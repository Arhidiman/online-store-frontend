import { useState } from 'react'
import { Space, Modal } from 'antd'
import { useForm } from "antd/es/form/Form"
import { CartProduct } from '@/components/CartProduct/CartProduct'
import { PayCard } from '@/modules/PayCard'
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
                        {/* <Space direction='vertical' size={30}>
                            <CartProduct/>
                            <CartProduct/>
                            <CartProduct/>
                            <CartProduct/>
                            <CartProduct/>
                        </Space> */}
                        <Cart/>
                        <PayCard switchPaymentModal={setIsModalOpened}/>
                    </div>
                </div>
            </div>
        </>
    )
}