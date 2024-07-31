import { useNavigate } from "react-router-dom"
import {useAuthPageStore} from "@/pages/AuthPage/store/useAuthPageStore.ts"
import {UserOutlined, LogoutOutlined} from "@ant-design/icons"
import {useGlobalStore} from "@/store/useGlobalStore.ts"
import type {SwitchChangeEventHandler} from "antd/es/switch";
import {Switch, Tabs} from "antd";
import { Header } from "antd/es/layout/layout";
import { routes } from "@/common/constants/routes"
import {COLORS} from '@/common/constants/themeColors'
import './Header.scss'


export const AppHeader = () =>  {

    const navigate = useNavigate()

    const {theme, switchTheme} = useGlobalStore()

    const {authUser} = useAuthPageStore()

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
                theme: theme
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

    return (
        <Header className='header' style={headerColor()}>
            <div className='header-container'>
                <Tabs
                    items={tabItems}
                    onChange={(key) => navigate(key)}
                />
                <div className="header-right">
                    <div className='header-user'>
                        <UserOutlined />
                        <p>{authUser.username}</p>
                        <LogoutOutlined/>
                    </div>
                    {themeSwitcher(theme, switchTheme)}
                </div>
            </div>
        </Header>
    )
}


