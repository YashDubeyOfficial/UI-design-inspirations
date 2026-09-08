import styles from "../page.module.css";
import { features } from "../_data/content";

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>One-hue capabilities</div>
        <h2>Simply <em>blue.</em></h2>
      </div>
      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.num} className={styles.feat}>
            <div className={styles["feat-num"]}>{f.num}</div>
            <h4>{f.title}</h4>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
