import {create} from 'zustand'
import {devtools} from "zustand/middleware";

export interface IHeaderStore {
    currentTab: string,
    setCurrentTab: (tab: string) => void
}

export const headerStore = create(devtools<IHeaderStore>((set) => ({
    currentTab: window.location.pathname,
    setCurrentTab: (tab: string) => set((state: IHeaderStore) => ({
            ...state,
            currentTab: tab
    }))
})))