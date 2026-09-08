import styles from "../page.module.css";
import { stripPills } from "../_data/content";

export default function ExamStrip() {
  return (
    <div className={styles.strip}>
      <div className={`${styles['strip-inner']}`}>
        <div className={`${styles['strip-label']}`}>GUIDED BY AURORA LIGHT</div>
        <div className={`${styles['exam-pills']}`}>
          {stripPills.map((p) => (
            <span
              key={p.text}
              className={p.live ? `${styles['exam-pill']} ${styles.live}` : `${styles['exam-pill']}`}
              style={p.muted ? {background:'rgba(255,255,255,.06)', borderColor:'rgba(255,255,255,.08)', color:'var(--muted)'} : undefined}
            >
              {p.bold ? (<><b>{p.bold}</b> • </>) : null}{p.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
