import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import axios from "axios";
import {notification} from "antd";
import {BASE_URL} from "@/common/constants/baseUrl.ts";
import {apiUrls} from "@/api/apiUrls.ts";


export interface IGlobalStore {
    currentUser: IUser,
    setCurrentUser: (user: IUser) => Promise<void>
}

interface IUser {
    username: string | null,
    user_id: string | null,
    jwt_token: string | null,

}

export const useGlobalStore = create(devtools<IGlobalStore>((set) => ({
    currentUser: {} as IUser,

    setCurrentUser: async (user: IUser) => {
        try {
            const response = await axios.get(`${BASE_URL+apiUrls.USER_GET}:${user.user_id}`)

            const {username, user_id, jwt_token} = response.data

            notification.success({
                message: `User ${username} successfully signed in`
            })
            set(() => ({
                currentUser: {username, user_id, jwt_token}
            }))
        } catch (error) {
            if(axios.isAxiosError(error)) {
                notification.error({
                    message: error.response && error.response.data
                })
            }
        }
    }
})))