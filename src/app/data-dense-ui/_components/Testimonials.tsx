import styles from "../page.module.css";

import { testimonials } from "../_data/content";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Power users</div>
        <h2>Dense <em>reviews.</em></h2>
      </div>
      <div className={styles.testis}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles.testi}>
            <p>{t.quote}</p>
            <div className={styles["testi-meta"]}>{t.name} — {t.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
