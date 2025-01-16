import { Dispatch } from "react"
import { Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import { ActionButton } from "@/UI/ActionButton"
import type { FormInstance } from "antd/es/form/Form"
import './DeliveryForm.scss'


interface IDeliveryForm {
    confirmHandler: Dispatch<boolean>,
    form: FormInstance
}


const validationRules = [{ required: true, message: 'Поле не может быть пустым' }]

export const DeliveryForm = ({ confirmHandler, form }: IDeliveryForm) => { 
    
    const validateFields = async () => {
        await form.validateFields()
        confirmHandler(true)
    }

    return (
        <div className="delivery-form">
            <h2 className="delivery-form_title">Введите данные для доставки заказа</h2>
            <Form form={form}>
                <Form.Item rules={validationRules} name='city'>
                    <Input placeholder="Город"/>
                </Form.Item>
                <Form.Item rules={validationRules} name='street'>
                    <Input placeholder="Улица"/>
                </Form.Item>
                <Form.Item rules={validationRules} name='building'>
                    <Input placeholder="Дом"/>
                </Form.Item>
            </Form>
            <ActionButton className='delivery-form_confirm-button' actionHandler={validateFields} text="Перейти к оплате заказа"/>
        </div>
    )
}