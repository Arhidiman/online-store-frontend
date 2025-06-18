import {Modal as AntModal} from "antd";
import type { ReactElement } from "react";

interface IModal {
    title?: string,
    children?: ReactElement
    isOpen: boolean
    onCancel?: ((e?: React.MouseEvent<HTMLButtonElement>) => void) | undefined
    onOk?: ((e?: React.MouseEvent<HTMLButtonElement>) => void) | undefined
    footer?: ReactElement
}

export const BaseModal = ({ title, children, isOpen, onCancel, onOk, footer }: IModal) => {
    return (
        <AntModal
            title={title}
            open={isOpen}
            onCancel={onCancel}
            onOk={onOk}
            footer={footer}
            okText='Ок'
            cancelText='Отмена'
        >
            {children}
        </AntModal>
    )
}

