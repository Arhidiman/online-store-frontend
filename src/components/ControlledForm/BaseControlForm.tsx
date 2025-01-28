import { Dispatch, useState } from "react"
import { Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import { ActionButton } from "@/UI/ActionButton"
import type { ReactElement } from "react"
import type { FormInstance } from "antd/es/form/Form"


export interface IBaseControlForm {
    onConfirm: Function,
    extraConfirmHandler?: Function,
    children: ReactElement
}

export const BaseControlForm = ({ 
    onConfirm,
    extraConfirmHandler,
    children
}: IBaseControlForm) => { 

    const [ form ] = useForm()

    const validateFields = async () => {
        await form.validateFields()
        onConfirm?.()
        extraConfirmHandler?.()
    }

    return (
        <div className="delivery-form">
            <h2 className="delivery-form_title">Введите данные для доставки заказа</h2>
                <Form form={form}>
                    {children}
                </Form>
                
            <ActionButton className='delivery-form_confirm-button' actionHandler={validateFields} text="Перейти к оплате заказа"/>
        </div>
    )
}