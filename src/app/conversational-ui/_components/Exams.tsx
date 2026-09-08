import styles from "../page.module.css";

import { exams } from "../_data/content";

export default function Exams() {
  return (
    <section className={styles.section} id="exams">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>All chats</div>
        <h2>Every <em>exam.</em></h2>
      </div>
      <div className={styles["exam-grid"]}>
        {exams.map((e) => (
          <div key={e.name} className={styles["exam-card"]}>
            <strong>{e.name}</strong>
            <p>{e.desc}</p>
            <span>{e.meta}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
