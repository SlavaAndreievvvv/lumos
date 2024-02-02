import { HTMLProps } from "react";
import { HomePageHero, HomePageCards, HomePageCardsProps } from "./sections";
import BlueBootleImage from "@/images/blue-bottle.png";
import RedBootleImage from "@/images/red-bottle.png";
import styles from "./HomePage.module.css";

const cards: HomePageCardsProps = {
  cards: [
    {
      title: "Полум’я вулкану",
      price: "450 грн",
      image: RedBootleImage.src,
    },
    {
      title: "Океанічний смерч",
      price: "450 грн",
      image: BlueBootleImage.src,
    },
  ],
};

export interface HomePageProps extends HTMLProps<HTMLDivElement> {}

export const HomePage = ({}: HomePageProps) => {
  return (
    <>
      <HomePageHero />
      <HomePageCards {...cards} />
    </>
  );
};
