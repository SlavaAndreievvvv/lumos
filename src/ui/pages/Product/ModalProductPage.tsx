"use client";
import clsx from "clsx";
import { ProductPageProps } from "./ProductPage";
import styles from "./ProductPage.module.css";
import Image from "next/image";
import { Button } from "@/ui/components";
import { useProducts } from "@/store";
import { useEffect, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { ProductProps } from "../Home/sections";

export const ModalProductPage = ({ link }: ProductPageProps) => {
  const [products, addItemToCart] = useProducts((state) => [
    state.products,
    state.addItemToCart,
  ]);

  useEffect(() => {
    document.body.classList.add("open-modal");
    return () => {
      document.body.classList.remove("open-modal");
    };
  }, []);

  const ref = useRef(null);
  const router = useRouter();

  useOnClickOutside(ref, () => router.back());

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
      description: filteredProduct.description,
    };
    addItemToCart({ newItem });
  };

  return (
    <div className={styles.modal}>
      <div ref={ref} className={styles.modalContainer}>
        <div
          className={clsx(styles.imageBox, styles.modalImageBox, {
            [styles.modalImageBoxRed]:
              filteredProduct.title === "Полум’я вулкану",
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
        <div className={styles.modalContent}>
          <h2 className={clsx(styles.title, styles.modalTitle)}>
            {filteredProduct.title}
          </h2>
          <p className={clsx(styles.text, styles.modalText)}>
            {filteredProduct.description}
          </p>
          <Button onClick={handleAddItemToCart}>Додати в кошик</Button>
        </div>
      </div>
    </div>
  );
};
