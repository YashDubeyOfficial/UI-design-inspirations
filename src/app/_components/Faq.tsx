import styles from "../page.module.css";
import { faqs } from "../_data/content";

export default function Faq() {
  return (
    <section className={styles.section} id="faq">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> FAQ</div>
        <h2>Quick answers<br /><em>before you upload.</em></h2>
      </div>
      <div className={styles.faq}>
        {faqs.map((f, i) => (
          <div key={i} className={`${styles['faq-item']}`}><strong>{f.q} <span></span></strong><p>{f.a}</p></div>
        ))}
      </div>
    </section>
  );
}
