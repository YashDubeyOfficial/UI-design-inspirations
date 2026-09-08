import styles from "../page.module.css";
import { exams } from "../_data/content";

export default function Exams() {
  return (
    <div className={styles.exams}>
      <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'12px'}}><h3 style={{fontFamily:'\'Space Grotesk\',sans-serif', fontSize:'28px', letterSpacing:'-.03em'}}>One platform. Every exam.</h3><p style={{color:'var(--muted)', maxWidth:'380px', fontSize:'13px'}}>If your exam has a PDF, we can emboss it into a mock — JEE to State PCS.</p></div>
      <div className={`${styles['exam-grid']}`}>
        {exams.map((e) => (
          e.special ? (
            <div key={e.name} className={`${styles['exam-card']}`} style={{background:'var(--ink)', color:'white'}}><b style={{color:'white'}}>{e.name}</b><p style={{color:'rgba(255,255,255,.7)'}}>{e.desc}</p><span className={styles.tag} style={e.tagStyle}>{e.tag}</span></div>
          ) : (
            <div key={e.name} className={`${styles['exam-card']}`}><b>{e.name}</b><p>{e.desc}</p><span className={styles.tag}>{e.tag}</span></div>
          )
        ))}
      </div>
    </div>
  );
}
