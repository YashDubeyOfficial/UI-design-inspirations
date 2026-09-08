import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> PDF → MOCK IN 3 SOFT STEPS</div>
        <h2>Soft on eyes. <em>Hard on exam.</em></h2>
        <p>We kept flat’s clarity, added just enough shadow to lift cards off the page — so you can stare for 180 minutes without fatigue.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>01 — DROP <span>↗</span></div>
          <h3>Drop any PDF</h3>
          <p>Phone scans, 300-page banks, PYQs since 2012. Soft dashed zone catches everything.</p>
          <div className={styles.visual}>
            <div className={styles.upload}><div className={styles.up}>↑</div><strong>Drop PDF</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>or browse • up to 50MB • soft lift</span></div>
            <div style={{marginTop:'8px', display:'grid', gap:'6px'}}>
              <div style={{border:'1px solid var(--line)', background:'white', padding:'8px 10px', borderRadius:'999px', display:'flex', justifyContent:'space-between', fontWeight:'700', fontSize:'12px', boxShadow:'var(--soft)'}}><span>UPSC_2022.pdf</span><span style={{background:'var(--indigo)', color:'white', padding:'3px 7px', borderRadius:'999px'}}>11 MB</span></div>
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>02 — SOFT AI <span>✦</span></div>
          <h3>Soft AI lifts it</h3>
          <p>Duration, negatives, sections, instructions — lifted into gentle cards with soft shadows.</p>
          <div className={styles.visual}>
            <div className={styles.grid2}>
              <div className={`${styles['mini-card']}`}><small style={{fontSize:'10px', letterSpacing:'.06em', color:'var(--muted)'}}>DURATION</small><br /><strong style={{fontSize:'16px'}}>180m</strong></div>
              <div className={`${styles['mini-card']}`}><small style={{fontSize:'10px', letterSpacing:'.06em', color:'var(--muted)'}}>MARKING</small><br /><strong style={{fontSize:'16px'}}>+4 −1</strong></div>
              <div className={`${styles['mini-card']}`}><small style={{fontSize:'10px', letterSpacing:'.06em', color:'var(--muted)'}}>SECTIONS</small><br /><strong style={{fontSize:'16px'}}>3</strong></div>
              <div className={`${styles['mini-card']}`}><small style={{fontSize:'10px', letterSpacing:'.06em', color:'var(--muted)'}}>Qs</small><br /><strong style={{fontSize:'16px'}}>90</strong></div>
            </div>
            <div style={{marginTop:'8px', background:'linear-gradient(135deg,var(--indigo),var(--violet))', color:'white', padding:'8px', borderRadius:'999px', textAlign:'center', fontWeight:'700', fontSize:'11px', boxShadow:'0 4px 12px rgba(79,70,229,.18)'}}>✓ Instructions kept soft</div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>03 — ATTEMPT <span>▶</span></div>
          <h3>Attempt, comfortably</h3>
          <p>Palette, timer, mark-for-review — all soft, rounded, legible for the long hall.</p>
          <div className={styles.visual}>
            <div style={{display:'flex', justifyContent:'space-between', fontWeight:'800', fontSize:'11px', marginBottom:'8px'}}><span>Q14 / 90</span><span style={{background:'var(--ink)', color:'white', padding:'4px 8px', borderRadius:'999px'}}>01:42:11</span></div>
            <div style={{height:'8px', background:'linear-gradient(90deg,var(--indigo),var(--violet))', borderRadius:'999px', width:'72%', marginBottom:'8px'}}></div>
            <div style={{height:'6px', background:'white', border:'1px solid var(--line)', borderRadius:'999px', width:'88%', marginBottom:'6px'}}></div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'8px'}}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.mark}`}>2</span><span className={styles.pal}>3</span><span className={styles.pal}>4</span><span className={styles.pal}>5</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
