import { create } from "zustand"
import { devtools } from "zustand/middleware"


export type ProductsFiltersDto = {
    price?: number,
    in_stock?: boolean,
    discount?: boolean,
    priceSort?: 'ASC' | 'DESC'
    ratingSort?: 'ASC' | 'DESC',
    showCount?: number
}

export type ProductsFiltersStore = {
    filters: ProductsFiltersDto,
    setFilters: Function
}


export const useFiltersStore = create(devtools<ProductsFiltersStore>((set => ({

    filters: {},
    setFilters: (filters: Partial<ProductsFiltersDto> ) => {
        set((state: ProductsFiltersStore) => ({
            ...state, filters
        }))

    }

}))))