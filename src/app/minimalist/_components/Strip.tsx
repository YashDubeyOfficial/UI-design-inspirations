import styles from "../page.module.css";
import { stripTags } from "../_data/content";

export default function Strip() {
  return (
    <div className={styles.strip}>
      <div className={`${styles['strip-inner']}`}>
        <div className={`${styles['strip-label']}`}>For every serious exam —</div>
        <div className={`${styles['exams-inline']}`}>
          {stripTags.map((tag, i) => (
            <span key={tag} className={i === 0 ? `${styles['exam-tag']} ${styles.active}` : `${styles['exam-tag']}`}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
