import styles from "../page.module.css";
import { features } from "../_data/content";

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> WHY AURORA PARAKH</div>
        <h2>Every Indian exam,<br /><em>under one sky.</em></h2>
        <p>Built with night-owl toppers who know the 2 AM grind. We made the screen kind to eyes, cruel to complacency.</p>
      </div>
      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feat}><div className={`${styles['feat-icon']}`}>{f.icon}</div><h4>{f.title}</h4><p>{f.text}</p></div>
        ))}
      </div>
    </section>
  );
}
