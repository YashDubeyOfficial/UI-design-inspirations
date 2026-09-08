import styles from "../page.module.css";
import { exams } from "../_data/content";

export default function ExamsGrid() {
  return (
    <div className={styles.exams}>
      <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'12px', alignItems:'end'}}><h3 style={{fontFamily:'\'Baloo 2\',cursive', fontSize:'26px'}}>One pool.<br />Every exam you chase.</h3><p style={{color:'var(--ink2)', maxWidth:'420px', fontSize:'14px'}}>If your exam has a PDF, water can hold it — from JEE&apos;s splash to UPSC&apos;s ocean.</p></div>
      <div className={`${styles['exam-grid']}`}>
        {exams.map((e) => (
          e.special ? (
            <div key={e.name} className={`${styles['exam-card']}`} style={{background:'linear-gradient(135deg,#00D4FF,#0097B2)', color:'#fff', borderColor:'#fff'}}><b style={{color:'#fff'}}>{e.name}</b><p style={{color:'rgba(255,255,255,.85)'}}>{e.meta}</p><span style={{background:'#fff', color:'var(--aqua-dark)'}}>{e.tag}</span></div>
          ) : (
            <div key={e.name} className={`${styles['exam-card']}`}><b>{e.name}</b><p>{e.meta}</p><span>{e.tag}</span></div>
          )
        ))}
      </div>
    </div>
  );
}
