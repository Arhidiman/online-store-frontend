import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import {apiUrls} from "@/pages/AuthPage/constants/urls.ts";

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
