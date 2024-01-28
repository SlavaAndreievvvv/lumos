import { HTMLProps } from "react";
import { AboutUsPageHero } from "./sections";
import styles from "./AboutUsPage.module.css";

export interface AboutUsPageProps extends HTMLProps<HTMLDivElement> {}

export const AboutUsPage = ({}: AboutUsPageProps) => {
  return (
    <>
      <AboutUsPageHero />
    </>
  );
};
