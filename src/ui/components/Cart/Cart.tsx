"use client";

import clsx from "clsx";
import { Icon } from "@/ui/components";
import { useProducts } from "@/store";
import { useBoolean, useOnClickOutside } from "usehooks-ts";
import styles from "./Cart.module.css";
import { useRef } from "react";

export interface CartProps {
  className?: string;
}

export const Cart = ({ className }: CartProps) => {
  const [cart] = useProducts((state) => [state.cart]);
  const isOpenCartAside = useBoolean();
  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => isOpenCartAside.setFalse());

  return (
    <div className={clsx(styles.cart, className)}>
      <button
        aria-label="cart icon"
        className={styles.icon}
        onClick={() => isOpenCartAside.setTrue()}
      >
        <Icon name="basket" size={32} color="white" />
        <span>{cart.length}</span>
      </button>
      <div
        ref={ref}
        className={clsx(styles.cartAside, {
          [styles.isOpenCartAside]: isOpenCartAside.value,
        })}
      >
        {cart.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </div>
    </div>
  );
};
