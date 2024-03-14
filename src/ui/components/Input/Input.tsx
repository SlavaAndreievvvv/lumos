import clsx from "clsx";
import styles from "./Input.module.css";

export interface InputProps extends React.ComponentProps<"input"> {}

export const Input = ({ className, children, ...props }: InputProps) => {
  return (
    <input className={clsx(styles.input, className)} {...props}>
      {children}
    </input>
  );
};
