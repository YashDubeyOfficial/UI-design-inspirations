import styles from "../page.module.css";
import { features } from "../_data/content";

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> FORGED SPECS</div>
        <h2>Every Indian exam, <em>alloy-ready.</em></h2>
        <p>Built with toppers who hammered PYQs for years. We kept what matters — and machined the rest.</p>
      </div>
      <div className={styles.features}>
        {features.map((feat) => (
          <div key={feat.title} className={styles.feat}>
            <div className={`${styles['feat-icon']}`}>{feat.icon}</div>
            <h4>{feat.title}</h4>
            <p>{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
