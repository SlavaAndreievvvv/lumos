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

export const ModalProductPage = ({ link }: ProductPageProps) => {
  const [products] = useProducts((state) => [state.products]);

  useEffect(() => {
    document.body.classList.add("open-modal");
    return () => {
      document.body.classList.remove("open-modal");
    };
  }, []);

  const ref = useRef(null);
  const router = useRouter();

  const handleClickOutside = () => {
    router.back();
  };

  useOnClickOutside(ref, handleClickOutside);

  const filteredProduct = products.find(
    (product) => product.link.toLowerCase() === link.toLowerCase()
  );

  if (!filteredProduct) {
    return <div>Продукт не найден</div>;
  }

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
          <Button onClick={() => null}>Додати в кошик</Button>
        </div>
      </div>
    </div>
  );
};
