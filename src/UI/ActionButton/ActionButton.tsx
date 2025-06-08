import {
    PlusOutlined, 
    MinusOutlined, 
    EditOutlined, 
    CheckOutlined, 
    DeleteOutlined, 
    ArrowDownOutlined,
    ArrowLeftOutlined,
    MoneyCollectFilled,
    MenuUnfoldOutlined,
    CloseOutlined
} from "@ant-design/icons"
import {Button} from "antd"
import { useGlobalStore } from "@/store/useGlobalStore";
import type {MouseEventHandler} from "react";
import type { CSSProperties } from "react";
import './ActionButton.scss'

export type TActions = 'add' | 'reduce' | 'edit' | 'check' | 'delete' | 'complete' | 'down' | 'left' | 'pay' | 'menu-open' | 'menu-closed'

export interface IActionButton {
    className?: string
    text?: string
    actionHandler?: MouseEventHandler<HTMLElement>
    type?: TActions,
    disabled?: boolean,
    size?: 'large' | 'middle' | 'small',
    ghost?: boolean,
    iconStyle?: CSSProperties
}

export const ActionButton = ({className, text, actionHandler, type, disabled, size, ghost, iconStyle}: IActionButton) =>  {

    const {theme} = useGlobalStore()

    const themeSwitcher = () => theme === 'dark' ? 'default' : 'primary'

    const getActionIcon = (type: TActions | undefined, iconStyle: CSSProperties | undefined) => {
        switch (type) {
            case 'add': return <PlusOutlined style={iconStyle}/>
            case 'reduce': return <MinusOutlined style={iconStyle}/>
            case 'edit': return <EditOutlined style={iconStyle}/>
            case 'check': return <CheckOutlined style={iconStyle}/>
            case 'delete': return <DeleteOutlined style={iconStyle}/>
            case 'down': return <ArrowDownOutlined style={iconStyle}/>
            case 'left': return <ArrowLeftOutlined style={iconStyle}/>
            case 'pay': return <MoneyCollectFilled style={iconStyle}/>
            case 'menu-open': return <CloseOutlined style={iconStyle}/>
            case 'menu-closed': return <MenuUnfoldOutlined style={iconStyle}/>
        }
    }

    return (
        <Button
            className={`action-button ${className && className}`}
            type={themeSwitcher()}
            onClick={actionHandler}
            disabled={disabled}
            size={size}
            ghost={ghost}
        >
            {text}
            {getActionIcon(type, iconStyle)}
        </Button>
    )
}
