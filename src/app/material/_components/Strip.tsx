import styles from "../page.module.css";
import { stripPills } from "../_data/content";

export default function Strip() {
  return (
    <div className={styles.strip}>
      <div className={`${styles['strip-inner']}`}>
        <div className={`${styles['strip-label']}`}>ELEVATED FOR EVERY EXAM</div>
        <div className={styles.pills}>
          {stripPills.map((p) => (
            <span key={p.text} className={p.primary ? `${styles.pill} ${styles.primary}` : styles.pill}>{p.text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
