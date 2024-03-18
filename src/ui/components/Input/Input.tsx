import clsx from "clsx";
import styles from "./Input.module.css";

export interface InputProps extends React.ComponentProps<"input"> {
  errorMessage?: string;
}

export const Input = ({
  errorMessage,
  className,
  children,
  ...props
}: InputProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <input className={clsx(styles.input, className)} {...props}>
        {children}
      </input>
      <span className={styles.message}>{errorMessage}</span>
    </div>
  );
};
