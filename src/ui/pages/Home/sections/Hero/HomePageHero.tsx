"use client";

import clsx from "clsx";
import { HTMLProps } from "react";
import { Button, Container } from "@/ui";
import ReactPlayer from "react-player";
import video from "@/public/videos/hero.mp4";
import { useRouter } from "next/navigation";
import { Routes } from "@/constants";
import RoundImage from "@/images/circle.png";
import styles from "./HomePageHero.module.css";
import Image from "next/image";

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
    router.push(`${Routes.HOME}#order`);
  };

  return (
    <section className={clsx(styles.section, className)}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.video}>
            <ReactPlayer
              playsinline
              playing
              url={video}
              loop
              muted
              width="100%"
              height="100%"
            />
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
