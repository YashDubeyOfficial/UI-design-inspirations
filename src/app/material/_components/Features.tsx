import styles from "../page.module.css";
import { features } from "../_data/content";

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={`${styles['section-head']}`}>
        <div className={`${styles['kicker-m3']}`}><i></i> MATERIAL FEATURES</div>
        <h2>Everything <strong>Material</strong> can lift.</h2>
        <p>Chips, segmented controls, tonal surfaces — all built with elevation and state layers so 3-hour focus stays effortless.</p>
      </div>
      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feat}><div className={`${styles['feat-icon']}`}>{f.icon}</div><h4>{f.title}</h4><p>{f.text}</p></div>
        ))}
      </div>
    </section>
  );
}
