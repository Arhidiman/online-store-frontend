import {Card, Form, Input, Button} from "antd";
import {useAuthPageStore} from "@/pages/AuthPage/store/useAuthPageStore.ts"
import { useGlobalStore} from "@/store/useGlobalStore.ts";
import {useNavigate} from "react-router-dom";
import {SyntheticEvent, useEffect} from "react";

import './AuthCard.scss'

export const AuthCard = () =>  {

    const {setCurrentUser, theme} = useGlobalStore()

    const {
        switchAuthReg,
        setUserName,
        setUserPassword,
        signIn,
        authUser
    } = useAuthPageStore()


    console.log(authUser, 'auth user')

    const themeSwitcher = () => theme === 'dark' ? 'default' : 'primary'
    

    // const {currentUser,setCurrentUser} = useGlobalStore()

    const navigate = useNavigate()
    const setName = (e: SyntheticEvent<HTMLInputElement>) => {
        const element = e.target as HTMLInputElement
        console.log(element.value)
        setUserName(element.value)
    }
    const setPassword = (e: SyntheticEvent<HTMLInputElement>) => {
        const element = e.target as HTMLInputElement
        setUserPassword(element.value)
    }

    const [form] = Form.useForm()
    const inputRules = [{ required: true, message: 'Это поле не может быть пустым' }]

    const submitAuth = async () => {
        try {
            const user = await form.validateFields()
            await signIn(user, navigate)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setCurrentUser(authUser)
        console.log(authUser)
    }, [authUser])

    return (
        <Card className='auth-card' title='Вход'>
            <Form className='auth-card-form' form={form}>
                <Form.Item rules={inputRules} name='username'>
                    <div className='input-item' >
                        <span className="label">Имя пользователя</span>
                        <Input className='input' placeholder='имя' onChange={setName}/>
                    </div>
                </Form.Item>
                <Form.Item rules={inputRules} name='password'>
                    <div className='input-item' >
                        <span className="label">Пароль</span>
                        <Input className='input' placeholder='Пароль' onChange={setPassword}/>
                    </div>
                </Form.Item>
                <Button className='auth-button' type={themeSwitcher()} onClick={submitAuth}>
                    Войти
                </Button>
            </Form>
            <div className='auth-message'>
                <span>Нет аккаунта?</span>
                <Button type={themeSwitcher()} onClick={switchAuthReg}>Зарегистрироваться</Button>
            </div>
        </Card>
    )
}


