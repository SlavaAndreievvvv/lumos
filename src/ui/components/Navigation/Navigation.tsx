"use client";

import clsx from "clsx";
import { HTMLAttributes, useEffect, useRef } from "react";
import { Container, Icon, Logo } from "@/ui/components";
import Link from "next/link";
import { Routes } from "@/constants";
import { useScrollToAnchor } from "@/utils/hooks";
import { useBoolean, useOnClickOutside } from "usehooks-ts";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const navLinks = [
  {
    name: "Замовити",
    link: `${Routes.HOME}#order`,
  },
  {
    name: "Наша ідея",
    link: Routes.ABOUT_US,
  },
  {
    name: "Контакти",
    link: `#contacts`,
  },
];

const NavigationBurger = () => {
  const isOpenBurgerMenu = useBoolean();
  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => isOpenBurgerMenu.setFalse());
  const pathname = usePathname();

  useEffect(() => {
    isOpenBurgerMenu.setFalse();
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => isOpenBurgerMenu.setTrue()}
        aria-label="burger"
        className={styles.burgerButton}
      >
        <Icon name="burger" size={32} color="white" />
      </button>
      <div
        ref={ref}
        className={clsx(styles.burgerMenu, {
          [styles.isOpenBurgerMenu]: isOpenBurgerMenu.value,
        })}
      >
        <Logo size={50} className={styles.burgerLogo} />
        <nav className={styles.burgerLinks}>
          {navLinks.map(({ name, link }) => (
            <Link key={name} href={link} className={styles.burgerLink}>
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export interface NavigationProps extends HTMLAttributes<HTMLDivElement> {}

export const Navigation = ({ className }: NavigationProps) => {
  useScrollToAnchor();

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
