import {create} from 'zustand'
import axios, {AxiosResponse} from 'axios'
import { notification } from 'antd'
import {devtools} from "zustand/middleware";
import { apiUrls } from '../constants/urls'
import {gql, useQuery} from "@apollo/client"


interface IMainPage {
    categories: {category_id: number, name: string}[],
    getCategories: () => Promise<void>, 
    getUserById: () => any
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
            
        },
        getUserById: () => {

            const GET_USER_BY_ID = gql`
                query getUser ($id: Int!) {
                    getUser (id: $id) {
                            id,
                            name
                    }
                }
                `

            const {data} = useQuery(GET_USER_BY_ID, {variables: {id: 777 }, fetchPolicy: "cache-first"})
            return data
        }
    }
)))
