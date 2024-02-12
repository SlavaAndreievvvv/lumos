"use client";

import clsx from "clsx";
import { HTMLProps } from "react";
import { Button, Container } from "@/ui";
import BackgroundImage from "@/images/logo.png";
import Image from "next/image";
import RoundImage from "@/images/circle.png";
import styles from "./HomePageCards.module.css";
import Link from "next/link";
import { Routes } from "@/constants";

const icons = [
  {
    width: 250,
    height: 250,
  },
  {
    width: 100,
    height: 100,
  },
  {
    width: 120,
    height: 120,
  },
];

export interface ProductProps {
  title: string;
  price: string;
  image: string;
  link: string;
  description?: string;
}

export interface HomePageCardProps extends ProductProps {
  className?: string;
}

const HomePageCard = ({
  className,
  title,
  price,
  image,
  link,
}: HomePageCardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <Link
        scroll={false}
        href={`${Routes.PRODUCT}/${link}`}
        className={clsx(styles.card, className)}
      >
        <div className={styles.bootleImage}>
          <Image
            src={image}
            alt={`${title} image`}
            fill
            unoptimized
            quality={100}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.name}>{title}</h3>
          <p className={styles.price}>{price}</p>
        </div>
      </Link>
      <Button fluid onClick={() => null}>
        Додати в кошик
      </Button>
    </div>
  );
};

export interface HomePageCardsProps extends HTMLProps<HTMLDivElement> {
  cards: HomePageCardProps[];
}

export const HomePageCards = ({
  className,
  cards = [],
}: HomePageCardsProps) => {
  return (
    <section id="order" className={clsx(styles.section, className)}>
      <Container>
        <div className={styles.wrapper}>
          {cards.map((card) => (
            <HomePageCard
              key={card.title}
              title={card.title}
              price={card.price}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
      </Container>
      <Image
        src={BackgroundImage.src}
        alt="background logo"
        unoptimized
        quality={100}
        width={260}
        height={260}
        className={styles.backgroundLogo}
      />
      <div className={styles.icons}>
        {icons.map((icon, index) => (
          <Image
            key={index}
            className={styles.icon}
            src={RoundImage.src}
            alt="Circle"
            width={icon.width}
            height={icon.height}
            unoptimized
            quality={100}
          />
        ))}
      </div>
    </section>
  );
};
