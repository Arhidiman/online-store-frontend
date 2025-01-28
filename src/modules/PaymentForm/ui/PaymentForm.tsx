import { useState, useEffect } from "react"
import { Form, Input, notification, Space } from "antd"
import type { FormInstance } from 'antd'
import { useForm } from "antd/es/form/Form"
import { useQuery, useMutation } from "@apollo/client"
import { useGlobalStore } from "../../../store/useGlobalStore"
import { ActionButton } from "../../../UI/ActionButton"
import { CREATE_TRANSACTION, GET_ORDER_ITEMS } from "../queries"
import type { Dispatch } from "react"
import type { OrderItemsInfoDto } from "../../Cart/dto"

const cardNumRules = [{required: true, message: 'Поле не может быть пустым'}]
const cardHolderRules = [{required: true, message: 'Поле не может быть пустым'}]
const CVVCodeRules = [{required: true, message: 'Поле не может быть пустым'}]

interface IPaymentForm {
    confirmHandler?: Function,
    cancelHandler: Dispatch<boolean>
    onChange?: (value: string) => void,
    value?: string
}

export const PaymentForm = ({ cancelHandler, onChange, value }: IPaymentForm) => { 



    const { orderData, setOrderItems, setOrderId } = useGlobalStore()
    const { order, items, full_price } = orderData || {}
    const [form] = useForm()
    
    const payOrder = async () => {
        form.validateFields()
        createTransaction()
        notification.success( {message: 'Ваш заказ оплачен!' })
        setOrderItems([])
        setOrderId(undefined)
        cancelHandler(false)
    }

    const [ createTransaction, { data } ] = useMutation(
        CREATE_TRANSACTION, { 
            variables: { 
                order_id: order.id, 
                order_items: items && items.map(item => ({ id: item.id, product_count: item.product_count })), 
                full_price}
        }
    )

    const { data: orderItemsData } = useQuery(GET_ORDER_ITEMS, { variables: { order_id: orderData.order.id }, skip: !orderData.order.id, fetchPolicy: 'network-only' })

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
            <Space size={15}>
                <ActionButton text="Оплатить" type="pay" actionHandler={() => payOrder()}/>
                <ActionButton text="Отмена" actionHandler={() => cancelHandler(false)}/>
            </Space>
      
        </Form>

    )
}