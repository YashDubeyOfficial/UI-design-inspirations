import styles from "../page.module.css";
import { exams } from "../_data/content";

export default function Exams() {
  return (
    <section className={styles.section} id="exams">
      <div className={styles.exams}>
        <div className={`${styles['exams-head']}`}><h3>ONE FLAT ENGINE.<br />EVERY EXAM.</h3><p>If it’s a PDF, we flatten it into a mock. JEE to State PCS — same solid parser.</p></div>
        <div className={`${styles['exam-grid']}`}>
          {exams.map((e) => (
            <div key={e.name} className={e.dark ? `${styles['exam-card']} ${styles.dark}` : `${styles['exam-card']}`}>
              <strong>{e.name}</strong>
              <p>{e.desc}</p>
              <span className={`${styles['tag-sm']}`} style={e.dark ? {background:'var(--yellow)', color:'var(--ink)'} : undefined}>{e.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
