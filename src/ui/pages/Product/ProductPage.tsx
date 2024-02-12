"use client";

import { Button, Container } from "@/ui";
import Image from "next/image";
import { useProducts } from "@/store";
import styles from "./ProductPage.module.css";
import clsx from "clsx";

export interface ProductPageProps {
  link: string;
}

export const ProductPage = ({ link }: ProductPageProps) => {
  const [products] = useProducts((state) => [state.products]);
  const filteredProduct = products.find(
    (product) => product.link.toLowerCase() === link.toLowerCase()
  );

  if (!filteredProduct) {
    return <div>Продукт не найден</div>;
  }

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
            <Button onClick={() => null}>Додати в кошик</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
