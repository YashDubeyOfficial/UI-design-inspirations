import styles from "../page.module.css";
import { faqs } from "../_data/content";

export default function Faq() {
  return (
    <section className={styles.section} id="faq">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Appendix</div>
        <div>
          <h2>Questions, <em>answered.</em></h2>
        </div>
      </div>
      <div className={styles.faq}>
        {faqs.map((f, i) => (
          <div key={f.q} className={styles["faq-item"]}>
            <div className={styles.qn}>Q{i + 1}</div>
            <div>
              <strong>{f.q}</strong>
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
