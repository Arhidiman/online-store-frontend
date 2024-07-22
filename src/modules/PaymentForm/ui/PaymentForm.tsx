import { Form, Input } from "antd"
import type { FormInstance } from 'antd'

const cardNumRules = [{required: true, message: 'Поле не может быть пустым'}]
const cardHolderRules = [{required: true, message: 'Поле не может быть пустым'}]
const CVVCodeRules = [{required: true, message: 'Поле не может быть пустым'}]

interface IPaymentForm {
    form: FormInstance
}

export const PaymentForm = ({form}: IPaymentForm) => { 

    return (

        <Form form={form}>
            <Form.Item rules={cardNumRules} name='cardNum'>
                <Input placeholder="Номер карты"/>
            </Form.Item>
            <Form.Item rules={cardHolderRules} name='cardHolder'>
                <Input placeholder="Имя владельца карты"/>
            </Form.Item>
            <Form.Item rules={CVVCodeRules} name='cardCode'>
                <Input placeholder="cvv код"/>
            </Form.Item>
        </Form>

    )
}