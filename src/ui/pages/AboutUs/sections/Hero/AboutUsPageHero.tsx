import { HTMLProps } from "react";
import { Container } from "@/ui";
import styles from "./AboutUsPageHero.module.css";

export interface HomePageHeroProps extends HTMLProps<HTMLDivElement> {}

export const AboutUsPageHero = ({}: HomePageHeroProps) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>About us</div>
      </Container>
    </section>
  );
};
