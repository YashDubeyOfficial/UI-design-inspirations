import styles from "../page.module.css";
import { features } from "../_data/content";

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> WHY PARAKH</div>
        <h2>Everything an Indian exam<br /><em>actually needs.</em></h2>
        <p>Built with toppers and coaching faculty, not generic AI wrappers. We handle the messy, exam-specific details others ignore.</p>
      </div>
      <div className={styles.features}>
        {features.map((f, i) => (
          <div key={i} className={styles.feat}><div className={`${styles['feat-icon']}`}>{f.icon}</div><h4>{f.title}</h4><p>{f.desc}</p></div>
        ))}
      </div>
      <div className={styles.compare}>
        <div className={`${styles.cmp} ${styles.old}`}>
          <h4>❌ The old way</h4>
          <ul>
            <li><i>✕</i><span><b>Hours of manual work.</b> Copy-paste 90 questions, type 360 options, set marks by hand.</span></li>
            <li><i>✕</i><span><b>Fake quiz feel.</b> No sections, no palette, no exam pressure.</span></li>
            <li><i>✕</i><span><b>Errors creep in.</b> Wrong negatives, missed instructions, broken numbering.</span></li>
          </ul>
        </div>
        <div className={`${styles.cmp} ${styles.new}`}>
          <h4>✦ With Parakh</h4>
          <ul>
            <li><i>✓</i><span><b>Upload and done.</b> AI does the structuring — you just practice.</span></li>
            <li><i>✓</i><span><b>Real exam temperament.</b> Timer, palette, sectional flow and auto-submit.</span></li>
            <li><i>✓</i><span><b>Exam-accurate.</b> Preserves every rule exactly as your PDF states.</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
