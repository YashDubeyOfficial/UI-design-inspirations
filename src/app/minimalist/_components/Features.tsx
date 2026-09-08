import styles from "../page.module.css";
import { compareNew, compareOld, features } from "../_data/content";

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`} style={{marginBottom:'48px'}}>
        <div className={`${styles['kicker-min']}`}>Why this, not that</div>
        <h2>Everything<br /><em>Indian exams need.</em></h2>
      </div>
      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.num} className={styles.feat}><div className={`${styles['feat-num']}`}>{f.num}</div><h4>{f.title}</h4><p>{f.text}</p></div>
        ))}
      </div>
      <div className={styles.compare}>
        <div className={styles.cmp}>
          <h4>The old way</h4>
          <ul>
            {compareOld.map((item) => (
              <li key={item.title}><b>{item.title}</b> {item.text}</li>
            ))}
          </ul>
        </div>
        <div className={styles.cmp}>
          <h4>With Parakh</h4>
          <ul>
            {compareNew.map((item) => (
              <li key={item.title}><b>{item.title}</b> {item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
