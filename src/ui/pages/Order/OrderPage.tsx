"use client";

import clsx from "clsx";
import { useProducts } from "@/store";
import { Button } from "@/ui";
import { CartItem } from "@/ui/components/Cart/components/CartItem";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./OrderPage.module.css";

export interface OrderPageProps extends React.ComponentProps<"div"> {}

export const OrderPage = ({ className }: OrderPageProps) => {
  const router = useRouter();
  const [cart, emptyCart] = useProducts((state) => [
    state.cart,
    state.emptyCart,
  ]);
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const orderDetails = uniqCart.map((item) => {
      const cartItem = cart.find((cartItem) => cartItem.title === item);
      const count = getItemCount(item);

      return { item, count };
    });

    const data = {
      name,
      email,
      phone,
      price: totalPrice(),
      order: JSON.stringify(orderDetails),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error(
          "Failed to submit order:",
          response.status,
          response.statusText
        );
        router.push("/order/error");
      } else {
        router.push("/success");
        emptyCart([]);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      router.push("/order/error");
    }
  };

  return (
    <section className={clsx(styles.section, className)}>
      <h2>Ваше замовлення</h2>
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
      <form>
        <label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="tel"
            placeholder="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleOrder(e)}
        >
          Оформити замовлення
        </Button>
      </form>
    </section>
  );
};
