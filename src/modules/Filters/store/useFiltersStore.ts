import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { CheckboxValueType } from "antd/es/checkbox/Group"


interface IFiltersStore {
    filtersData: {
        filters: {
            priceMax: number,
            options: CheckboxValueType[]
        },
        sorters: {options: CheckboxValueType[]}        
    },
    setPriceMax: (value: number) => void,
    setFiltersOptions: (filters: CheckboxValueType[]) => void,
    setSortersOptions: (filters: CheckboxValueType[]) => void
}


export const useFiltersStore = create(devtools<IFiltersStore>((set => ({

    filtersData: {
        filters: {
            priceMax: 1000000,
            options: []
        },
        sorters: {options: []},
    },
    setPriceMax: (value) => {
        set((state: IFiltersStore) => {
            return {...state,
                filters: {...state.filtersData, 
                    filters: {
                        ...state.filtersData.filters, priceMax: value
                    }   
                }
            }
        })
    } ,
    setFiltersOptions: (filters: CheckboxValueType[]) => {
        set((state: IFiltersStore) => {
            return {
                ...state, 
                filtersData: {...state.filtersData, filters: {...state.filtersData.filters, options: filters}}
            }
        })
    },
    setSortersOptions: (sorters: CheckboxValueType[]) => {
        set((state: IFiltersStore) => {
            return {
                ...state, 
                filtersData: {...state.filtersData, sorters: {...state.filtersData.sorters, options: sorters}}
            }
        })
    }
}))))