import styles from "../page.module.css";
import { whyFeatures } from "../_data/content";

export default function WhyGrid() {
  return (
    <div className={styles.section}>
      <h2>02. WHY THIS WORKS <span>6 FEATURES // NO MARKETING FLUFF</span></h2>
      <div className={`${styles['why-grid']}`} style={{gridTemplateColumns:'repeat(3,1fr)', gap:'8px', display:'grid'}}>
        {whyFeatures.map((f) => (
          <div key={f.title} className={`${styles['why-box']}`}><h4>{f.title}</h4><p style={{fontSize:'12px'}}>{f.text}</p></div>
        ))}
      </div>
      <div className={`${styles['why-grid']}`} style={{marginTop:'10px'}}>
        <div className={`${styles['why-box']} ${styles.bad}`}><h4>❌ OLD WAY</h4><ul><li>Hours copy-pasting 90 Qs</li><li>Fake quiz, no pressure</li><li>Wrong negatives</li></ul></div>
        <div className={`${styles['why-box']} ${styles.good}`}><h4>✓ WITH PARAKH (BRUTALIST)</h4><ul><li>Upload & done</li><li>Real exam pressure</li><li>Exam-accurate</li></ul></div>
      </div>
    </div>
  );
}
