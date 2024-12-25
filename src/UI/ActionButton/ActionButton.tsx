import {
    PlusOutlined, 
    MinusOutlined, 
    EditOutlined, 
    CheckOutlined, 
    DeleteOutlined, 
    ArrowDownOutlined
} from "@ant-design/icons"
import {Button} from "antd"
import { useGlobalStore } from "@/store/useGlobalStore";
import type {MouseEventHandler} from "react";
import './ActionButton.scss'

type TActions = 'add' | 'reduce' | 'edit' | 'check' | 'delete' | 'complete' | 'down'

interface IActionButton {
    className?: string
    text?: string
    actionHandler?: MouseEventHandler<HTMLElement>
    type?: TActions
    disabled?: boolean
}

export const ActionButton = ({className, text, actionHandler, type, disabled}: IActionButton) =>  {

    const {theme} = useGlobalStore()

    const themeSwitcher = () => theme === 'dark' ? 'default' : 'primary'

    const getActionIcon = (type: TActions | undefined) => {
        switch (type) {
            case 'add': return <PlusOutlined/>
            case 'reduce': return <MinusOutlined/>
            case 'edit': return <EditOutlined/>
            case 'check': return <CheckOutlined/>
            case 'delete': return <DeleteOutlined/>
            case 'down': return <ArrowDownOutlined/>
        }
    }

    return (
        <Button
            className={`action-button ${className && className}`}
            type={themeSwitcher()}
            onClick={actionHandler}
            disabled={disabled}
        >
            {text}
            {getActionIcon(type)}
        </Button>
    )
}
