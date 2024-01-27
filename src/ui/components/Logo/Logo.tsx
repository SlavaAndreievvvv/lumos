import clsx from "clsx";
import { HTMLProps } from "react";
import Link from "next/link";
import { Routes } from "@/constants";
import ImageLogo from "@/images/logo.png";
import styles from "./Logo.module.css";
import Image from "next/image";

export interface LogoProps extends HTMLProps<HTMLDivElement> {
  size?: number;
}

export const Logo = ({ className, size = 80 }: LogoProps) => {
  return (
    <Link href={Routes.HOME} className={clsx(styles.logo, className)}>
      <Image src={ImageLogo} alt="Logo" height={size} width={size} />
    </Link>
  );
};
