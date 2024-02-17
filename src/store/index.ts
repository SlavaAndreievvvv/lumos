import { ProductProps } from "@/ui/pages/Home/sections";
import { products } from "@/data";
import { create } from "zustand";

type useProductsProps = {
  products: ProductProps[];
  product: {};
  cart: ProductProps[];
  setProduct: (params: any) => void;
  addItemToCart: (params: { newItem: ProductProps }) => void;
  removeItemFromCart: (params: any) => void;
  emptyCart: (params: any) => void;
  getItemCount: (itemName: string | null) => void;
  itemCount: number;
};

export const useProducts = create<useProductsProps>()((set) => ({
  products: products,
  product: {},
  cart: [],
  itemCount: 0,
  setProduct: (params: any) => {
    const { newProduct } = params;
    set((state) => {
      return { ...state, product: newProduct };
    });
  },
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
  getItemCount: (itemName: string | null) => {
    set((state) => {
      const currentItemLength = state.cart.filter(
        (item) => item.title === itemName
      ).length;
      return { ...state, itemCount: currentItemLength };
    });
  },
}));
