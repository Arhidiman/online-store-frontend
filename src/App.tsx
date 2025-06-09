import { useEffect } from "react"
import { theme } from "antd" 
import { AppRouter } from "@/AppRouter/AppRouter.tsx"
import { useGlobalStore } from "./store/useGlobalStore"
import { screens } from "./common/constants/screens"
import type { GlobalToken, TokenWithCommonCls } from "antd/es/theme/internal"
import './App.css'

const { useToken } = theme


type CustomGlobalToken = TokenWithCommonCls< {
    backgroundColorDark: string,
    backgroundColorLight: string,
    colorDarkTheme: string,
    colorLightTheme: string,
}>

function App() {

    const { token } = useToken()

    const customToken = token as unknown as  CustomGlobalToken

    const { setIsMobileVersion, switchTheme, theme } = useGlobalStore()

    const screenWidth = window.screen.width

    useEffect(() => {
        if ( screenWidth && screenWidth <= screens.mobile ) {
            setIsMobileVersion(true)
        }
    }, [])

    useEffect(() => {
        const root = document.getElementById('root')


        if (root && theme === 'dark') {
            root.style.background = customToken.backgroundColorDark
            root.style.color = customToken.colorDarkTheme
        }
        if (root && theme === 'light') {
            root.style.background = customToken.backgroundColorLight
            root.style.color = customToken.colorLightTheme
        }

        console.log(token, 'token')
        
        console.log(root, 'root')
    }, [theme])

    return (
        
        <AppRouter/>
        
    )
}

export default App
