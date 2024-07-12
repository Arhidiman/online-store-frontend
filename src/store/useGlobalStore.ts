import {create} from 'zustand'
import {devtools} from "zustand/middleware";
// import axios from "axios";
// import {notification} from "antd";
// import {BASE_URL} from "@/common/constants.ts/baseUrl.ts";
// import {apiUrls} from "@/api/apiUrls.ts";


export interface IGlobalStore {
    currentUser: IUser,
    setCurrentUser: (user: IUser) => void
}

interface IUser {
    username: string,
    user_id ? : string,
    user_role ? : string,
    jwt_token ? : string
}

export const useGlobalStore = create(devtools<IGlobalStore>(() => ({
    currentUser: {} as IUser,

    setCurrentUser: async (user: IUser) => {
        return {
            currentUser: user
        }
    }
})))