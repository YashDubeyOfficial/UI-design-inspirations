import styles from "../page.module.css";
import { examCards } from "../_data/content";

export default function Exams() {
  return (
    <section className={styles.section} id="exams">
      <div className={styles.exams}>
        <div className={`${styles['exams-head']}`}>
          <h3>One glass.<br />Every exam you chase.</h3>
          <p>If your exam has a PDF, glass can hold it — from JEE’s three-hour sprint to UPSC’s marathon.</p>
        </div>
        <div className={`${styles['exam-grid']}`}>
          {examCards.map((card) => (
            <div
              key={card.title}
              className={card.dark ? `${styles['exam-card']} ${styles.dark}` : `${styles['exam-card']}`}
            >
              <div className={styles.top}>
                <strong style={card.titleStyle}>{card.title}</strong>
                <span className={`${styles['tag-sm']}`} style={card.tagStyle}>{card.tag}</span>
              </div>
              <p>{card.description}</p>
              <div className={styles.meta}>{card.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
