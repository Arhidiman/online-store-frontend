import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import { theme, type MenuTheme } from 'antd';

// import axios from "axios";
// import {notification} from "antd";
// import {BASE_URL} from "@/common/constants.ts/baseUrl.ts";
// import {apiUrls} from "@/api/apiUrls.ts";


export interface IGlobalStore {
    currentUser: IUser,
    theme: MenuTheme,
    switchTheme: () => void
    setCurrentUser: (user: IUser) => void
}

interface IUser {
    username: string,
    user_id ? : string,
    user_role ? : string,
    jwt_token ? : string
}

export const useGlobalStore = create(devtools<IGlobalStore>((set, state) => ({
    currentUser: {} as IUser,
    theme: 'light',
    switchTheme: () => set((state: IGlobalStore) => ({
            ...state,
            theme: state.theme === 'dark' ? 'light' : 'light' ? 'dark' : 'dark'
    })),
    setCurrentUser: async (user: IUser) => {
        return {
            currentUser: user
        }
    }
})))