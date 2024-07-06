import {Card, Form, Input, Button} from "antd";
import {useAuthPageStore} from "@/pages/AuthPage/store/useAuthPageStore.ts"
import {useGlobalStore} from "@/store/useGlobalStore.ts"
import {useNavigate} from "react-router-dom";
import {SyntheticEvent, useEffect} from "react";
import './RegistrationCard.scss'


export const RegistrationCard = () =>  {

    const {setCurrentUser} = useGlobalStore()

    const {
        switchAuthReg,
        setUserName,
        setUserPassword,
        signUpNewUser,
        authUser
    } = useAuthPageStore()

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

    const submitRegistration = async () => {
        try {
            const user = await form.validateFields()
            await signUpNewUser(user, navigate)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {

        setCurrentUser(authUser)
        console.log(authUser)
    }, [authUser])

    return (
        <Card className='registration-card' title='Регистрация'>
            <Form className='registration-card-form' form={form}>
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
                <Button className='registration-button' type='primary' onClick={submitRegistration}>
                    Зарегистрироваться
                </Button>
            </Form>
            <div className='auth-message'>
                <span>Уже зарегистрированы?</span>
                <Button type='primary' onClick={switchAuthReg}>Войти</Button>
            </div>
        </Card>
    )
}


