import styles from "../page.module.css";
import { examPills } from "../_data/content";

export default function ExamStrip() {
  return (
    <div className={styles.strip}>
      <div className={`${styles['strip-inner']}`}>
        <div className={`${styles['strip-label']}`}>LIVED-IN BY EVERY EXAM</div>
        <div className={`${styles['exam-pills']}`}>
          {examPills.map((pill) => (
            <span
              key={pill.text}
              className={pill.live ? `${styles['exam-pill']} ${styles.live}` : `${styles['exam-pill']}`}
              style={pill.style}
            >
              {pill.bold ? (
                <>
                  <b>{pill.bold}</b>
                  {pill.text}
                </>
              ) : (
                pill.text
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
