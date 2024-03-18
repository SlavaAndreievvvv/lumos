import clsx from "clsx";
import styles from "./Footer.module.css";
import { Container, Icon } from "..";
import Link from "next/link";

export interface FooterProps extends React.ComponentProps<"div"> {}

export const Footer = ({ className, children }: FooterProps) => {
  return (
    <footer id="contacts" className={clsx(styles.footer, className)}>
      <Container>
        <div className={styles.socialWrapper}>
          <Link href="#" className={styles.link} aria-label="instagram icon">
            <Icon name="instagram" className={styles.icon} />
          </Link>
          <Link href="#" className={styles.link} aria-label="tiktok icon">
            <Icon name="tiktok" className={styles.icon} />
          </Link>
        </div>
      </Container>
    </footer>
  );
};
