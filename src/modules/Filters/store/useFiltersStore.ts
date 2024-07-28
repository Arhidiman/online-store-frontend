import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { CheckboxValueType } from "antd/es/checkbox/Group"



interface IFiltersStore {
    filters: {
        priceLess: number,
        options: CheckboxValueType[]
    },
    sorters: {options: CheckboxValueType[]},
    setPriceLess: (value: number) => void,
    setFiltersOptions: (filters: CheckboxValueType[]) => void,
    setSortersOptions: (filters: CheckboxValueType[]) => void
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
    setFiltersOptions: (filters: CheckboxValueType[]) => {
        set((state: IFiltersStore) => {
            return {
                ...state, 
                filters: {...state.filters, options: filters}
            }
        })
    },
    setSortersOptions: (sorters: CheckboxValueType[]) => {
        set((state: IFiltersStore) => {
            return {
                ...state, 
                sorters: {...state.sorters, options: sorters}
            }
        })
    }
    



}))))