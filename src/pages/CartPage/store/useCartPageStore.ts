import { create } from 'zustand'
import { devtools } from "zustand/middleware";

export interface ICartPageStore {
    deliveryFormOpen: boolean,
    setDeliveryFormOpen: (open: boolean) => void
}

export const useCartPageStore = create(devtools<ICartPageStore>((set) => ({
    deliveryFormOpen: false,
    setDeliveryFormOpen: (open) => set((state) => {
        return { ...state, deliveryFormOpen: open}
    })
})))