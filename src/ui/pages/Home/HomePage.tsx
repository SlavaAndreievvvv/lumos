"use client";

import { HTMLProps } from "react";
import { HomePageHero, HomePageCards, HomePageCardsProps } from "./sections";
import { useProducts } from "@/store";
import styles from "./HomePage.module.css";

export interface HomePageProps extends HTMLProps<HTMLDivElement> {}

export const HomePage = ({}: HomePageProps) => {
  const [products] = useProducts((state) => [state.products]);

  return (
    <>
      <HomePageHero />
      <HomePageCards cards={products} />
    </>
  );
};
