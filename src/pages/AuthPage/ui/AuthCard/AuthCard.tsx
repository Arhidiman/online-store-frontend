import { useEffect, useState } from "react";
import { Card, Form, Input, notification } from "antd";
import { useAuthPageStore } from "@/pages/AuthPage/store/useAuthPageStore.ts"
import { useNavigate } from "react-router-dom";
import { ActionButton } from "@/UI/ActionButton";
import { useQuery } from "@apollo/client"
import { SIGN_IN } from "../../queries";
import './AuthCard.scss'

export const AuthCard = () =>  {

    const { switchAuthReg } = useAuthPageStore()

    const navigate = useNavigate()

    const [ username, setUsername ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')

    const [form] = Form.useForm()
    const inputRules = [{ required: true, message: 'Это поле не может быть пустым' }]

    const submitAuth = async () => {
        try {
            const userData = await form.validateFields()
            const { username, password } = userData
            
            setUsername(username)
            setPassword(password)

        } catch (error) {
            console.log(error)
        }
    }

    const { data, error } = useQuery(SIGN_IN, 
        { 
            variables: { username, password },
            skip: !username || !password 
        }
    )

    useEffect(() => {
        const { signIn } = data || {}

        if (signIn) {
            const { username, jwt_token } = signIn
            notification.success({ message: `Аутентификация прошла успешно\n Вы вошли как ${ username }`})
            localStorage.setItem('token', jwt_token)
            localStorage.setItem('username', username)
            navigate('/')
        }

        if (error) {
            console.log(error)
            notification.error(error)
        }

    }, [data, error])

    return (
        <Card className='auth-card' title='Вход'>
            <Form className='auth-card-form' form={form}>
                <Form.Item rules={inputRules} name='username'>
                    <div className='input-item' >
                        <span className="label">Имя пользователя</span>
                        <Input className='input' placeholder='имя'/>
                    </div>
                </Form.Item>
                <Form.Item rules={inputRules} name='password'>
                    <div className='input-item' >
                        <span className="label">Пароль</span>
                        <Input className='input' placeholder='Пароль'/>
                    </div>
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


