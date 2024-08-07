import { Button } from 'antd'
import './PayCard.scss'
import { Dispatch } from 'react'


interface IPayCard {
    switchPaymentModal: Dispatch<boolean>
}


export const PayCard = ({switchPaymentModal}: IPayCard) => {


    const openModal = () => switchPaymentModal(true)

    return (

        <div className='pay-card'>
            <div className='pay-card-container'>
                <h2 className='pay-card_title'>Стоимость заказа: 10000р</h2>
                <p>Скидка 100р</p>
                <p>К оплате 9900р</p>
            </div>
        </div>
    )
}