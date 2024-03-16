"use client";

import clsx from "clsx";
import { useProducts } from "@/store";
import { Button, Container, Input } from "@/ui";
import { CartItem } from "@/ui/components/Cart/components/CartItem";
import { FormEvent, useState } from "react";
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
  const [phone, setPhone] = useState("");

  const handleOrder = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const orderDetails = uniqCart.map((item) => {
      const cartItem = cart.find((cartItem) => cartItem.title === item);
      const count = getItemCount(item);

      return { item, count };
    });

    const data = {
      name,
      phone,
      price: totalPrice(),
      order: JSON.stringify(orderDetails, null, 2),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data, null, 2),
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
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Ваше замовлення</h2>
          <div className={styles.list}>
            {uniqCart.map((item) => (
              <CartItem
                key={item}
                item={cart.find((cartItem) => cartItem.title === item)}
                count={getItemCount(item)}
              />
            ))}
            <span className={styles.price}>Загальна сумма: {totalPrice()}</span>
          </div>
          <form className={styles.form} onSubmit={(e) => handleOrder(e)}>
            <Input
              required
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              required
              type="tel"
              placeholder="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button fluid>Оформити замовлення</Button>
          </form>
        </div>
      </Container>
    </section>
  );
};
