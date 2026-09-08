import styles from "../page.module.css";
import { testimonials } from "../_data/content";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`} style={{marginBottom:'48px'}}>
        <div className={`${styles['kicker-min']}`}>Proof</div>
        <h2>Made for<br /><em>mock discipline.</em></h2>
      </div>
      <div className={styles.testis}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles.testi}>
            <div className={`${styles['testi-top']}`}><strong>{t.name}</strong><span>{t.meta}</span></div>
            <p>{t.quote}</p>
            <div className={styles.by}>{t.by}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
