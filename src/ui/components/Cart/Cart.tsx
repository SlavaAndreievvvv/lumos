"use client";

import clsx from "clsx";
import { Button, Icon } from "@/ui/components";
import { useProducts } from "@/store";
import { useBoolean, useOnClickOutside } from "usehooks-ts";
import styles from "./Cart.module.css";
import { useEffect, useRef } from "react";
import { CartItem } from "./components/CartItem";
import { Routes } from "@/constants";
import { usePathname } from "next/navigation";
import { getCartLength, getUniqueCartItems, totalPrice } from "@/utils/helpers";

export interface CartProps {
  className?: string;
}

export const Cart = ({ className }: CartProps) => {
  const [cart] = useProducts((state) => [state.cart]);
  const isOpenCartAside = useBoolean();
  const ref = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useOnClickOutside(ref, () => {
    isOpenCartAside.setFalse();
  });

  useEffect(() => {
    isOpenCartAside.setFalse();
  }, [pathname]);

  const uniqCart = getUniqueCartItems(cart);

  return (
    <div className={clsx(styles.cart, className)}>
      <button
        aria-label="cart icon"
        className={styles.icon}
        onClick={() => isOpenCartAside.setTrue()}
      >
        <Icon name="basket" size={32} />
        {uniqCart.length >= 1 && <span>{uniqCart.length}</span>}
      </button>
      <div
        ref={ref}
        className={clsx(styles.cartAside, {
          [styles.isOpenCartAside]: isOpenCartAside.value,
        })}
      >
        {uniqCart.length >= 1 ? (
          <>
            <ul>
              {uniqCart.map((item) => (
                <CartItem
                  key={item}
                  item={cart.find((cartItem) => cartItem.title === item)}
                  count={getCartLength(cart, item)}
                />
              ))}
            </ul>
            <div className={styles.cartBottom}>
              <Button fluid link={Routes.ORDER}>
                Замовити
              </Button>
              <div className={styles.cartTotal}>
                Загальна сума: {totalPrice(cart)}
              </div>
            </div>
          </>
        ) : (
          <p>Корзина порожня</p>
        )}
      </div>
    </div>
  );
};
