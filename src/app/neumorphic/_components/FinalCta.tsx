import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div>
          <h2 style={{fontFamily:'\'Space Grotesk\',sans-serif', fontSize:'38px', letterSpacing:'-.04em', lineHeight:'.95', marginBottom:'10px'}}>Ready to press<br /><em style={{color:'var(--muted)', fontStyle:'normal'}}>your PDF into a mock?</em></h2>
          <p style={{color:'var(--muted)', fontSize:'14px', marginBottom:'14px'}}>Join 40k aspirants who practice with soft focus, real pressure. 3 free mocks — no card.</p>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}><a href="#" className={`${styles['btn-neu']} ${styles.lime}`}>Upload PDF — Free →</a><a href="#" className={`${styles['btn-neu']}`}>Watch 30s demo</a></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><strong style={{fontSize:'11px', letterSpacing:'.06em'}}>YOUR LIBRARY</strong><span className={`${styles['btn-neu']}`} style={{padding:'5px 8px', fontSize:'10px', background:'var(--lime)'}}>3/3 FREE</span></div>
          <div style={{padding:'12px', borderRadius:'14px', background:'var(--bg)', boxShadow:'5px 5px 10px var(--shadow-dark), -5px -5px 10px var(--shadow-light)', border:'1px solid rgba(255,255,255,.6)', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><div><strong style={{fontSize:'13px'}}>JEE Main 2023</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Score 214/360</span></div><span className={`${styles['btn-neu']} ${styles.dark}`} style={{padding:'5px 9px', fontSize:'11px'}}>Analysis →</span></div>
          <div className={`${styles['stat-grid']}`}><div className={styles.stat}><b>42</b><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Mocks</span></div><div className={styles.stat}><b>214</b><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Avg</span></div><div className={styles.stat}><b>68%</b><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Acc.</span></div></div>
        </div>
      </div>
    </section>
  );
}
