import React, { useEffect} from "react"
import { ConfigProvider, theme } from "antd" 
import { useGlobalStore } from "@/store/useGlobalStore"
import { COLORS } from "@/common/constants/themeColors"
import { screens } from "@/common/constants/screens"

type CustomGlobalToken = {
    backgroundColorDark: string,
    backgroundColorLight: string,
    colorDarkTheme: string,
    colorLightTheme: string,
}

export const ThemeProvider = ({ children }: { children: React.ReactElement}) => {
    
    const customToken: CustomGlobalToken = {
        colorDarkTheme: 'white',
        colorLightTheme: 'black',
        backgroundColorDark: '#333',
        backgroundColorLight: '#ececec',
    }

    const { setIsMobileVersion, appTheme } = useGlobalStore()

    const screenWidth = window.screen.width

    const themeConfig = {
        algorithm: appTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
            colorPrimary: COLORS.common.light,
            fontFamily: 'Arial, sans-serif',
            
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
            root.style.background = customToken.backgroundColorDark
            root.style.color = customToken.colorDarkTheme

            console.log(customToken.colorDarkTheme, customToken.colorLightTheme)
        }
        if (root && appTheme === 'light') {
            root.style.background = customToken.backgroundColorLight
            root.style.color = customToken.colorLightTheme
        }
    }, [appTheme])


    return (
        <ConfigProvider theme={themeConfig}>
            {children}
        </ConfigProvider>
    )
}