import styles from "../page.module.css";
import { exams } from "../_data/content";

export default function Exams() {
  return (
    <section className={styles.section} id="exams">
      <div className={styles.exams}>
        <div className={`${styles['exams-head']}`}><h3>One clay.<br />Every exam you knead.</h3><p>From JEE’s sharp sprint to UPSC’s slow knead — if it’s a PDF, clay can puff it into a mock.</p></div>
        <div className={`${styles['exam-grid']}`}>
          {exams.map((e) => (
            <div key={e.name} className={`${styles['exam-card']}`}>
              <b>{e.name}</b>
              <p style={e.special ? {opacity:'.8'} : undefined}>{e.desc}</p>
              <span className={styles.tag} style={e.special ? {background:'white', color:'var(--ink)'} : undefined}>{e.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
