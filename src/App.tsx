import { useEffect } from "react"
import { AppRouter } from "@/AppRouter/AppRouter.tsx"
import { useGlobalStore } from "./store/useGlobalStore"
import { screens } from "./common/constants/screens"
import './App.css'

function App() {

    const { setIsMobileVersion} = useGlobalStore()

    const screenWidth = window.screen.width

    useEffect(() => {
        if ( screenWidth && screenWidth <= screens.mobile ) {
            setIsMobileVersion(true)
        }
    }, [])

    return (
        
        <AppRouter/>
        
    )
}

export default App
