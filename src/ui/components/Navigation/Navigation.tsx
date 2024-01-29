"use client";

import clsx from "clsx";
import { HTMLProps, useEffect, useRef } from "react";
import { Container, Icon, Logo } from "@/ui/components";
import styles from "./Navigation.module.css";
import Link from "next/link";
import { Routes } from "@/constants";

const navLinks = [
  {
    name: "Замовити",
    link: `${Routes.HOME}#order`,
  },
  {
    name: "Наша ідея",
    link: `${Routes.ABOUT_US}`,
  },
  {
    name: "Контакти",
    link: `${Routes.HOME}#contacts`,
  },
];

const NavigationBurger = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleButtonClick = () => {
      const button = buttonRef.current;

      if (button) {
        button.focus();
      }
    };

    const button = buttonRef.current;
    if (button) {
      button.addEventListener("click", handleButtonClick);
    }
    return () => {
      if (button) {
        button.removeEventListener("click", handleButtonClick);
      }
    };
  }, []);

  useEffect(() => {
    console.log("buttonRef", buttonRef.current);
  }, []);

  return (
    <div className={styles.burger}>
      <button
        ref={buttonRef}
        aria-label="burger"
        className={styles.burgerButton}
      >
        <Icon name="burger" size={32} color="white" />
      </button>
      <div className={styles.burgerMenu} tabIndex={1}>
        <Logo size={50} className={styles.burgerLogo} />
        <nav className={styles.burgerLinks}>
          {navLinks.map(({ name, link }) => (
            <Link key={name} href={link} className={styles.burgerLink}>
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export interface NavigationProps extends HTMLProps<HTMLDivElement> {}

export const Navigation = ({ className }: NavigationProps) => {
  return (
    <header className={clsx(styles.navigation, className)}>
      <Container>
        <div className={styles.wrapper}>
          <NavigationBurger />
          <Logo size={70} />
          <nav className={styles.links}>
            {navLinks.map(({ name, link }) => (
              <Link key={name} href={link} className={styles.link}>
                {name}
              </Link>
            ))}
          </nav>
          <Icon
            name="basket"
            size={32}
            color="white"
            className={styles.basket}
          />
        </div>
      </Container>
    </header>
  );
};
