import { ProductProps } from "@/ui/pages/Home/sections";
import { products } from "@/data";
import { create } from "zustand";

type useProductsProps = {
  products: ProductProps[];
  cart: ProductProps[];
  addItemToCart: (params: { newItem: ProductProps }) => void;
  removeItemFromCart: (params: any) => void;
  emptyCart: (params: any) => void;
};

export const useProducts = create<useProductsProps>()((set) => ({
  products: products,
  cart: [],
  addItemToCart: ({ newItem }: { newItem: ProductProps }) => {
    set((state) => {
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };
    });
  },
  removeItemFromCart: (params: any) => {
    const { itemIndex } = params;
    set((state) => {
      const newCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== itemIndex;
      });
      return { ...state, cart: newCart };
    });
  },
  emptyCart: () => {
    set((state) => {
      return { ...state, cart: [] };
    });
  },
}));
