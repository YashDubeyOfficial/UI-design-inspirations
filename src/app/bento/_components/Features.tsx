import styles from "../page.module.css";
import { features } from "../_data/content";

export default function Features() {
  return (
    <div className={`${styles['bento-grid']} ${styles.features}`} style={{marginTop:'14px'}}>
      {features.map((f) => (
        <div key={f.title} className={styles.feat}><div className={`${styles['feat-icon']}`}>{f.icon}</div><h4>{f.title}</h4><p>{f.text}</p></div>
      ))}
    </div>
  );
}
