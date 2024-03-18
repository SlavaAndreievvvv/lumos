import { ProductProps } from "@/ui/pages/Home/sections";

export const getCartLength = (
  cart: ProductProps[],
  itemName: string | null
): number => {
  return cart.filter((item) => item?.title === itemName).length;
};
