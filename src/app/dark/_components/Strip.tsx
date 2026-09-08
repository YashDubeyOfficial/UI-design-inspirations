import styles from "../page.module.css";
import { stripPills } from "../_data/content";

export default function Strip() {
  return (
    <div className={styles.strip}>
      <div className={`${styles['strip-inner']}`}>
        <div className={`${styles['strip-label']}`}>BUILT FOR EVERY EXAM — AFTER HOURS</div>
        <div className={`${styles['exam-pills']}`}>
          {stripPills.map((p) => (
            <span
              key={p.text}
              className={p.live ? `${styles['exam-pill']} ${styles.live}` : `${styles['exam-pill']}`}
              style={p.hot ? {background:'var(--lime)', color:'#0A0A0F', borderColor:'var(--lime)'} : undefined}
            >
              {p.bold ? (<><b>{p.bold}</b> {p.text}</>) : p.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
