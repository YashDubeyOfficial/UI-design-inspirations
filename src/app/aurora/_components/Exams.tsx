import styles from "../page.module.css";
import { exams } from "../_data/content";

export default function Exams() {
  return (
    <section className={styles.section} id="exams">
      <div className={styles.exams}>
        <div className={`${styles['exams-head']}`}>
          <h3>One aurora.<br />Every exam you chase.</h3>
          <p>If your exam gives a PDF, aurora can turn it into a hall — from JEE’s sprint to UPSC’s marathon.</p>
        </div>
        <div className={`${styles['exam-grid']}`}>
          {exams.map((e) => (
            <div key={e.name} className={e.dark ? `${styles['exam-card']} ${styles.dark}` : `${styles['exam-card']}`}>
              <strong style={e.dark ? {color:'white'} : undefined}>{e.name}</strong>
              <p style={e.dark ? {color:'var(--muted)'} : undefined}>{e.desc}</p>
              <div className={styles.meta} style={e.dark ? {color:'#4ADE80'} : undefined}>{e.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
