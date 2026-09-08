import styles from "../page.module.css";
import { examCards } from "../_data/content";

export default function Exams() {
  return (
    <section className={styles.section} id="exams">
      <div className={styles.exams}>
        <div className={`${styles['exams-head']}`}><h3>One forge.<br />Every exam you chase.</h3><p>If your exam prints a PDF, the forge can hammer it into steel — from GATE’s alloys to UPSC’s stone.</p></div>
        <div className={`${styles['exam-grid']}`}>
          {examCards.map((card) => (
            <div
              key={card.title}
              className={card.dark ? `${styles['exam-card']} ${styles.dark}` : `${styles['exam-card']}`}
            >
              <b style={card.titleStyle}>{card.title}</b>
              <p>{card.description}</p>
              <span className={styles.tag} style={card.tagStyle}>{card.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
