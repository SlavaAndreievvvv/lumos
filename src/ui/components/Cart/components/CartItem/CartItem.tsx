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
        <div className={styles.itemHead}>
          <Image
            src={item.image}
            width={80}
            height={100}
            alt={`${item.title} image`}
            className={styles.image}
          />
          <p className={styles.itemTitle}>{item.title}</p>
        </div>
        <div className={styles.itemCountWrapper}>
          <button
            className={styles.itemButton}
            onClick={handleRemoveItemToCart}
          >
            -
          </button>

          <span className={styles.itemCount}>{count}</span>

          <button className={styles.itemButton} onClick={handleAddItemToCart}>
            +
          </button>
        </div>
      </li>
    )
  );
};
