import type { IActionButton } from "@/UI/ActionButton/ActionButton";
import { ActionButton } from "@/UI/ActionButton/ActionButton";
import type { CSSProperties } from "react";
import './MenuButton.scss'


export interface IMenuButton extends IActionButton {
    menuOpen: boolean,
}

type MenuButtonProps = {
    className: IActionButton['className']
    size: IActionButton['size']
    ghost: IActionButton['ghost']
    iconStyle: IActionButton['iconStyle']
}

export const MenuButton = ({ menuOpen, ...restProps }: IMenuButton) => {


    const menuButtonIconStyle: CSSProperties = {
        fontSize: '40px',
        color: 'white',
    }

    const menuButtonProps: MenuButtonProps = {
        className: 'menu-button',
        size: 'large',
        ghost: true,
        iconStyle: menuButtonIconStyle
    }

    

    return (
        menuOpen 
            ? <ActionButton type="menu-open" {...menuButtonProps} {...restProps}/> 
            : <ActionButton type="menu-closed" {...menuButtonProps} {...restProps}/>
    )
}