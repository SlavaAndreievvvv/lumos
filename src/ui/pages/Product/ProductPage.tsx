"use client";

import { Container } from "@/ui";
import Image from "next/image";
import { useProducts } from "@/store";
import styles from "./ProductPage.module.css";

interface ProductPageProps {
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
    <section className={styles.section}>
      <Container>
        <div className={styles.container}>
          <div className={styles.imageBox}>
            <Image
              src={filteredProduct.image}
              alt={`${filteredProduct.title} image`}
              width={300}
              height={500}
              unoptimized
              quality={100}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{filteredProduct.title}</h2>
            <p className={styles.text}>{filteredProduct.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
