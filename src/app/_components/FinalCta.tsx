import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final} id="try">
      <div className={`${styles['final-card']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>Ready to turn<br /><em>your PDF into a mock?</em></h2>
          <p>Join 40,000+ aspirants who practice with real exam pressure — not plain MCQs. Upload your first paper free, attempt it in under a minute.</p>
          <div className={`${styles['final-actions']}`}>
            <a href="#" className={`${styles['btn-primary']} ${styles['btn-lime']}`} style={{padding:'14px 22px'}}>Upload PDF — It’s free →</a>
            <a href="#" className={`${styles['btn-ghost']}`} style={{background:'rgba(255,255,255,.08)', borderColor:'rgba(255,255,255,.14)', color:'white'}}>Watch 30s demo</a>
          </div>
          <div style={{marginTop:'14px', fontSize:'12px', color:'rgba(255,255,255,.6)', display:'flex', gap:'16px', flexWrap:'wrap'}}><span>✓ No credit card</span><span>✓ 3 free mocks</span><span>✓ Cancel anytime</span></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div className={`${styles['final-visual-top']}`}><strong>YOUR MOCK LIBRARY</strong><span style={{fontSize:'11px', background:'var(--lime)', padding:'4px 8px', borderRadius:'999px', fontWeight:'800'}}>3 / 3 FREE USED</span></div>
          <div style={{background:'var(--bg)', border:'1px solid var(--line)', borderRadius:'14px', padding:'12px', marginBottom:'10px', display:'flex', justifyContent:'space-between', alignItems:'center'}}><div><strong style={{fontSize:'13px'}}>JEE Main 2023 — Shift 1</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>90 Qs • 180 mins • Score 214/360</span></div><span style={{fontSize:'11px', fontWeight:'800', background:'var(--ink)', color:'white', padding:'5px 9px', borderRadius:'999px'}}>Analysis →</span></div>
          <div className={styles.progress}><i></i></div>
          <div className={styles.stats}>
            <div className={styles.stat}><b>42</b><span>Mocks created</span></div>
            <div className={styles.stat}><b>214</b><span>Avg score</span></div>
            <div className={styles.stat}><b>68%</b><span>Accuracy</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
