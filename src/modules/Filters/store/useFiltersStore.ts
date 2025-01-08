import { create } from "zustand"
import { devtools } from "zustand/middleware"


export type ProductsFiltersDto = {
    maxPrice: number,
    price?: number,
    in_stock?: boolean,
    discount?: boolean,
    priceSort?: 'ASC' | 'DESC' | 'NULL',
    ratingSort: 'ASC' | 'DESC' | 'NULL',
    showCount: number, 
    category?: string
}

export type ProductsFiltersStore = {
    filters: ProductsFiltersDto,
    setFilters: Function
}


export const useFiltersStore = create(devtools<ProductsFiltersStore>((set => ({

    filters: { showCount: 6, maxPrice: 25000, ratingSort: 'ASC'},
    setFilters: (filters: Partial<ProductsFiltersDto> ) => {
        set((state: ProductsFiltersStore) => {
            return {
                ...state,
                filters: { ...state.filters, ...filters}
            }
        })
    }

}))))