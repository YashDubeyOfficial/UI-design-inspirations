import styles from "../page.module.css";
import { exams } from "../_data/content";

export default function Exams() {
  return (
    <section className={styles.section} id="exams">
      <div className={`${styles['exams-head']}`}>
        <h3>One platform.<br />Every exam.</h3>
        <p>If your exam gives a PDF, we can make a mock — from JEE to State PCS. No exceptions.</p>
      </div>
      <div className={`${styles['exam-grid']}`}>
        {exams.map((e) => (
          <div key={e.name} className={e.featured ? `${styles['exam-card']} ${styles.featured}` : `${styles['exam-card']}`}>
            <strong>{e.name}</strong>
            <p>{e.desc}</p>
            <div className={styles.meta}>{e.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
