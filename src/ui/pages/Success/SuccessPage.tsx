import { Button } from "@/ui";
import styles from "./SuccessPage.module.css";
import { Routes } from "@/constants";

interface SuccessPageProps {
  title: string;
}
export const SuccessPage = ({ title }: SuccessPageProps) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <Button link={`${Routes.HOME}`} className={styles.button}>
        Повернутися до покупок
      </Button>
    </section>
  );
};
