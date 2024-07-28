import { create } from "zustand"
import { devtools } from "zustand/middleware"



interface IFiltersStore {
    filters: {
        priceLess: number,
        options: string[]
    },
    sorters: {options: string[]},
    setPriceLess: (value: number) => void,
    setFiltersOptions: (filters: string[]) => void,
    setSortersOptions: (filters: string[]) => void
}


export const useFiltersStore = create(devtools<IFiltersStore>((set => ({

    filters: {
        priceLess: 5000,
        options: []
    },
    sorters: {options: []},
    setPriceLess: (value) => {
        set((state: IFiltersStore) => {
            return {...state,
                filters: {...state.filters, priceLess: value}
            }
        })
    } ,
    setFiltersOptions: (filters: string[]) => {
        set((state: IFiltersStore) => {
            return {
                ...state, 
                filters: {...state.filters, options: filters}
            }
        })
    },
    setSortersOptions: (sorters: string[]) => {
        set((state: IFiltersStore) => {
            return {
                ...state, 
                sorters: {...state.sorters, options: sorters}
            }
        })
    }
    



}))))