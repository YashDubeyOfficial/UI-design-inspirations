import styles from "../page.module.css";
import { features } from "../_data/content";

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`}>
        <div className={`${styles['kicker-hig']}`}><i></i> WHY HIG PARAKH</div>
        <h2>Content first. <em>Chrome never.</em></h2>
        <p>Deference to your content. Clarity in palettes. Depth with blur, not shadow. It’s the hall without the noise.</p>
      </div>
      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feat}><div className={`${styles['feat-icon']}`}>{f.icon}</div><h4>{f.title}</h4><p>{f.text}</p></div>
        ))}
      </div>
    </section>
  );
}
