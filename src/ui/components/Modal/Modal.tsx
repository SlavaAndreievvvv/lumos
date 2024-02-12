import clsx from "clsx";
import { HTMLProps } from "react";
import styles from "./Modal.module.css";

export interface ModalProps extends HTMLProps<HTMLDivElement> {}

export const Modal = ({ className, children }: ModalProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.card}>{children}</div>
    </div>
  );
};
