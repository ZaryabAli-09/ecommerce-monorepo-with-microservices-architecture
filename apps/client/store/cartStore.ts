import { CartStoreActionsType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,
      addToCart: (product) =>
        set((state) => {
          const isProductAlreadyExistsInCart = state.cart.findIndex(
            (p) =>
              p._id === product._id &&
              p.selectedSize === product.selectedSize &&
              p.selectedColor === product.selectedColor
          );

          if (isProductAlreadyExistsInCart !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[isProductAlreadyExistsInCart].quantity +=
              product.quantity || 1;
            return { cart: updatedCart };
          }
          return { cart: [...state.cart, product] };
        }),

      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              !(
                item._id === product._id &&
                item.selectedSize === product.selectedSize &&
                item.selectedColor === product.selectedColor
              )
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),

    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export { useCartStore };
