import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import {useAuthPageStore} from "@/pages/AuthPage/store/useAuthPageStore.ts"
import {UserOutlined, LogoutOutlined} from "@ant-design/icons"
import {useGlobalStore} from "@/store/useGlobalStore.ts"
import type {SwitchChangeEventHandler} from "antd/es/switch";
import {Switch, Tabs, Input} from "antd";
import { Header } from "antd/es/layout/layout";
import { MenuButton } from "../../../components/MenuButton/MenuButton";
import { headerStore } from "../store/headerStore";
import { routes } from "@/common/constants/routes"
import {COLORS} from '@/common/constants/themeColors'
import './Header.scss'


export const AppHeader = () =>  {

    const navigate = useNavigate()

    const { 
        isMobileVersion, 
        appTheme, 
        switchTheme, 
        currentUser, 
        setCurrentUser, 
        isCategoriesMenuOpen,
        setIsCategoriesMenuOpen
    } = useGlobalStore()
    const { currentTab, setCurrentTab } = headerStore()

    const themeSwitcher = (theme: "dark" | "light", changeTheme: SwitchChangeEventHandler)  =>
        <Switch className="side-menu-theme-switcher" onChange={changeTheme}/>

    const headerColor = () => {
        const color = appTheme === 'light' ? COLORS.light.header : COLORS.dark.header
        return {
            background: color
        }
    }

    const switchCategoriesMenuOpen = () => {
        setIsCategoriesMenuOpen(!isCategoriesMenuOpen)
    }

    const tabItems = [
            {
                label: 'Главная',
                key: routes.main,
                theme: appTheme
            },
            {
                label: 'Корзина',
                key: routes.cart,
                theme: appTheme,
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

                <MenuButton 
                    menuOpen={isCategoriesMenuOpen}
                    actionHandler={switchCategoriesMenuOpen}
                />
                <Input placeholder="Найти товар"/>

                <Tabs
                    items={tabItems}
                    onChange={navigateByTab}
                    activeKey={currentTab}
                />

                <div className="header-right">
                    <div className='header-user'>
                        <UserOutlined />
                        <p>{ currentUser }</p>
                        <LogoutOutlined/>
                    </div>
                    {themeSwitcher(appTheme, switchTheme)}
                </div>
            </div>
        </Header>
    )
}


