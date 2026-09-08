import styles from "../page.module.css";
import { features } from "../_data/content";

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> WHY FLUENT</div>
        <h2>Acrylic calm, <em>exam sharp.</em></h2>
        <p>Reveal highlight, depth shadows, mica — built for 180-minute focus without fatigue.</p>
      </div>
      <div className={styles.features}>
        {features.map((feat) => (
          <div key={feat.title} className={styles.feat}><div className={`${styles['feat-icon']}`}>{feat.icon}</div><h4>{feat.title}</h4><p>{feat.text}</p></div>
        ))}
      </div>
    </section>
  );
}
