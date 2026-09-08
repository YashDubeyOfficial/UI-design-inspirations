import styles from "../page.module.css";
import { examCards } from "../_data/content";

export default function Exams() {
  return (
    <section className={styles.section} id="exams">
      <div className={styles.exams}>
        <div className={`${styles['exams-head']}`}>
          <h3>One platform.<br />Every exam you’re chasing.</h3>
          <p>Parakh is exam-agnostic. If your exam gives you a question paper as PDF, we can turn it into a mock — from JEE to State PCS.</p>
        </div>
        <div className={`${styles['exam-grid']}`}>
          {examCards.map((c, i) => (
            <div key={i} className={`${styles['exam-card']}`} style={c.cardStyle}><div className={styles.top}><strong style={c.titleStyle}>{c.title}</strong><span className={`${styles['tag-sm']}`} style={c.tagStyle}>{c.tag}</span></div><p style={c.descStyle}>{c.desc}</p><div className={styles.meta} style={c.metaStyle}>{c.meta}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
