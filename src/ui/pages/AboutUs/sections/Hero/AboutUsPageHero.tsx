import { HTMLProps } from "react";
import { Container } from "@/ui";
import styles from "./AboutUsPageHero.module.css";

export interface HomePageHeroProps extends HTMLProps<HTMLDivElement> {}

export const AboutUsPageHero = ({}: HomePageHeroProps) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Про нас</h1>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: ` Поглибіться в світ унікальної краси для вашого дому з нашими неперевершеними пляшками стихій. Кожна з них - витвір мистецтва, де запечатані енергії різних стихій об'єднуються, щоб створити не лише декоративний елемент, а справжню симфонію елегантності та природної привабливості у вашому просторі.<br /><br /> Наші пляшки - це не просто предмети декору, це індивідуальний вираз вашого стилю та гармонії. Вони створюють атмосферу, в якій краса природи стає невіддільною частиною вашого життя. Виберіть свою стихію і дозвольте природі вкрити ваш простір витонченим волокном її власної естетики.<br /><br /> Наші пляшки створені з любов'ю та увагою до деталей, надаючи вашому дому не тільки вигляд, а й почуття унікальності. Відкрийте для себе новий рівень декору, де кожна крапелька - це окремий акорд в симфонії краси вашого життя.`,
            }}
          />
        </div>
      </Container>
    </section>
  );
};
