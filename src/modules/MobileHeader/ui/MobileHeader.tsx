
import {useGlobalStore} from "@/store/useGlobalStore.ts"
import {Switch, Input} from "antd";
import { Header } from "antd/es/layout/layout";
import {COLORS} from '@/common/constants/themeColors'
import type {SwitchChangeEventHandler} from "antd/es/switch";
import './MobileHeader.scss'


export const MobileAppHeader = () =>  {

    const { 
        theme, 
        switchTheme, 
    } = useGlobalStore()

    const themeSwitcher = (changeTheme: SwitchChangeEventHandler)  =>
        <Switch className="side-menu-theme-switcher" onChange={changeTheme}/>

    const headerColor = () => {
        const color = theme === 'light' ? COLORS.light.header : COLORS.dark.header
        return {
            background: color
        }
    }

    return (
        <Header className='mobile-header' style={headerColor()}>
            <div className='header-container'>
                <Input placeholder="Найти товар"/>
                {themeSwitcher(switchTheme)}
            </div>
        </Header>
    )
}


