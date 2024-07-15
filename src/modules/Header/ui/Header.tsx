import {useAuthPageStore} from "@/pages/AuthPage/store/useAuthPageStore.ts"
import {UserOutlined, LogoutOutlined} from "@ant-design/icons"
import {useGlobalStore} from "@/store/useGlobalStore.ts"
import './Header.scss'
import  { useState } from "react";
import type {SwitchChangeEventHandler} from "antd/es/switch";
import {type MenuTheme, Switch} from "antd";
export const Header = () =>  {
    const [theme, setTheme] = useState<MenuTheme>('dark');

    const {authUser} = useAuthPageStore()

    console.log(authUser)

    const themeSwitcher = (theme: "dark" | "light", changeTheme: SwitchChangeEventHandler)  =>
        <Switch className="side-menu-theme-switcher" checked={theme === 'dark'} onChange={changeTheme} theme={theme}/>

    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
    }

    return (
        <header className='header'>
            <div className='header-container'>

                <div className='header-user'>
                    <UserOutlined />
                    <p>{authUser.username}</p>
                    <LogoutOutlined/>
                </div>
                {themeSwitcher(theme, changeTheme)}
            </div>
        </header>
    )
}


