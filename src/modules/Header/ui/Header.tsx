import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import {useAuthPageStore} from "@/pages/AuthPage/store/useAuthPageStore.ts"
import {UserOutlined, LogoutOutlined} from "@ant-design/icons"
import {useGlobalStore} from "@/store/useGlobalStore.ts"
import type {SwitchChangeEventHandler} from "antd/es/switch";
import {Switch, Tabs} from "antd";
import { Header } from "antd/es/layout/layout";
import { headerStore } from "../store/headerStore";
import { routes } from "@/common/constants/routes"
import {COLORS} from '@/common/constants/themeColors'
import './Header.scss'


export const AppHeader = () =>  {

    const navigate = useNavigate()

    const { isMobileVersion, theme, switchTheme, currentUser, setCurrentUser } = useGlobalStore()
    const { currentTab, setCurrentTab } = headerStore()

    const themeSwitcher = (theme: "dark" | "light", changeTheme: SwitchChangeEventHandler)  =>
        <Switch className="side-menu-theme-switcher" onChange={changeTheme}/>

    const headerColor = () => {
        const color = theme === 'light' ? COLORS.light.header : COLORS.dark.header
        return {
            background: color
        }
    }

    const tabItems = [
            {
                label: 'Главная',
                key: routes.main,
                theme: theme
            },
            {
                label: 'Корзина',
                key: routes.cart,
                theme: theme,
            },
            {
                label: 'История покупок',
                key: routes.buyings,
            },
            {
                label: 'Вход',
                key: routes.auth
            }
        ]

    useEffect(() => {
        setCurrentUser(localStorage.getItem('username') || "")
    }, [currentTab])

    useEffect(() => {
        navigate(currentTab)
    }, [currentTab])

    const navigateByTab = (tab: string) => {
        navigate(tab)
        setCurrentTab(tab)
    }

    return (
        <Header className='header' style={headerColor()}>
            <div className='header-container'>

                {
                
                    <Tabs
                        items={tabItems}
                        onChange={navigateByTab}
                        activeKey={currentTab}
                    />
                
                }
               
                <div className="header-right">
                    <div className='header-user'>
                        <UserOutlined />
                        <p>{ currentUser }</p>
                        <LogoutOutlined/>
                    </div>
                    {themeSwitcher(theme, switchTheme)}
                </div>
            </div>
        </Header>
    )
}


