import { ProductProps } from "@/ui/pages/Home/sections";

export const getUniqueCartItems = (cart: ProductProps[]) => {
  return Array.from(new Set(cart.map((item) => item.title)));
};
