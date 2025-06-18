
import { useEffect, useState } from "react";
import {Card, Form, Input, notification, Space} from "antd";
import { useMutation } from "@apollo/client";
import {useAuthPageStore} from "@/pages/AuthPage/store/useAuthPageStore.ts"
import {useNavigate} from "react-router-dom";
import { ActionButton } from "@/UI/ActionButton";
import { useGlobalStore } from "@/store/useGlobalStore.ts";
import { headerStore } from "@//modules/Header/store/headerStore";
import { SIGN_UP } from "../../queries";
import { routes } from "@/common/constants/routes";
import './RegistrationCard.scss'

export const RegistrationCard = () =>  {

    const { setOrderData, isMobileVersion } = useGlobalStore()
    const { switchAuthReg } = useAuthPageStore()
    const { setCurrentTab } = headerStore()

    const [ username, setUsername ] = useState<string>('')
    const [layoutDirecion, setLayoytDirection] = useState<'vertical' | 'horizontal'>('vertical')
    const [form] = Form.useForm()

    const [register, { data, error }] = useMutation(SIGN_UP)

    const navigate = useNavigate()

    const submitRegistration = async () => {
        try {
            const userData = await form.validateFields()
            const { username, password } = userData
            
            setUsername(username)
            register({ variables: { username, password}})
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        const { signUp } = data || {}

        if (signUp) {
            const { jwt_token } = signUp
    
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
        <Card className='registration-card' title='Регистрация'>
            <Form className='registration-card-form' form={form}>
                <Form.Item rules={inputRules} name='username'>
                    <Space direction={layoutDirecion} className='input-item'>
                        <span className="label">Имя пользователя</span>
                        <Input className='input' placeholder='имя'/>
                    </Space>
                </Form.Item>
                <Form.Item rules={inputRules} name='password'>
                    <Space direction={layoutDirecion} className='input-item' >
                        <span className="label">Пароль</span>
                        <Input className='input' placeholder='Пароль'/>
                    </Space>
                </Form.Item>
                <ActionButton className="registration-button" actionHandler={submitRegistration} text="Зарегистрироваться"/>
            </Form>
            <div className='auth-message'>
                <span>Уже зарегистрированы?</span>
                <ActionButton actionHandler={switchAuthReg} text="Войти"/>
            </div>
        </Card>
    )
}


