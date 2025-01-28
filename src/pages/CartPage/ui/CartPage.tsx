import { useState } from 'react'
import { Space, Modal, Form } from 'antd'
import { useForm } from "antd/es/form/Form"
import { OrderCard } from '@/modules/OrderCard'
import { DeliveryForm } from '@/modules/DeliveryForm'
import { PaymentForm } from '@/modules/PaymentForm'
import { Cart } from '@/modules/Cart'
import './CartPage.scss'


export const CartPage = () => {

    const [ cartForm ] = useForm()

    const [isModalOpened, setIsModalOpened] = useState(false)
    const closeModal = () => setIsModalOpened(false)

    const validateCart = async () => {
        const data = await cartForm.validateFields()
        console.log(data, 'cart page data')
    }

    return (
        <>
            <Modal
                open={isModalOpened}
                onCancel={closeModal}
                title='Форма оплаты заказа'  
                // footer={null}  
                onOk={validateCart}
            >
                <PaymentForm cancelHandler={closeModal}/>
                 
            </Modal>
            <div className="cart-page">
                <div className="cart-page-container">
                    <div className="cart-page-content">
                        <Cart/>
                        <OrderCard/>
                        <DeliveryForm 
                            onConfirm={() => console.log('validated form values')} 
                            extraConfirmHandler={() => setIsModalOpened(true)} 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}