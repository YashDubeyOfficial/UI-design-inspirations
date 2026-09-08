import styles from "../page.module.css";
import { exams } from "../_data/content";

export default function Exams() {
  return (
    <section className={styles.section} id="exams">
      <div className={`${styles['exams-wrap']}`}>
        <div className={`${styles['exams-head']}`}>
          <h3>One bento.<br />Every exam cuisine.</h3>
          <p>From JEE’s spicy sprint to UPSC’s slow banquet — if the paper comes as PDF, we box it: JEE to State PCS.</p>
        </div>
        <div className={`${styles['exam-bento']}`}>
          {exams.map((e) => (
            e.featured ? (
              <div key={e.name} className={`${styles['exam-card']} ${styles.featured}`}><div><strong style={{color:'white'}}>{e.name}</strong><p>{e.desc}</p></div><div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'12px'}}><span className={`${styles['exam-tag']}`}>{e.tag}</span><span style={{fontWeight:'800'}}>{e.meta}</span></div></div>
            ) : (
              <div key={e.name} className={`${styles['exam-card']}`}><div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}><strong>{e.name}</strong><span className={`${styles['exam-tag']}`}>{e.tag}</span></div><p>{e.desc}</p><div className={styles.meta}>{e.meta}</div></div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
