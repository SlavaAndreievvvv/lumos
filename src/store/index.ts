import { ProductProps } from "@/ui/pages/Home/sections";
import { products } from "@/data";
import { create } from "zustand";

type useProductsProps = {
  products: ProductProps[];
};

export const useProducts = create<useProductsProps>()((set) => ({
  products: products,
}));
