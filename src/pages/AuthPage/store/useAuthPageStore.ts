import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import axios from "axios";
import {notification} from "antd";
import {BASE_URL} from "@/common/constants/baseUrl.ts";
import {apiUrls} from "@/pages/AuthPage/constants/urls.ts";
import type {NavigateFunction} from "react-router-dom";
import {routes} from "@/common/constants/routes.ts";

export interface IAuthPageStore {
    isAuth: boolean,
    isSignedIn: boolean,
    authUser: IUser,
    login: string,
    password: string
    switchAuthReg: () => void,
    signUpNewUser: (user: {username: string, password: string}, navigate: NavigateFunction) => void,
    signIn: (data: {username: string, password: string}, navigate: NavigateFunction) => Promise<void>,
    setUserName: (name: string) => void,
    setUserPassword: (name: string) => void
}

interface IUser {
    username: string,
    user_id ? : string,
    user_role ? : string,
    jwt_token ? : string
}

export const useAuthPageStore = create(devtools<IAuthPageStore>((set) => ({
    isAuth: false,
    isSignedIn: false,
    authUser: {} as IUser,
    password: '',
    login: '',
    switchAuthReg: () => set((state: IAuthPageStore) => ({
        isAuth: !state.isAuth
    })),
    signUpNewUser: async (user: {username: string, password: string}, navigate : NavigateFunction) => {
        try {
            const response = await axios.post(BASE_URL+apiUrls.USER_SIGN_UP, user)
            console.log(response)
            notification.success({
                message: 'User successfully signed up'
            })

            const {username, user_id, user_role, jwt_token} = response.data

            console.log(response.data, 'reg user')

            set((state: IAuthPageStore) => ({
                ...state,
                isSignedIn: true,
                authUser: {username, user_id, user_role, jwt_token}
            }))

            navigate(routes.products)


        } catch (error) {
            console.log(error, 'reg err')
            if(axios.isAxiosError(error)) {
                notification.error({
                    message: error.response ? error.response.data : error.message
                })
            }
        }
    },
    signIn: async (data: {username: string, password: string}, navigate: NavigateFunction) => {
        try {
            const response = await axios.post(BASE_URL+apiUrls.USER_SIGN_IN, data)
            console.log(response.data, 'res data')
            const {username, user_id, user_role, jwt_token} = response.data

            set((state: IAuthPageStore) => ({
                ...state,
                isSignedIn: true,
                authUser : {
                    username, user_id, user_role, jwt_token
                }
            }))

            navigate(routes.products)
            notification.success({
                message: 'User successfully signed in'
            })
        } catch (error) {
            if(axios.isAxiosError(error)) {
                console.log(error.response)
                notification.error({
                    message: error.response ? error.response.data : error.message
                })
            }
        }
    },
    setUserName: (name: string) => set((state: IAuthPageStore) => ({
        ...state,
        login: name
    })),
    setUserPassword: (password: string) => set((state: IAuthPageStore) => ({
        ...state,
        password
    }))
})))