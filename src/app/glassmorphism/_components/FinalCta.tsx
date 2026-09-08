import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final} id="pricing">
      <div className={`${styles['final-card']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>Ready to see <em>your PDF in glass?</em></h2>
          <p>Join 40,000 aspirants who practice inside light — not inside forms. Three mocks free, no card, no friction. Just glass.</p>
          <div className={`${styles['final-actions']}`}>
            <a href="#try" className={`${styles['btn-final-white']}`}>Upload PDF — it’s free →</a>
            <a href="#how" className={`${styles['btn-final-ghost']}`}>Watch 28s demo</a>
          </div>
          <div style={{marginTop:'14px', display:'flex', gap:'14px', fontSize:'12px', color:'rgba(255,255,255,.8)', flexWrap:'wrap'}}><span>✓ No signup for demo</span><span>✓ Scanned PDFs OK</span><span>✓ ~40s to CBT</span></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div className={`${styles['final-visual-top']}`}><strong style={{fontSize:'11px', letterSpacing:'.06em'}}>YOUR GLASS LIBRARY</strong><span style={{fontSize:'11px', fontWeight:'800', background:'linear-gradient(135deg,#7C3AED,#EC4899)', color:'white', padding:'5px 9px', borderRadius:'999px'}}>3/3 FREE</span></div>
          <div style={{padding:'12px', borderRadius:'14px', background:'linear-gradient(135deg, #EDE9FE, #FCE7F3)', border:'1px solid rgba(124,58,237,.1)', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'12px'}}>
            <div><strong style={{fontSize:'13px'}}>JEE Main 2023 — Shift 1</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Score 214/360 • Glass perfect</span></div><span style={{fontWeight:'800', background:'var(--ink)', color:'white', padding:'6px 10px', borderRadius:'999px', fontSize:'12px'}}>Analysis →</span>
          </div>
          <div className={styles.progress}><i></i></div>
          <div className={styles.stats}>
            <div className={styles.stat}><b>42</b><span>Mocks</span></div>
            <div className={styles.stat}><b>214</b><span>Avg score</span></div>
            <div className={styles.stat}><b>68%</b><span>Accuracy</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
