import styles from "../page.module.css";
import { examCards } from "../_data/content";

export default function Exams() {
  return (
    <section className={styles.section} id="exams">
      <div className={styles.exams}>
        <div className={`${styles['exams-head']}`}><h3>One fluent surface.<br />Every exam.</h3><p>If it’s a PDF, fluent can float it — JEE sprint or UPSC marathon, same mica.</p></div>
        <div className={`${styles['exam-grid']}`}>
          {examCards.map((card) => (
            <div key={card.title} className={card.dark ? `${styles['exam-card']} ${styles.dark}` : `${styles['exam-card']}`}><strong>{card.title}</strong><p>{card.desc}</p><div className={styles.meta}>{card.meta}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
