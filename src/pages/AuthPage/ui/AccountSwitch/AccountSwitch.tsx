import { Space } from "antd";
import { useGlobalStore } from "@/store/useGlobalStore";
import { useAuthPageStore } from "@/pages/AuthPage/store/useAuthPageStore.ts"
import { headerStore } from "@/modules/Header/store/headerStore";
import { ActionButton } from "@/UI/ActionButton";
import { routes } from "@/common/constants/routes";
import './AccountSwitch.scss'

export const AccountSwitch = () =>  {

    const { currentUser, setCurrentUser } = useGlobalStore()
    const { switchAuthReg } = useAuthPageStore()
    const { setCurrentTab } = headerStore()

    const exitAccount = () => {

        switchAuthReg()
        setCurrentUser('')
        localStorage.setItem('token', '')
        localStorage.setItem('username', '')
    }

    const goToProducts = () => {
        setCurrentTab(routes.main)
    }


    return (
            <div className='account-switch-container'>
                <h2 className="account-switch-title">{currentUser}, Вы авторизованы</h2>
                <Space size={50}>
                    <ActionButton 
                        text="К покупкам"
                        type="left"
                        actionHandler={goToProducts}
                        size="large"
                    />
                
                    <ActionButton 
                        text="Войти под другим пользователем"
                        actionHandler={exitAccount}
                        size="large"
                />
                </Space>
            </div>
    )
}


