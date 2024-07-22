import { useState } from 'react'
import { Space, Modal } from 'antd'
import { CartProduct } from '@/components/CartProduct/CartProduct'
import { PayCard } from '@/modules/PayCard'
import './CartPage.scss'


export const CartPage = () => {

    const [isModalOpened, setIsModalOpened] = useState(false)
    

    const closeModal = () => setIsModalOpened(false)

    return (


        <>
            <Modal
                open={isModalOpened}
                onCancel={closeModal}
                title='Форма оплаты заказа'    
            >

                Контент
            </Modal>
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
                        <PayCard switchPaymentModal={setIsModalOpened}/>
                    </div>
                </div>
            </div>
        </>
       
    )
}