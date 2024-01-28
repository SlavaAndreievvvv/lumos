import { HTMLProps } from "react";
import { HomePageHero, HomePageCards } from "./sections";
import styles from "./HomePage.module.css";

export interface HomePageProps extends HTMLProps<HTMLDivElement> {}

export const HomePage = ({}: HomePageProps) => {
  return (
    <>
      <HomePageHero />
      <HomePageCards />
    </>
  );
};
