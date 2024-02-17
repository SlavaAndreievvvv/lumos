"use client";

import clsx from "clsx";
import { Icon } from "@/ui/components";
import { useProducts } from "@/store";
import { useBoolean, useOnClickOutside } from "usehooks-ts";
import styles from "./Cart.module.css";
import { useRef } from "react";
import { CartItem } from "./components/CartItem";

export interface CartProps {
  className?: string;
}

export const Cart = ({ className }: CartProps) => {
  const [cart] = useProducts((state) => [state.cart]);
  const isOpenCartAside = useBoolean();
  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => {
    isOpenCartAside.setFalse();
  });

  const uniqCart = Array.from(new Set(cart.map((item) => item.title)));

  const getItemCount = (itemName: string | null): number => {
    return cart.filter((item) => item.title === itemName).length;
  };

  const totalPrice = () => {
    const total = cart.reduce((acc, item) => {
      const priceNumber = parseFloat(item.price.replace(/[^\d.]/g, ""));

      return acc + (isNaN(priceNumber) ? 0 : priceNumber);
    }, 0);

    return total;
  };

  return (
    <div className={clsx(styles.cart, className)}>
      <button
        aria-label="cart icon"
        className={styles.icon}
        onClick={() => isOpenCartAside.setTrue()}
      >
        <Icon name="basket" size={32} color="white" />
        {uniqCart.length >= 1 && <span>{uniqCart.length}</span>}
      </button>
      <div
        ref={ref}
        className={clsx(styles.cartAside, {
          [styles.isOpenCartAside]: isOpenCartAside.value,
        })}
      >
        {uniqCart.length >= 1 ? (
          <ul>
            {uniqCart.map((item) => (
              <CartItem
                key={item}
                item={cart.find((cartItem) => cartItem.title === item)}
                count={getItemCount(item)}
              />
            ))}
            Загальна сумма: {totalPrice()}
          </ul>
        ) : (
          <p>The cart is empty</p>
        )}
      </div>
    </div>
  );
};
