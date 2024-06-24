import {create} from 'zustand'
import {devtools} from "zustand/middleware";


interface ITodoStore {
    goods: string[]
}

export const goodsStore = create(devtools<ITodoStore>(() => ({
    goods: [],
})))
