import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import { BASE_URL } from '@/common/constants/baseUrl';
import {notification} from "antd";
import axios from 'axios';

const PRODUCTS_URL = BASE_URL+'/api/goods'


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
            notification.success({message: 'Данные товаров получены'})
            const products: IProduct[] = await axios.get(PRODUCTS_URL)

            set((state: IProductsStore) => ({
                ...state, 
                products: products.data
            }))
        } catch (err) {
            notification.error({message: 'Ошибка получения товаров'})
        }

       

    }

    // getProducts: async () => {
    //     try {
    //         const response = await axios.get(PRODUCTS_URL);
    //         set((state) => ({
    //             ...state,
    //             products: response.data
    //         }));
    //     } catch (error) {
    //         console.error('Error fetching products:', error);
    //     }
    // }
})))
