import { Form, Input } from "antd"
import { BaseControlForm } from "@//components/ControlledForm/BaseControlForm"
import type { IBaseControlForm } from "@//components/ControlledForm/BaseControlForm"
import './DeliveryForm.scss'

const validationRules = [{ required: true, message: 'Поле не может быть пустым' }]


type IDeliveryForm = Omit<IBaseControlForm, 'children'>

export const DeliveryForm = ({  onConfirm, extraConfirmHandler }: IDeliveryForm) => { 
    return (
        <div className="delivery-form">
            <h2 className="delivery-form_title">Введите данные для доставки заказа</h2>
            <BaseControlForm onConfirm={onConfirm} extraConfirmHandler={extraConfirmHandler}>
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