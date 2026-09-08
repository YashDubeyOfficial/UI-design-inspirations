import styles from "../page.module.css";
import { exams } from "../_data/content";

export default function ExamsGrid() {
  return (
    <div className={styles.exams}>
      <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'12px', alignItems:'end'}}><h3 style={{fontFamily:'\'Orbitron\',sans-serif', fontSize:'22px', color:'#fff'}}>ONE GRID. <span style={{color:'var(--cyan)'}}>EVERY EXAM YOU CHASE.</span></h3><p style={{color:'rgba(232,234,240,.5)', maxWidth:'360px', fontSize:'13px'}}>If it has a PDF, we can neon it — JEE to State PCS. Upload the Xerox.</p></div>
      <div className={`${styles['exam-grid']}`}>
        {exams.map((e) => (
          e.special ? (
            <div key={e.name} className={`${styles['exam-card']}`} style={{background:'var(--yellow)', borderColor:'var(--yellow)'}}><b style={{color:'#000'}}>{e.name}</b><p style={{color:'#000'}}>{e.meta}</p><span style={{background:'#000', color:'var(--yellow)', borderColor:'#000'}}>{e.tag}</span></div>
          ) : (
            <div key={e.name} className={e.mag ? `${styles['exam-card']} ${styles.mag}` : `${styles['exam-card']}`}><b>{e.name}</b><p>{e.meta}</p><span>{e.tag}</span></div>
          )
        ))}
      </div>
    </div>
  );
}
