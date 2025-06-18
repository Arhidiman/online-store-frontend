
import { useState } from "react";
import {useGlobalStore} from "@/store/useGlobalStore.ts"
import {Switch, Input} from "antd";
import { Header } from "antd/es/layout/layout";
import {COLORS} from '@/common/constants/themeColors'
import { routes } from "@/common/constants/routes";
import type {SwitchChangeEventHandler} from "antd/es/switch";
import './MobileHeader.scss'

export const MobileAppHeader = () =>  {


    const [ currentPage ] = useState(window.location.pathname)

    const { 
        appTheme, 
        switchTheme, 
    } = useGlobalStore()

    const themeSwitcher = (changeTheme: SwitchChangeEventHandler)  =>
        <Switch className="side-menu-theme-switcher" onChange={changeTheme}/>

    const headerColor = () => {
        const color = appTheme === 'light' ? COLORS.light.header : COLORS.dark.header
        return {
            background: color
        }
    }

    console.log(window.location)

    return (
        currentPage !== routes.filters && 
        <Header className='mobile-header' style={headerColor()}>
            <div className='mobile-header-container'>
                <Input placeholder="Найти товар"/>
                {themeSwitcher(switchTheme)}
            </div>
        </Header>
    )
}


