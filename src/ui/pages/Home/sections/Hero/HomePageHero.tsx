"use client";

import clsx from "clsx";
import { HTMLProps } from "react";
import { Button, Container } from "@/ui";
import { useRouter } from "next/navigation";
import { Routes } from "@/constants";
import RoundImage from "@/images/circle.png";
import Image from "next/image";
import BlueBottleImage from "@/images/blue-bottle.png";
import RedBottleImage from "@/images/red-bottle.png";
import StormImage from "@/images/storm.png";
import FireImage from "@/images/fire.png";

import styles from "./HomePageHero.module.css";

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

export interface HomePageHeroProps extends HTMLProps<HTMLDivElement> {}

export const HomePageHero = ({ className }: HomePageHeroProps) => {
  const router = useRouter();

  const handleAnchor = () => {
    router.push(`#order`);
  };

  return (
    <section className={clsx(styles.section, className)}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.images}>
            <div className={styles.imageBox}>
              <Image
                src={BlueBottleImage}
                alt="blue bottle image"
                fill
                unoptimized
                quality={100}
              />
            </div>
            <div className={styles.imageBox}>
              <Image
                src={RedBottleImage}
                alt="red bottle image"
                fill
                unoptimized
                quality={100}
              />
            </div>
            <div className={styles.imageBox}>
              <Image
                src={StormImage}
                alt="storm image"
                fill
                unoptimized
                quality={100}
              />
            </div>
            <div className={styles.imageBox}>
              <Image
                src={FireImage}
                alt="fire image"
                fill
                unoptimized
                quality={100}
              />
            </div>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              {" Станьте зберігачем природних стихій\n разом з lumos"}
            </h1>
            <p className={styles.text}>
              {
                "«Полум’я вулкану» та «Океанічний смерч» - це не просто декор, а елегантні символи стихійної краси.\n Зберігайте їх як декоративний акцент у вашому просторі, надаючи йому особливий шарм. Приєднуйтеся до нас у творенні неповторних інтер’єрних історій."
              }
            </p>
            <Button className={styles.button} onClick={handleAnchor}>
              Перейти до замовлення
            </Button>
          </div>
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
        </div>
      </Container>
    </section>
  );
};
