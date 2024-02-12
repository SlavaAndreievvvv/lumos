"use client";

import { Button, Container } from "@/ui";
import Image from "next/image";
import { useProducts } from "@/store";
import clsx from "clsx";
import { useEffect } from "react";
import { ProductProps } from "../Home/sections";
import styles from "./ProductPage.module.css";

export interface ProductPageProps {
  link: string;
}

export const ProductPage = ({ link }: ProductPageProps) => {
  const [products, addItemToCart] = useProducts((state) => [
    state.products,
    state.addItemToCart,
  ]);
  const filteredProduct = products.find(
    (product) => product.link.toLowerCase() === link.toLowerCase()
  );

  if (!filteredProduct) {
    return <div>Продукт не найден</div>;
  }

  const handleAddItemToCart = () => {
    const newItem: ProductProps = {
      title: filteredProduct.title,
      price: filteredProduct.price,
      image: filteredProduct.image,
      link: filteredProduct.link,
      description: filteredProduct?.description,
    };
    addItemToCart({ newItem });
  };

  return (
    <section className={clsx(styles.section)}>
      <Container>
        <div className={styles.container}>
          <div
            className={clsx(styles.imageBox, {
              [styles.imageBoxRed]: filteredProduct.title === "Полум’я вулкану",
            })}
          >
            <Image
              src={filteredProduct.image}
              alt={`${filteredProduct.title} image`}
              fill
              unoptimized
              quality={100}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{filteredProduct.title}</h2>
            <p className={styles.text}>{filteredProduct.description}</p>
            <Button onClick={handleAddItemToCart}>Додати в кошик</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
