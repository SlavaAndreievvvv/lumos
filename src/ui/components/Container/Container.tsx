import clsx from "clsx";
import { HTMLProps } from "react";
import styles from "./Container.module.css";

export interface ContainerProps extends HTMLProps<HTMLDivElement> {}

export const Container = ({ className, children }: ContainerProps) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
