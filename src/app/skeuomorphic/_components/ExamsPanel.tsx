import styles from "../page.module.css";
import { exams } from "../_data/content";

export default function ExamsPanel() {
  return (
    <div style={{marginTop:'16px', padding:'18px', borderRadius:'16px', background:'linear-gradient(180deg, #1A1208, #2B1810)', color:'#FFD88A', border:'1px solid #5A3E1A'}}>
      <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'12px', alignItems:'end', marginBottom:'12px'}}><h3 style={{fontFamily:'\'Crimson Pro\',serif', fontSize:'26px'}}>One desk. Every exam.</h3><p style={{color:'#D9C7A0', maxWidth:'360px', fontSize:'13px'}}>If your exam has a PDF, we can place it on the desk — JEE to State PCS.</p></div>
      <div className={`${styles['exam-grid']}`}>
        {exams.map((e) => (
          <div key={e.name} className={`${styles['exam-card']}`} style={e.cardStyle}>
            <b>{e.name}</b>
            <p style={e.metaStyle}>{e.meta}</p>
            <span className={styles.tag} style={e.tagStyle}>{e.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
