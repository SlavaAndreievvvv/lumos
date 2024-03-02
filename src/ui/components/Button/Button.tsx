import clsx from "clsx";
import { ReactNode, forwardRef } from "react";
import styles from "./Button.module.css";
import Link from "next/link";

interface ButtonDefaultProps {
  className?: string;
  children: ReactNode;
  variant?: "primary";
  color?: "light" | "dark";
  fluid?: boolean;
  ariaLabel?: string;
}

interface ButtonButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  link?: undefined;
}

interface ButtonLinkProps {
  onClick?: undefined;
  link: string;
}

export type ButtonProps = ButtonDefaultProps &
  (ButtonButtonProps | ButtonLinkProps);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      children,
      variant = "primary",
      color = "dark",
      fluid,
      link,
      onClick,
      ariaLabel,
      ...props
    },
    ref
  ) {
    const cn = clsx(
      styles.button,
      styles[variant],
      styles[color],
      { [styles.fluid]: fluid },
      className
    );

    if (link) {
      return (
        <Link href={link} aria-label={ariaLabel} className={cn}>
          {children}
        </Link>
      );
    }
    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        className={cn}
        {...props}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);
