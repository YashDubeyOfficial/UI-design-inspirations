import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>FLAT. FAST.<br />EXAM-TRUE.</h2>
          <p>40,000 aspirants left gradients behind. Three mocks free, no card. Upload a PDF — see your hall in 36 flat seconds.</p>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
            <a href="#try" className={`${styles['btn-flat']} ${styles.dark}`} style={{padding:'14px 20px'}}>Upload PDF — free →</a>
            <a href="#how" className={`${styles['btn-flat']}`} style={{background:'white'}}>Watch 22s flat demo</a>
          </div>
          <div style={{marginTop:'14px', display:'flex', gap:'12px', fontWeight:'900', fontSize:'12px', flexWrap:'wrap'}}><span>✓ No signup demo</span><span>✓ Scanned OK</span><span>✓ 36s flat</span></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><strong style={{fontWeight:'900', fontSize:'11px', letterSpacing:'.06em'}}>YOUR LIBRARY</strong><span style={{fontWeight:'900', background:'var(--ink)', color:'white', padding:'5px 9px', border:'3px solid var(--ink)'}}>3/3 FREE</span></div>
          <div style={{border:'3px solid var(--ink)', padding:'12px', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px', background:'var(--yellow)'}}><div><strong style={{fontWeight:'900'}}>JEE 2023 — Shift 1</strong><br /><span style={{fontWeight:'700', fontSize:'12px'}}>Score 214/360</span></div><span style={{fontWeight:'900', background:'var(--ink)', color:'white', padding:'6px 10px', border:'3px solid var(--ink)'}}>Analysis →</span></div>
          <div className={styles.progress}><i></i></div>
          <div className={styles.stats}><div className={styles.stat}><b>42</b><br /><span>Mocks</span></div><div className={styles.stat}><b>214</b><br /><span>Avg</span></div><div className={styles.stat}><b>68%</b><br /><span>Acc</span></div></div>
        </div>
      </div>
    </section>
  );
}
