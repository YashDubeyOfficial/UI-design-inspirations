import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final} id="pricing">
      <div className={`${styles['final-card']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>Soft flat.<br />Sharp exam.</h2>
          <p>40,000 aspirants chose soft over stark. Three mocks free, no card — upload your PDF, feel the gentle hall in 38 seconds.</p>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
            <a href="#try" className={`${styles['btn-hero-secondary']}`} style={{background:'white', color:'var(--indigo)', border:'none', boxShadow:'0 6px 16px rgba(0,0,0,.12)'}}>Upload PDF — free →</a>
            <a href="#how" style={{border:'1px solid rgba(255,255,255,.3)', padding:'13px 18px', borderRadius:'14px', fontWeight:'700', background:'rgba(255,255,255,.1)'}}>Watch 24s soft demo</a>
          </div>
          <div style={{marginTop:'14px', display:'flex', gap:'12px', fontSize:'12px', fontWeight:'700', flexWrap:'wrap', opacity:'.9'}}><span>✓ No signup demo</span><span>✓ Scanned OK</span><span>✓ 38s soft</span></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><strong style={{fontSize:'11px', letterSpacing:'.06em'}}>YOUR LIBRARY</strong><span style={{fontWeight:'800', background:'linear-gradient(135deg,var(--indigo),var(--violet))', color:'white', padding:'5px 9px', borderRadius:'999px'}}>3/3 FREE</span></div>
          <div style={{border:'1px solid var(--line)', borderRadius:'12px', padding:'12px', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px', background:'linear-gradient(135deg,#EEF2FF,#E0E7FF)'}}><div><strong>UPSC GS1 2022 — Mock 01</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Score 82/200 • soft perfect</span></div><span style={{fontWeight:'800', background:'var(--ink)', color:'white', padding:'6px 10px', borderRadius:'999px'}}>Analysis →</span></div>
          <div className={styles.progress}><i></i></div>
          <div className={styles.stats}><div className={styles.stat}><b>37</b><span>Mocks</span></div><div className={styles.stat}><b>214</b><span>Avg</span></div><div className={styles.stat}><b>68%</b><span>Acc</span></div></div>
        </div>
      </div>
    </section>
  );
}
