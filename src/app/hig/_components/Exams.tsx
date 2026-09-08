import styles from "../page.module.css";
import { exams } from "../_data/content";

export default function Exams() {
  return (
    <section className={styles.section} id="exams">
      <div className={styles.exams}>
        <div className={`${styles['exams-head']}`}><h3>One quiet engine.<br />Every Indian exam.</h3><p>If it’s a PDF, HIG can hold it calmly — JEE sprint or UPSC marathon, same air.</p></div>
        <div className={`${styles['exam-grid']}`}>
          {exams.map((e) => (
            <div key={e.name} className={e.dark ? `${styles['exam-card']} ${styles.dark}` : `${styles['exam-card']}`}>
              <strong>{e.name}</strong>
              <p>{e.desc}</p>
              <div className={styles.meta}>{e.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
