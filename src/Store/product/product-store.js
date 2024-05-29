import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useProductStore = create(
    persist(
        (set) => ({
            products: [],
            addProductToProducts: (product) => {
                set({ products: product })
            },
        }),
        {
            name: 'shopping-product', // The key used for saving the store's state in the storage
        }
    )
);
