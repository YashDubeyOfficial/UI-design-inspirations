import styles from "../page.module.css";
import { stripPills } from "../_data/content";

export default function Strip() {
  return (
    <div className={styles.strip}>
      <div className={`${styles['strip-inner']}`}>
        <div className={`${styles['strip-label']}`}>Built for India’s toughest papers</div>
        <div className={styles.pills}>
          {stripPills.map((p) => (
            <span
              key={p.text}
              className={p.live ? `${styles.pill} ${styles.live}` : styles.pill}
              style={p.hot ? {background:'var(--yellow)', color:'var(--ink)'} : undefined}
            >
              {p.bold ? (<><b>{p.bold}</b> • </>) : null}{p.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
