import clsx from "clsx";
import { HTMLProps } from "react";
import styles from "./Component.module.css";

export interface ComponentProps extends HTMLProps<HTMLDivElement> {}

export const Component = ({ className, children }: ComponentProps) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
