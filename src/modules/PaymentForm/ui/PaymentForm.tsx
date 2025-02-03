import { useState, useEffect, Dispatch } from "react"
import { Form, Input, notification, Space } from "antd"
import { useForm } from "antd/es/form/Form"
import { useQuery, useMutation } from "@apollo/client"
import { BaseControlForm } from "@/components/ControlledForm/BaseControlForm"
import { BaseModal } from "@/components/BaseModal/BaseModal"
import { useGlobalStore } from "@//store/useGlobalStore"
import { CREATE_TRANSACTION } from "../queries"
import type { IBaseControlForm } from "@/components/ControlledForm/BaseControlForm"
import type { IActionButton } from "@/UI/ActionButton/ActionButton"
import type { IDeliveryData } from "@/types"


const cardNumRules = [{required: true, message: 'Поле не может быть пустым'}]
const cardHolderRules = [{required: true, message: 'Поле не может быть пустым'}]
const CVVCodeRules = [{required: true, message: 'Поле не может быть пустым'}]

interface IPaymentForm extends IBaseControlForm {
    isOpen: boolean, 
    closeForm: () => void,
    deliveryData: IDeliveryData
}

export const PaymentForm = ({ isOpen, closeForm, onConfirm, deliveryData }: IPaymentForm) => { 

    const { orderData, setOrderItems, setOrderId } = useGlobalStore()
    const { order, items, full_price } = orderData || {}
    
    const payOrder = async () => {
        createTransaction()
        notification.success( {message: 'Ваш заказ оплачен!' })
        setOrderItems([])
        setOrderId(undefined)
    }

    const [ createTransaction, { data } ] = useMutation(
        CREATE_TRANSACTION, { 
            variables: { 
                order_id: order.id, 
                order_items: items && items.map(item => ({ id: item.id, product_count: item.product_count })), 
                full_price,
                ...deliveryData
            }
        }
    )

    console.log(deliveryData, 'deliveryData')

    const confirmButton: Omit<IActionButton, 'actionHandler'> = { 
        className: 'delivery-form_confirm-button',
        text: 'Оплатить',
        type: 'pay'
    }

    return (
        <BaseModal isOpen={isOpen} onCancel={closeForm}>
            <BaseControlForm 
                extraConfirmHandlers={[() => payOrder(), closeForm]} 
                confirmButton={confirmButton}
                onConfirm={onConfirm}
            >
                <>
                    <Form.Item rules={cardNumRules} name='cardNum'>
                        <Input placeholder="Номер карты"/>
                    </Form.Item>
                    <Form.Item rules={cardHolderRules} name='cardHolder'>
                        <Input placeholder="Имя владельца карты"/>
                    </Form.Item>
                    <Form.Item rules={CVVCodeRules} name='cardCode'>
                        <Input placeholder="cvv код"/>
                    </Form.Item>
                </>
            </BaseControlForm>
        </BaseModal>
    )
}