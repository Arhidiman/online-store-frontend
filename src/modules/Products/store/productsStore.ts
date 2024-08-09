import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import {notification} from "antd";
import axios, { AxiosResponse } from 'axios';
import { apiUrls } from '../constants/urls';


interface IProduct {
    product_id: number,
    name: string, 
    price: number,
    image: string
}

interface IProductsStore {
    username: string | null,
    user_id: string | null,
    products: IProduct[],
    getProducts: (payload: IFiltersPayload) => Promise<void>
}


interface IFiltersPayload {
    filters: {
        priceMax: number,
        options: CheckboxValueType[]
    },
    sorters: {options: CheckboxValueType[]},
}

export const useProductsStore = create(devtools<IProductsStore>((set) => ({
    username: null,
    user_id: null,
    products: [],

    getProducts: async (payload: IFiltersPayload) => {
        try {
            const products: AxiosResponse = await axios.post(apiUrls.PRODUCTS, payload)
            set((state: IProductsStore) => ({
                ...state, 
                products: products.data
            }))
        } catch (err) {
            notification.error({message: 'Ошибка при загрузке списка товаров'})
        }
    }
})))
