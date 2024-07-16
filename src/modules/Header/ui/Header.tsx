import {useAuthPageStore} from "@/pages/AuthPage/store/useAuthPageStore.ts"
import {UserOutlined, LogoutOutlined} from "@ant-design/icons"
import {useGlobalStore} from "@/store/useGlobalStore.ts"
import './Header.scss'
import  { useState } from "react";
import type {SwitchChangeEventHandler} from "antd/es/switch";
import {type MenuTheme, Switch} from "antd";
import { Header } from "antd/es/layout/layout";




export const AppHeader = () =>  {




    const {theme, switchTheme} = useGlobalStore()


    const {authUser} = useAuthPageStore()

    console.log(authUser)

    const themeSwitcher = (theme: "dark" | "light", changeTheme: SwitchChangeEventHandler)  =>
        <Switch className="side-menu-theme-switcher" onChange={changeTheme}/>

    console.log(theme, theme)

    return (
        <Header className='header'>
            <div className='header-container'>

                <div className='header-user'>
                    <UserOutlined />
                    <p>{authUser.username}</p>
                    <LogoutOutlined/>
                </div>
                {themeSwitcher(theme, switchTheme)}
            </div>
        </Header>
    )
}


