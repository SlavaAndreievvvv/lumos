"use client";

import clsx from "clsx";
import { useProducts } from "@/store";
import { Button, Container, Input } from "@/ui";
import { CartItem } from "@/ui/components/Cart/components/CartItem";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Routes } from "@/constants";
import {
  getCartLength,
  getUniqueCartItems,
  isValidatePhone,
  totalPrice,
} from "@/utils/helpers";
import styles from "./OrderPage.module.css";

export interface OrderPageProps extends React.ComponentProps<"div"> {}

export const OrderPage = ({ className }: OrderPageProps) => {
  const [cart, emptyCart] = useProducts((state) => [
    state.cart,
    state.emptyCart,
  ]);

  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+380");
  const [phoneError, setPhoneError] = useState("");

  const uniqCart = getUniqueCartItems(cart);

  const handleSetPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setPhoneError("");
  };

  const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim();
    setName(trimmedValue);
  };

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cart.length == 0) {
      alert("Спочатку оберіть товар");
      router.push(Routes.HOME);
      return;
    }

    if (!isValidatePhone(phone)) {
      setPhoneError("Введіть коректний номер телефону");
      return;
    }

    const orderDetails = uniqCart.map((item) => {
      const count = getCartLength(cart, item);

      return { item, count };
    });

    const data = {
      name,
      phone,
      price: totalPrice(cart),
      order: JSON.stringify(orderDetails, null, 2),
    };

    try {
      const response = await fetch(Routes.API_CONTACT, {
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
                count={getCartLength(cart, item)}
              />
            ))}
            <span className={styles.price}>
              Загальна сума: {totalPrice(cart)}
            </span>
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmitForm(e)}>
            <Input
              required
              type="text"
              placeholder="ім'я"
              value={name}
              onChange={handleSetName}
            />
            <Input
              required
              type="tel"
              placeholder="+380"
              value={phone}
              onChange={handleSetPhone}
              errorMessage={phoneError}
            />
            <Button fluid className={styles.button}>
              Оформити замовлення
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};
