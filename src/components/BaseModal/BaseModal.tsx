import { useState } from "react";
import {Modal as AntModal} from "antd";
import type { ReactElement} from "react";

interface IModal {
    title?: string,
    children?: ReactElement
}


export const BaseModal = ({ title, children }: IModal) => {

    const [isOpen, setIsModalOpened] = useState(false)
    const closeModal = () => setIsModalOpened(false)
    
    return (
        <AntModal
            title={title}
            open={isOpen}
            onCancel={closeModal}
            footer={null}
        >
            {children}
        </AntModal>
    )
}

