import styles from "../page.module.css";
import { exams } from "../_data/content";

export default function Exams() {
  return (
    <section className={styles.section} id="exams">
      <div className={`${styles['exams-wrap']}`}>
        <div className={`${styles['exams-head']}`}>
          <h3>One dark.<br />Every exam you chase.</h3>
          <p>If your exam has a PDF, midnight can mock it — JEE to State PCS. Upload the Xerox.</p>
        </div>
        <div className={`${styles['exam-grid']}`}>
          {exams.map((e) => (
            e.featured ? (
              <div key={e.name} className={`${styles['exam-card']} ${styles.featured}`}><div><strong>{e.name}</strong><p>{e.desc}</p></div><div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'10px'}}><span className={`${styles['exam-tag']}`}>{e.tag}</span><span style={{fontWeight:'800'}}>{e.meta}</span></div></div>
            ) : (
              <div key={e.name} className={`${styles['exam-card']}`}><div style={{display:'flex', justifyContent:'space-between', marginBottom:'8px'}}><strong>{e.name}</strong><span className={`${styles['exam-tag']}`}>{e.tag}</span></div><p>{e.desc}</p><div className={styles.meta}>{e.meta}</div></div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
