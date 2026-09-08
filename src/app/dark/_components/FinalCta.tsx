import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>Ready to<br /><em>go dark?</em></h2>
          <p>Join 40k+ who practice after hours under OLED pressure — not white quizzes. 3 free dark mocks.</p>
          <div className={`${styles['final-actions']}`}>
            <a href="#try" className={`${styles['btn-final-lime']}`}>Upload PDF — It&apos;s free →</a>
            <a href="#" className={`${styles['btn-final-ghost']}`}>Watch 30s dark</a>
          </div>
          <div style={{marginTop:'14px', fontSize:'11px', color:'var(--muted)', position:'relative'}}>MADE IN INDIA 🇮🇳 • OLED • NO WHITE FLASH • ENCRYPTED</div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div className={`${styles['final-visual-top']}`}><strong>YOUR DARK SHELF</strong><span style={{background:'var(--lime)', color:'#0A0A0F', padding:'4px 8px', borderRadius:'999px', fontSize:'11px', fontWeight:'800', boxShadow:'0 0 10px var(--lime-glow)'}}>3 / 3 FREE</span></div>
          <div style={{border:'1px solid var(--line)', padding:'12px', borderRadius:'14px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'rgba(255,255,255,.03)', marginBottom:'14px', position:'relative'}}><div><strong style={{fontSize:'13px', color:'white'}}>JEE 2023 — Shift 1</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Score 214/360 • dark ✓</span></div><span style={{background:'var(--lime)', color:'#0A0A0F', padding:'6px 10px', borderRadius:'999px', fontSize:'11px', fontWeight:'800', boxShadow:'0 0 10px var(--lime-glow)'}}>Open →</span></div>
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
