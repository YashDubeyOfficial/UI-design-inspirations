import styles from "../page.module.css";
import { exams } from "../_data/content";

export default function ExamsGrid() {
  return (
    <div className={styles.exams}>
      <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'12px', alignItems:'end'}}><h3 style={{fontFamily:'\'Fraunces\',serif', fontSize:'26px'}}>One forest.<br />Every exam you chase.</h3><p style={{color:'var(--earth)', maxWidth:'420px', fontSize:'14px'}}>If your exam has a PDF, solarpunk can grow it — JEE’s sprint to UPSC’s banyan.</p></div>
      <div className={`${styles['exam-grid']}`}>
        {exams.map((e) => (
          e.special ? (
            <div key={e.name} className={`${styles['exam-card']}`} style={{background:'var(--green)', color:'#fff', borderColor:'var(--green)'}}><b style={{color:'#fff'}}>{e.name}</b><p style={{color:'rgba(255,255,255,.85)'}}>{e.meta}</p><span style={{background:'var(--lime)', color:'var(--ink)'}}>{e.tag}</span></div>
          ) : (
            <div key={e.name} className={`${styles['exam-card']}`}><b>{e.name}</b><p>{e.meta}</p><span>{e.tag}</span></div>
          )
        ))}
      </div>
    </div>
  );
}
