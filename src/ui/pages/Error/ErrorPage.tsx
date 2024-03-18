import { Button } from "@/ui";
import { Routes } from "@/constants";
import styles from "./ErrorPage.module.css";

interface ErrorPageProps {
  title: string;
}
export const ErrorPage = ({ title }: ErrorPageProps) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <Button link={`${Routes.HOME}`} className={styles.button}>
        Спробувати ще раз
      </Button>
    </section>
  );
};
