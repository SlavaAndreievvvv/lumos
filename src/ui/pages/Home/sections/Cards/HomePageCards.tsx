"use client";

import clsx from "clsx";
import { HTMLProps } from "react";
import { Container } from "@/ui";
import styles from "./HomePageCards.module.css";
import BackgroundImage from "@/images/logo.png";
import BlueBootleImage from "@/images/blue-bottle.png";
import Image from "next/image";
export interface HomePageCardProps extends HTMLProps<HTMLDivElement> {}

const HomePageCard = ({ className }: HomePageCardProps) => {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.bootleImage}>
        <Image
          src={BlueBootleImage.src}
          alt="blue bootle"
          fill
          unoptimized
          quality={100}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>Полум’я вулкану</h3>
        <p className={styles.price}> 450 грн</p>
      </div>
    </div>
  );
};

export interface HomePageCardsProps extends HTMLProps<HTMLDivElement> {}

export const HomePageCards = ({ className }: HomePageCardsProps) => {
  return (
    <section id="order" className={clsx(styles.section, className)}>
      <Container>
        <div className={styles.wrapper}>
          <HomePageCard />
        </div>
      </Container>
      <Image
        src={BackgroundImage.src}
        alt="background logo"
        unoptimized
        quality={100}
        width={230}
        height={230}
        className={styles.backgroundLogo}
      />
    </section>
  );
};
