import styles from "../page.module.css";
import { features } from "../_data/content";

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> WHY FLAT 2.0</div>
        <h2>Flat’s honesty, <em>with comfort.</em></h2>
        <p>Flat is fast but can be stark. 2.0 keeps the geometry, adds soft shadows and subtle gradients so your eyes last the full mock.</p>
      </div>
      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feat}><div className={`${styles['feat-icon']}`}>{f.icon}</div><h4>{f.title}</h4><p>{f.text}</p></div>
        ))}
      </div>
    </section>
  );
}
