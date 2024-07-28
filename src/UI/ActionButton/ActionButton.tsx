import {PlusOutlined, EditOutlined, CheckOutlined, DeleteOutlined, ArrowDownOutlined} from "@ant-design/icons"
import {Button} from "antd"
import { useGlobalStore } from "@/store/useGlobalStore";
import type {MouseEventHandler} from "react";
import './ActionButton.scss'

type TActions = 'add' | 'edit' | 'check' | 'delete' | 'complete'

interface IActionButton {
    className?: string
    text?: string
    actionHandler: MouseEventHandler<HTMLElement>
    type?: TActions
}

export const ActionButton = ({className, text, actionHandler, type}: IActionButton) =>  {

    const {theme} = useGlobalStore()

    const themeSwitcher = () => theme === 'dark' ? 'default' : 'primary'

    const getActionIcon = (type: TActions | undefined) => {
        switch (type) {
            case 'add': return <PlusOutlined/>
            case 'edit': return <EditOutlined/>
            case 'check': return <CheckOutlined/>
            case 'delete': return <DeleteOutlined/>
            case 'complete': return <ArrowDownOutlined/>
        }
    }

    return (
        <Button
            className={`action-button ${className && className}`}
            type={themeSwitcher()}
            onClick={actionHandler}
        >
            {text}
            {getActionIcon(type)}
        </Button>
    )
}
