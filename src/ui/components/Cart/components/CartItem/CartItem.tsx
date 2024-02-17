"use client";

import Image from "next/image";
import { ProductProps } from "@/ui/pages/Home/sections";
import styles from "./CartItem.module.css";
import { useProducts } from "@/store";

interface CartItemProps {
  item?: ProductProps;
  count: number;
}

export const CartItem = ({ item, count }: CartItemProps) => {
  const [cart, addItemToCart, removeItemFromCart] = useProducts((state) => [
    state.cart,
    state.addItemToCart,
    state.removeItemFromCart,
  ]);

  const handleAddItemToCart = () => {
    if (item) {
      const newItem: ProductProps = {
        title: item.title,
        price: item.price,
        image: item.image,
        link: item.link,
      };
      addItemToCart({ newItem });
    }
  };
  const handleRemoveItemToCart = () => {
    if (item) {
      const itemIndex = cart.findIndex(
        (cartItem) => cartItem.title === item.title
      );
      if (itemIndex !== -1) {
        removeItemFromCart({ itemIndex });
      }
    }
  };
  return (
    item && (
      <li className={styles.item}>
        <Image
          src={item.image}
          width={70}
          height={80}
          alt={`${item.title} image`}
          className={styles.image}
        />
        <div>
          <p>{item.title}</p>
          <p>Кількість: {count}</p>
        </div>
        <button className={styles.button} onClick={handleRemoveItemToCart}>
          -
        </button>
        <button className={styles.button} onClick={handleAddItemToCart}>
          +
        </button>
        <p className={styles.price}>{item.price}</p>
      </li>
    )
  );
};
