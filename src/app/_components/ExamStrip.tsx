import styles from "../page.module.css";
import { examPills } from "../_data/content";

export default function ExamStrip() {
  return (
    <div className={styles.strip}>
      <div className={`${styles['strip-inner']}`}>
        <div className={`${styles['strip-label']}`}>BUILT FOR EVERY SERIOUS EXAM</div>
        <div className={`${styles['exam-pills']}`}>
          {examPills.map((p, i) => (
            <span key={i} className={p.live ? `${styles['exam-pill']} ${styles.live}` : `${styles['exam-pill']}`}>
              {p.bold ? (
                <>
                  <b>{p.bold}</b>{p.rest}
                </>
              ) : (
                p.rest
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
