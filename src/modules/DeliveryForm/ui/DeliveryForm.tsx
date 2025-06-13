import { useState, useEffect } from "react"
import { Form, Input } from "antd"
import { BaseControlForm } from "@/components/BaseControlForm/BaseControlForm"
import { useGlobalStore } from "@/store/useGlobalStore"
import { ActionButton } from "@/UI/ActionButton/ActionButton"
import { useCartPageStore } from "@/pages/CartPage"
import type { IBaseControlForm } from "@/components/BaseControlForm/BaseControlForm"
import type { IActionButton } from "@/UI/ActionButton/ActionButton"
import './DeliveryForm.scss'


export type TDeliveryData = {
    city: string,
    street: string,
    building: string
}

type IDeliveryForm = Omit<IBaseControlForm, 'children'>


export const DeliveryForm = ({ onConfirm, extraConfirmHandlers }: IDeliveryForm) => { 

    const validationRules = [{ required: true, message: 'Поле не может быть пустым' }]

    const { setDeliveryFormOpen, deliveryFormOpen } = useCartPageStore()

    const [ themeClassName, setThemeCLassName] = useState('')
    const [ openClassName, setOpenCLassName] = useState('')

    const { orderData, appTheme } = useGlobalStore()

    const confirmButton: Omit<IActionButton, 'actionHandler'> = { 
        className: 'delivery-form_confirm-button',
        text: 'Перейти к оплате заказа'
    }

    useEffect(() => {
        appTheme === 'dark' && setThemeCLassName('dark-theme')
        appTheme === 'light' && setThemeCLassName('')
    }, [appTheme])

    useEffect(() => {
        deliveryFormOpen && setOpenCLassName('open')
        !deliveryFormOpen && setOpenCLassName('')
    }, [deliveryFormOpen])

    return (
        <div className={`delivery-form ${themeClassName} ${openClassName}`}>
            <ActionButton 
                type="menu-open" 
                className="close-form-btn"
                actionHandler={() => setDeliveryFormOpen(false)}
            />
            <h2 className='delivery-form_extra-title'>Стоимость заказа: {orderData?.full_price} ₽</h2>
          
            <BaseControlForm 
                onConfirm={onConfirm} 
                extraConfirmHandlers={extraConfirmHandlers}
                title="Введите данные для доставки"
                confirmButton={confirmButton}
            >
                <>
                    <Form.Item rules={validationRules} name={ 'city' }>
                        <Input placeholder="Город" />
                    </Form.Item>
                    <Form.Item rules={validationRules} name={ 'street' }>
                        <Input placeholder="Улица"/>
                    </Form.Item>
                    <Form.Item rules={validationRules} name={ 'building' }>
                        <Input placeholder="Дом"/>
                    </Form.Item>
                </>
            </BaseControlForm>
        </div>
    )
}