import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-bento']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>Ready to<br /><em>box your PDF?</em></h2>
          <p>Join 40k+ aspirants who pack mocks like bento — clean, timed, hall-real. 3 free boxes to start.</p>
          <div className={`${styles['final-actions']}`}>
            <a href="#try" className={`${styles['btn-final-white']}`}>Pack PDF — It&apos;s free →</a>
            <a href="#" className={`${styles['btn-final-ghost']}`}>Watch 30s pack</a>
          </div>
          <div style={{marginTop:'14px', fontSize:'11px', color:'rgba(255,255,255,.6)', position:'relative'}}>MADE IN INDIA 🇮🇳 • ENCRYPTED • NO TRAINING DATA SOLD</div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div className={`${styles['final-visual-top']}`}><strong>YOUR BENTO SHELF</strong><span style={{background:'var(--sage-light)', color:'var(--sage-deep)', padding:'5px 9px', borderRadius:'999px', fontSize:'11px', fontWeight:'800', border:'1px solid rgba(143,169,139,.18)'}}>3 / 3 FREE</span></div>
          <div style={{border:'1px solid var(--line)', padding:'12px', borderRadius:'16px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'var(--bg)', marginBottom:'14px'}}><div><strong style={{fontSize:'13px'}}>JEE 2023 — Shift 1</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Score 214/360 • bento ✓</span></div><span style={{background:'var(--sage)', color:'white', padding:'6px 10px', borderRadius:'999px', fontSize:'11px', fontWeight:'800'}}>Open →</span></div>
          <div className={styles.progress}><i></i></div>
          <div className={styles.stats}>
            <div className={styles.stat}><b>42</b><span>Mocks</span></div>
            <div className={styles.stat}><b>214</b><span>Avg</span></div>
            <div className={styles.stat}><b>68%</b><span>Acc</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
