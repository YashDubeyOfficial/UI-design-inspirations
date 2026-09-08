import styles from "../page.module.css";
import { faqs } from "../_data/content";

export default function Faq() {
  return (
    <section className={styles.section} id="faq">
      <div className={`${styles['section-head']}`} style={{marginBottom:'32px'}}>
        <div className={`${styles['kicker-min']}`}>FAQ</div>
        <h2>Questions.<br /><em>Answered.</em></h2>
      </div>
      <div className={styles.faq}>
        {faqs.map((f) => (
          <div key={f.q} className={`${styles['faq-item']}`}><strong>{f.q}</strong><p>{f.a}</p></div>
        ))}
      </div>
    </section>
  );
}
