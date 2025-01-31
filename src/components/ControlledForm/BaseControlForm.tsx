import { Dispatch, useState } from "react"
import { Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import { ActionButton } from "@/UI/ActionButton"
import type { ReactElement, ReactNode } from "react"
import type { TActions, IActionButton } from "@//UI/ActionButton/ActionButton"
import type { FormInstance } from "antd/es/form/Form"


export interface IBaseControlForm {
    onConfirm?: (data?: any) => any,
    extraConfirmHandlers?: Function[],
    children: ReactElement,
    title?: string,
    className?: string
    confirmButton?: IActionButton
    cancelButton?: IActionButton
}



export const BaseControlForm = ({ 
    onConfirm,
    extraConfirmHandlers,
    children,
    title,
    confirmButton,
    cancelButton
}: IBaseControlForm) => { 

    const [ form ] = useForm()

    const validateFields = async () => {
        const data = await form.validateFields()
        onConfirm?.(data)

        extraConfirmHandlers?.forEach(handler => handler())
    }

    const ConfirmButton =  () => confirmButton ?  <ActionButton  { ...confirmButton } actionHandler={validateFields}/> : null
    const CancelButton =  () => cancelButton ?  <ActionButton  { ...cancelButton }/> : null

    return (
        <div className="base-form">
            <h2 className="delivery-form_title">{title || ''}</h2>
                <Form form={form} style={{width: '80%'}}>
                    {children}
                </Form>

            
                <ConfirmButton/>
                <CancelButton/>
            {/* <ActionButton className='delivery-form_confirm-button' actionHandler={validateFields} text="Перейти к оплате заказа"/> */}
        </div>
    )
}