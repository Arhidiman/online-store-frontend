import {Modal as AntModal} from "antd";
import type { ReactElement } from "react";

interface IModal {
    title?: string,
    children?: ReactElement
    isOpen: boolean
    onCancel?: ((e?: React.MouseEvent<HTMLButtonElement>) => void) | undefined
}

export const BaseModal = ({ title, children, isOpen, onCancel }: IModal) => {
    return (
        <AntModal
            title={title}
            open={isOpen}
            onCancel={onCancel}
            footer={null}
        >
            {children}
        </AntModal>
    )
}

