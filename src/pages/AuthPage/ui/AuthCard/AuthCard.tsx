import { useEffect, useState } from "react";
import { Card, Form, Input, notification, Space } from "antd";
import { useGlobalStore } from "@/store/useGlobalStore";
import { useAuthPageStore } from "@/pages/AuthPage/store/useAuthPageStore.ts"
import { headerStore } from "@/modules/Header/store/headerStore";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "@/UI/ActionButton";
import { useMutation } from "@apollo/client"
import { routes } from "@/common/constants/routes";
import { SIGN_IN } from "@/pages/AuthPage/queries";
import './AuthCard.scss'

export const AuthCard = () =>  {

    const { setOrderData, isMobileVersion } = useGlobalStore()
    const { switchAuthReg } = useAuthPageStore()
    const { setCurrentTab } = headerStore()

    const [ username, setUsername ] = useState<string>('')
    const [layoutDirecion, setLayoytDirection] = useState<'vertical' | 'horizontal'>('vertical')
    const [form] = Form.useForm()

    const [authenticate, { data, error }] = useMutation(SIGN_IN)

    const navigate = useNavigate()


    const submitAuth = async () => {
        try {
            const userData = await form.validateFields()
            const { username, password } = userData
            
            setUsername(username)
            authenticate({ variables: { username, password}})
        } catch (error) {
        }
    }


    useEffect(() => {
        const { signIn } = data || {}

        if (signIn) {
            const { jwt_token } = signIn
    
            localStorage.setItem('token', jwt_token)
            localStorage.setItem('username', username)
            notification.success({ message: `Аутентификация прошла успешно\n Вы вошли как ${ username }`})
            navigate(routes.main)
            setCurrentTab(routes.main)
            setOrderData({ items: [] })
            setOrderData({ order: {} })
        }

        if (error) {
            notification.error(error)
        }

    }, [data, error])

    useEffect(() => {
        setLayoytDirection(isMobileVersion ? 'vertical' : 'horizontal')
    }, [isMobileVersion])

    const inputRules = [{ required: true, message: 'Это поле не может быть пустым' }]

    return (
        <Card className='auth-card' title='Вход'>
            <Form className='auth-card-form' form={form}>
                <Form.Item rules={inputRules} name='username'>
                    <Space className='input-item' direction={layoutDirecion}>
                        <span className="label">Имя пользователя</span>
                        <Input className='input' placeholder='имя'/>
                    </Space>
                </Form.Item>
                <Form.Item rules={inputRules} name='password'>
                    <Space className='input-item' direction={layoutDirecion}>
                        <span className="label">Пароль</span>
                        <Input className='input' placeholder='Пароль'/>
                    </Space>
                </Form.Item>

                <ActionButton 
                    className="auth-button" 
                    text="Войти"
                    actionHandler={submitAuth}
                />
            </Form>
            <div className='auth-message'>
                <span>Нет аккаунта?</span>
                <ActionButton 
                    text="Зарегистрироваться"
                    actionHandler={switchAuthReg}
                />
            </div>
        </Card>
    )
}


