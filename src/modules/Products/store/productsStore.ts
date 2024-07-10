import {create} from 'zustand'
import {devtools} from "zustand/middleware";

interface IProductsStore {
    username: string | null,
    user_id: string | null,
    goods: string[]
}

export const productsStore = create(devtools<IProductsStore>(() => ({
    username: null,
    user_id: null,
    goods: [],

    // getUserName: ((set: IGoodsStore) => {
    //
    // })
})))
