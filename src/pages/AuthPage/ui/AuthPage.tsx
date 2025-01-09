import {RegistrationCard} from "@/pages/AuthPage/ui/RegistrationCard/RegistrationCard.tsx";
import {AuthCard} from "@/pages/AuthPage/ui/AuthCard/AuthCard.tsx";
import { AccountSwitch } from "./AccountSwitch/AccountSwitch";
import {useAuthPageStore} from "@/pages/AuthPage/store/useAuthPageStore.ts";
import './AuthPage.scss'

export const AuthPage = () =>  {

    const {isAuth} = useAuthPageStore()

    const token = localStorage.getItem('token')

    return (
        <div className='auth-container'>
            {
                isAuth && !token
                ?<RegistrationCard/>
                : !token ? <AuthCard/>
                : null
            }

            {
                token && <AccountSwitch/>
            }
        </div>
    )
}


