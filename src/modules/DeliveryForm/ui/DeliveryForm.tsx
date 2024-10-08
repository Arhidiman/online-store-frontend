import { Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import { ActionButton } from "@/UI/ActionButton"
import './DeliveryForm.scss'
import { Dispatch } from "react"


interface IDeliveryForm {
    confirmHandler: Dispatch<boolean>
}


const validationRules = [{required: true, message: 'Поле не может быть пустым'}]

export const DeliveryForm = ({confirmHandler}: IDeliveryForm) => { 

    const [form] = useForm()
    
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