import {create} from 'zustand'
import axios, {AxiosResponse} from 'axios'
import { notification } from 'antd'
import {devtools} from "zustand/middleware";
import { apiUrls } from '../constants/urls'

interface IMainPage {
    categories: {category_id: number, name: string}[],
    getCategories: () => Promise<void>
}

export const useMainPageStore = create(devtools<IMainPage>((set) => (
    {
        categories: [],
        getCategories: async () => {

            try {
                const categoriesResponse: AxiosResponse = await axios.get(apiUrls.CATEGORIES)
                const categories = categoriesResponse.data
                set(state => {
                    return {
                        ...state, categories
                    }
                })
            } catch (err) {
                notification.error({message: 'Ошибка при загрузке категорий'})
            }
            
        }
    }
)))
