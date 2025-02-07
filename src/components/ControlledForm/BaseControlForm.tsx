import { Form } from "antd"
import { useForm } from "antd/es/form/Form"
import { ActionButton } from "@/UI/ActionButton"
import type { ReactElement } from "react"
import type { IActionButton } from "@//UI/ActionButton/ActionButton"
import './BaseControlForm.scss'

export interface IBaseControlForm {
    onConfirm?: (data?: any) => any,
    extraConfirmHandlers?: Function[],
    children?: ReactElement,
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
            <h2 className="base-form_title">{title || ''}</h2>
                <Form form={form} style={{width: '80%'}}>
                    {children}
                </Form>
                <ConfirmButton/>
                <CancelButton/>
        </div>
    )
}