import styles from "../page.module.css";
import { features } from "../_data/content";

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> WHY CLAY? • SOFT BUT SERIOUS</div>
        <h2>Puffy outside. <em>Exam-strict inside.</em></h2>
        <p>We made the UI feel like dough — inflated, warm, friendly — so your brain saves its stress for the 180-minute timer, where it belongs.</p>
      </div>
      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feat}><div className={`${styles['feat-icon']}`}>{f.icon}</div><h4>{f.title}</h4><p>{f.text}</p></div>
        ))}
      </div>
    </section>
  );
}
