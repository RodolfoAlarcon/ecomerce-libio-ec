import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            smsCompra: "",

            getTotalItem: () => {
                const { cart } = get();
                return cart.length;
            },

            getTotalPrice: () => {
                const { cart } = get();
                // Suponiendo que cada producto tiene un precio 'price'
                return cart.reduce((total, item) => total + item.price, 0);
            },

            addProductToCart: (product) => {
                const { cart } = get();
                const productInCart = cart.some((item) => item.id === product.id);

                if (!productInCart) {
                    set({ cart: [...cart, product] });
                }
            },

            removeProduct: (id) => {
                const { cart } = get();
                const updatedCartProducts = cart.filter((item) => item.id !== id);
                set({ cart: updatedCartProducts });
            },

            removeAllProduct: () => {
                set({ cart: [] });
            },

            getSmsCompra: (sms) => {
                set({ smsCompra: sms });
            }
        }),
        {
            name: 'shopping-cart'
        }
    )
);
