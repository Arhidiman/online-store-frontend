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
    setOrderData: (order: Partial<TOrderData>) => void,
    setOrderItems: (items: OrderItemDto[]) => void,
    addItem: (item: OrderItemDto) => void,
    removeItem: (id: number) => void,
    setOrderId: (id: number) => void,
    setFullPrice: () => void
}

type TOrderData = { order: OrderDto, items: OrderItemDto[] | [], full_price: number}

export const useGlobalStore = create(devtools<IGlobalStore>((set) => ({

    currentUser: '',
    theme: 'light',
    orderData: { order: {}, items: [], full_price: 0 }, 
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

    setOrderData: (data: Partial<TOrderData>) => set((state: IGlobalStore) => {
        return {
            ...state, orderData: { ...state.orderData, ...data}
        }        
    }),

    setOrderId: (id: number) => set((state: IGlobalStore) => {

        return {
            ...state, orderData: { ...state.orderData, order: {...state.orderData.order, id}}
        }        
    }),

    setOrderItems: (items: OrderItemDto[] ) => set((state: IGlobalStore) => ({
        ...state, orderData: { ...state.orderData, items: [...items]}
    })),

    addItem: (item: OrderItemDto) => set((state: IGlobalStore) => ({
        ...state, orderData: { ...state.orderData, items: [...state.orderData.items, item]}
    })),

    removeItem: (id: number) => set((state: IGlobalStore) => ({
        ...state, orderData: { ...state.orderData, items: [...state.orderData.items.filter(item => item.id !== id)]}
    })),

    setFullPrice: () => set((state: IGlobalStore) => {

        const calculateFullPrice: () => number = () =>  {
            console.log(state.orderData.items)

            if (state.orderData.items.length === 0) {

                console.log(state.orderData.items)
                return 0
            }

            return state.orderData.items.reduce((acc, item) => {
                if (item.price && item.product_count) {
                    return acc + item.product_count * item.price
                } else return acc

            }, 0)
        }

        const newPrice = calculateFullPrice();
        if (state.orderData.full_price !== newPrice) {
            return {
                ...state,
                orderData: { ...state.orderData, full_price: newPrice },
            };
        }
        return state

    })
})))