import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-wrap']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>Ready to<br /><em>practice like real?</em></h2>
          <p>Join 40,000 aspirants who take mocks under real pressure — not quiz UI. Three free mocks to start.</p>
          <div className={`${styles['final-actions']}`}>
            <a href="#try" className={`${styles['btn-minimal']}`} style={{padding:'14px 22px', fontSize:'14px'}}>Upload PDF — It&apos;s free →</a>
            <a href="#" className={`${styles['btn-line']}`} style={{padding:'13px 20px'}}>Watch 30s demo</a>
          </div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div className={`${styles['final-visual-top']}`}><span>Your shelf</span><span>3 / 3 free</span></div>
          <div className={`${styles['mock-row']}`}><div><strong>JEE 2023 — Shift 1</strong><br /><span>Score 214/360</span></div><span style={{border:'1px solid var(--ink)', padding:'6px 10px', fontSize:'11px', fontWeight:'600'}}>Open →</span></div>
          <div className={`${styles['stats-min']}`}>
            <div><b>42</b><span>Mocks</span></div>
            <div><b>214</b><span>Avg</span></div>
            <div><b>68%</b><span>Acc</span></div>
          </div>
          <div style={{fontSize:'11px', color:'var(--muted)', textAlign:'center', letterSpacing:'.04em'}}>No card required • Cancel anytime</div>
        </div>
      </div>
    </section>
  );
}
