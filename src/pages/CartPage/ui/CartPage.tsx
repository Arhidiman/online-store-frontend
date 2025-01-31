import { useState } from 'react'
import { Space, Modal, Form } from 'antd'
import { useForm } from "antd/es/form/Form"
import { OrderCard } from '@/modules/OrderCard'
import { DeliveryForm } from '@/modules/DeliveryForm'
import { PaymentForm } from '@/modules/PaymentForm'
import { BaseModal } from '@/components/BaseModal/BaseModal'
import { Cart } from '@/modules/Cart'
import './CartPage.scss'


export const CartPage = () => {


    const [isModalOpened, setIsModalOpened] = useState(false)
    const closeModal = () => setIsModalOpened(false)

 
    return (
        <>
            <BaseModal
                title='Форма оплаты заказа'  
            >
                <PaymentForm />
                 
            </BaseModal>
            <div className="cart-page">
                <div className="cart-page-container">
                    <div className="cart-page-content">
                        <Cart/>
                        <OrderCard/>
                        <DeliveryForm 
                            onConfirm={(data: any) => console.log(data,'validated form values')} // TODO: проработать onConfirm
                            extraConfirmHandlers={[() => setIsModalOpened(true)]} 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}