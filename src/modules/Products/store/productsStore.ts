import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import { BASE_URL } from '@/common/constants/baseUrl';
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
    getProducts: () => Promise<void>
}

export const useProductsStore = create(devtools<IProductsStore>((set) => ({
    username: null,
    user_id: null,
    products: [],

    getProducts: async () => {

        try {
            const products: AxiosResponse = await axios.get(apiUrls.PRODUCTS)

            set((state: IProductsStore) => ({
                ...state, 
                products: products.data
            }))
            notification.success({message: 'Данные товаров получены'})

        } catch (err) {
            notification.error({message: 'Ошибка при загрузке списка товаров'})
        }
    }
})))
