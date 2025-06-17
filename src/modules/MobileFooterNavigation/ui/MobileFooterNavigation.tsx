import { useEffect, useState } from "react";
import { useGlobalStore } from "@/store/useGlobalStore.ts"
import { Switch, Tabs } from "antd";
import { Footer } from "antd/es/layout/layout";
import { HomeFilled, ShoppingFilled, HistoryOutlined, UserOutlined, FilterFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { COLORS } from '@/common/constants/themeColors'
import { routes } from "@/common/constants/routes"
import type {SwitchChangeEventHandler} from "antd/es/switch";
import './MobileFooterNavigation.scss'


export const MobileFooterNavigation = () =>  {

    const [ currentTab, setCurrentTab ] = useState('')

    const navigate = useNavigate()

    const { 
        isMobileVersion, 
        appTheme, 
        switchTheme, 
        currentUser, 
        setCurrentUser, 
        isCategoriesMenuOpen,
        setIsCategoriesMenuOpen,
    } = useGlobalStore()

    // const { currentTab, setCurrentTab } = headerStore()

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
                label: <HomeFilled className="nav-icon"/>,
                key: routes.main,
                theme: appTheme
            },
            {
                label: <FilterFilled className="nav-icon"/>,
                key: routes.filters,
                theme: appTheme,
            },
            {
                label: <ShoppingFilled className="nav-icon"/>,
                key: routes.cart,
                theme: appTheme,
            },
            {
                label: <HistoryOutlined className="nav-icon"/>,
                key: routes.buyings,
            },
            {
                label: <UserOutlined className="nav-icon"/>,
                key: routes.auth
            }
        ]

    useEffect(() => {
        // setCurrentUser(localStorage.getItem('username') || "")
    }, [currentTab])

    useEffect(() => {
        navigate(currentTab)
    }, [currentTab])

    const navigateByTab = (tab: string) => {
        navigate(tab)
        setCurrentTab(tab)
    }

    return (
        <Footer className='mobile-footer' style={headerColor()}>
            <div className="mobile-footer-container">
                <Tabs
                    items={tabItems}
                    onChange={navigateByTab}
                    // activeKey={currentTab}
                />
            </div>
        </Footer>
    )
}


