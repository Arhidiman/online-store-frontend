import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import { type MenuTheme } from 'antd';
import type { OrderDto, OrderItemDto } from './dto';


export interface IGlobalStore {
    currentUser: string,
    theme: MenuTheme,
    orderData: TOrderData
    switchTheme: () => void
    setCurrentUser: (user: string) => void
    setOrderData: (order: Partial<TOrderData>) => void
}

type TOrderData = { order: OrderDto, items: OrderItemDto[] | []}



export const useGlobalStore = create(devtools<IGlobalStore>((set) => ({

    currentUser: '',
    theme: 'light',
    orderData: { order: {}, items: [] }, 
    switchTheme: () => set((state: IGlobalStore) => ({
            ...state,
            theme: state.theme === 'dark' ? 'light' : 'dark'
    })),
    setCurrentUser: async (user: string) => {
        set((state: IGlobalStore) => {
            return {
                ...state,
                currentUser: user
            }
        })        
    },
    setOrderData: (order: Partial<TOrderData>) => set((state: IGlobalStore) => ({
        ...state, orderData: { ...state.orderData, ...order}
    }))
})))