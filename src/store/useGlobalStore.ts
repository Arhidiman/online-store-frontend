import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import { type MenuTheme } from 'antd';
import type { OrderDto, OrderItemDto } from './dto';


export interface IGlobalStore {
    currentUser: IUser,
    theme: MenuTheme,
    orderData: TOrderData
    switchTheme: () => void
    setCurrentUser: (user: IUser) => void
    setOrderData: (order: Partial<TOrderData>) => void
}

type TOrderData = { order: OrderDto, items: OrderItemDto[] | []}

interface IUser {
    username: string,
    user_id ? : string,
    user_role ? : string,
    jwt_token ? : string,
}

export const useGlobalStore = create(devtools<IGlobalStore>((set) => ({

    currentUser: {} as IUser,
    theme: 'light',
    orderData: { order: {}, items: [] }, 
    switchTheme: () => set((state: IGlobalStore) => ({
            ...state,
            theme: state.theme === 'dark' ? 'light' : 'light' ? 'dark' : 'dark'
    })),
    setCurrentUser: async (user: IUser) => {
        return {
            currentUser: user
        }
    },
    setOrderData: (order: Partial<TOrderData>) => set((state: IGlobalStore) => ({
        ...state, orderData: { ...state.orderData, ...order}
    }))
})))