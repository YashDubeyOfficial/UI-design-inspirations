import styles from "../page.module.css";
import { compareNew, compareOld, features } from "../_data/content";

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker} style={{background:'var(--red)'}}>WHY FLAT WINS</div>
        <h2>SOLID BLOCKS. <em>REAL EXAM.</em></h2>
        <p>High contrast, geometric, honest. No blur to hide behind — every mark, timer and palette state is a solid block you can read under pressure.</p>
      </div>
      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feat}><div className={`${styles['feat-icon']}`}>{f.icon}</div><div><h4>{f.title}</h4><p>{f.text}</p></div></div>
        ))}
      </div>
      <div className={styles.compare}>
        <div className={`${styles.cmp} ${styles.old}`}><h4>✕ Old: manual quiz</h4><ul>{compareOld.map((item) => (<li key={item.title}><i>✕</i><span><b>{item.title}</b> {item.text}</span></li>))}</ul></div>
        <div className={`${styles.cmp} ${styles.new}`}><h4>◈ Flat: upload → hall</h4><ul>{compareNew.map((item) => (<li key={item.title}><i>✓</i><span><b>{item.title}</b> {item.text}</span></li>))}</ul></div>
      </div>
    </section>
  );
}
