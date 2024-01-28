import clsx from "clsx";
import { ButtonHTMLAttributes, HTMLProps } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary";
  color?: "light" | "dark";
  fluid?: boolean;
}

export const Button = ({
  className,
  children,
  variant = "primary",
  color = "dark",
  fluid = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        styles.button,
        styles[variant],
        styles[color],
        { [styles.fluid]: fluid },
        className
      )}
    >
      {children}
    </button>
  );
};
