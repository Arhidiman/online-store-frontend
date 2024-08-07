import { Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import { ActionButton } from "@/UI/ActionButton"
import './DeliveryForm.scss'

const validationRules = [{required: true, message: 'Поле не может быть пустым'}]

export const DeliveryForm = () => { 

    const [form] = useForm()
    
    const validateFields = async () => {
        await form.validateFields()
    }


    return (
        <div className="delivery-form">
            <h2>Введите данные для доставки заказа</h2>
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