import { Button } from 'antd'
import { Dispatch } from 'react'
import { useGlobalStore } from '@/store/useGlobalStore'
import './OrderCard.scss'


interface IOrderCard {
}


export const OrderCard = () => {

    const { orderData } = useGlobalStore()

    const { full_price } = orderData

    return (

        <div className='order-card'>
            {
                full_price && full_price != 0 
                ?
                <div className='order-card-container'>
                        <h2 className='order-card_title'>Стоимость заказа: {full_price}</h2>
                        {/* <p className='order-card_discount'>Скидка 100р</p>
                        <p className='order-card_price'>К оплате 9900р</p> */}
                </div>
                : <></>
            }
           
        </div>
    )
}