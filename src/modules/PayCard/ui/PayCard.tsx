import { Button } from 'antd'
import './PayCard.scss'


export const PayCard = () => {
    return (

        <div className='pay-card'>
            <div className='pay-card-container'>
                <h2 className='pay-card_title'>Стоимость заказа: 10000р</h2>
                <p>Скидка 100р</p>
                <p>К оплате 9900р</p>
                <Button type='primary'>Перейти к оплате</Button>
            </div>
        </div>
    )
}