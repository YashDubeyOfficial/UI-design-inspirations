import styles from "../page.module.css";
import { stripPills } from "../_data/content";

export default function ExamStrip() {
  return (
    <div className={styles.strip}>
      <div className={`${styles['strip-inner']}`}>
        <div className={`${styles['strip-label']}`}>FLUENT FOR EVERY INDIAN EXAM</div>
        <div className={styles.pills}>
          {stripPills.map((pill) => (
            <span
              key={pill.text}
              className={pill.live ? `${styles.pill} ${styles.live}` : styles.pill}
            >{pill.bold ? <><b>{pill.bold}</b> {pill.text}</> : pill.text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
