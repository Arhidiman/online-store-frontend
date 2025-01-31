import { Form, Input } from "antd"
import { ActionButton } from "@/UI/ActionButton"
import { BaseControlForm } from "@//components/ControlledForm/BaseControlForm"
import type { IBaseControlForm } from "@//components/ControlledForm/BaseControlForm"
import type { MouseEventHandler } from "react"
import type { IActionButton } from "@/UI/ActionButton/ActionButton"
import './DeliveryForm.scss'

const validationRules = [{ required: true, message: 'Поле не может быть пустым' }]


export type TDeliveryData = {
    city: string,
    street: string,
    building: string
}

type IDeliveryForm = Omit<IBaseControlForm, 'children'>

export const DeliveryForm = ({  onConfirm, extraConfirmHandlers }: IDeliveryForm) => { 

    const confirmButton: Omit<IActionButton, 'actionHandler'> = { 
        className: 'delivery-form_confirm-button',
        text: 'Перейти к оплате заказа'
    }

    return (
        <div className="delivery-form">
            <BaseControlForm 
                onConfirm={onConfirm} 
                extraConfirmHandlers={extraConfirmHandlers}
                title="Введите данные для доставки заказа"
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