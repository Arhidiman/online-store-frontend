import { Button } from 'antd'
import './OrderCard.scss'
import { Dispatch } from 'react'


interface IOrderCard {
}


export const OrderCard = () => {

    return (

        <div className='order-card'>
            <div className='order-card-container'>
                <h2 className='order-card_title'>Стоимость заказа: 10000р</h2>
                <p className='order-card_discount'>Скидка 100р</p>
                <p className='order-card_price'>К оплате 9900р</p>
            </div>
        </div>
    )
}