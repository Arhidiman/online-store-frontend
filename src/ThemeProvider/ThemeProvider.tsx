import React, { useState, useEffect} from "react"
import { ConfigProvider, theme } from "antd" 
import { useGlobalStore } from "@/store/useGlobalStore"
import { COLORS } from "@/common/constants/themeColors"
import { screens } from "@/common/constants/screens"
import type { TokenWithCommonCls } from "antd/es/theme/internal"




type CustomGlobalToken = TokenWithCommonCls< {
    backgroundColorDark: string,
    backgroundColorLight: string,
    colorDarkTheme: string,
    colorLightTheme: string,
}>

const { useToken } = theme

export const ThemeProvider = ({ children }: { children: React.ReactElement}) => {

    const { token } = useToken()
    
    const customToken = token as unknown as CustomGlobalToken

    const { setIsMobileVersion, appTheme } = useGlobalStore()

    const screenWidth = window.screen.width

    const themeConfig = {
        algorithm: appTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
            colorPrimary: COLORS.common.light,
            fontFamily: 'Arial, sans-serif',
            colorDarkTheme: 'white',
            colorLightTheme: 'black',
            backgroundColorDark: '#333',
            backgroundColorLight: '#ececec'
        },
        components: {
            Menu: {
                itemBg: COLORS.common.light,
                darkItemBg: COLORS.common.dark,
                subMenuItemBg: 'lightgrey'
            },
            Button: {
                defaultBg: '#780eff'
            }
        }
    }

    useEffect(() => {
        if ( screenWidth && screenWidth <= screens.laptop ) {
            setIsMobileVersion(true)
        }
    }, [])

    useEffect(() => {
        const root = document.getElementById('root')

        if (root && appTheme === 'dark') {
            root.style.background = '#333'
            root.style.color = customToken.colorDarkTheme
        }
        if (root && appTheme === 'light') {
            root.style.background = '#ececec'
            root.style.color = customToken.colorLightTheme
        }

        console.log(token, 'token')
        
        console.log(root, 'root')
    }, [appTheme])


    return (
        <ConfigProvider theme={themeConfig}>
            {children}
        </ConfigProvider>
    )
}