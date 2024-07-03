import {create} from 'zustand'
import {devtools} from "zustand/middleware";

interface IGoodsStore {
    username: string | null,
    user_id: string | null,
    goods: string[]
}

export const goodsStore = create(devtools<IGoodsStore>(() => ({
    username: null,
    user_id: null,
    goods: [],

    // getUserName: ((set: IGoodsStore) => {
    //
    // })
})))
