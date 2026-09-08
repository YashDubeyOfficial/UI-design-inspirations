import styles from "../page.module.css";
import { stripPills } from "../_data/content";

export default function Strip() {
  return (
    <div className={styles.strip}>
      <div className={`${styles['strip-inner']}`}>
        <div className={`${styles['strip-label']}`}>GROWN FOR EVERY EXAM</div>
        <div className={`${styles['exam-pills']}`}>
          {stripPills.map((p) => (
            <span
              key={p.text}
              className={p.live ? `${styles['exam-pill']} ${styles.live}` : `${styles['exam-pill']}`}
              style={p.custom ? {background:'#fff', color:'var(--green)'} : undefined}
            >
              {p.bold ? (<><b>{p.bold}</b> • </>) : null}{p.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
