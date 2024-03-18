import { ProductProps } from "@/ui/pages/Home/sections";

export const totalPrice = (cart: ProductProps[]) => {
  const total = cart.reduce((acc, item) => {
    const priceNumber = parseFloat(item.price.replace(/[^\d.]/g, ""));

    return acc + (isNaN(priceNumber) ? 0 : priceNumber);
  }, 0);

  return total;
};
