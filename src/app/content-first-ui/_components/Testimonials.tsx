import styles from "../page.module.css";
import { testimonials } from "../_data/content";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Marginalia — Readers</div>
        <h2>Pulled <em>quotes.</em></h2>
      </div>
      <div className={styles.pullquotes}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles.pullquote}>
            <p>{t.quote}</p>
            <cite>— {t.name}, {t.meta}</cite>
          </div>
        ))}
      </div>
    </section>
  );
}
