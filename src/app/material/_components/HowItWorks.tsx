import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-head']}`}>
        <div className={`${styles['kicker-m3']}`}><i></i> 3 LEVELS OF ELEVATION</div>
        <h2>Upload. <strong>We elevate.</strong> You attempt.</h2>
        <p>Material means hierarchy you feel. Low elevation for sheets, high elevation for FABs and dialogs — so hall taxonomy reads instantly.</p>
      </div>
      <div className={styles.steps}>
        <div className={`${styles.step} ${styles.elev2}`}>
          <div className={`${styles['step-header']}`}><strong>01 — Upload PDF</strong><span className={`${styles['badge-m3']}`}>↗</span></div>
          <div className={`${styles['step-body']}`}>
            <h3>Drop any PDF • 0dp → 1dp</h3>
            <p>PYQs, coaching scans, 300 pages. Surface lifts to 1dp on hover.</p>
            <div className={styles.sheet}>
              <div className={styles.dropzone}><div className={styles.ic}>↑</div><strong>Drag & drop PDF</strong><br /><span style={{fontSize:'12px', color:'var(--muted)'}}>or browse • 50MB • any scan</span></div>
            </div>
          </div>
        </div>
        <div className={`${styles.step} ${styles.elev2}`} style={{background:'var(--primaryContainer)', borderColor:'var(--primaryContainer)'}}>
          <div className={`${styles['step-header']}`} style={{background:'var(--primary)', color:'white', borderColor:'var(--primary)'}}><strong style={{color:'white'}}>02 — AI structures</strong><span className={`${styles['badge-m3']}`} style={{background:'white', color:'var(--primary)'}}>✦</span></div>
          <div className={`${styles['step-body']}`}>
            <h3>AI lifts structure • 1dp → 3dp</h3>
            <p>Duration, negatives, sections — extracted and elevated.</p>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}>
              <div className={styles.sheet} style={{textAlign:'center'}}><small style={{fontSize:'10px', letterSpacing:'.5px', color:'var(--muted)'}}>DURATION</small><br /><strong>180 min</strong></div>
              <div className={styles.sheet} style={{textAlign:'center'}}><small style={{fontSize:'10px', letterSpacing:'.5px', color:'var(--muted)'}}>MARKING</small><br /><strong>+4 −1</strong></div>
              <div className={styles.sheet} style={{textAlign:'center'}}><small style={{fontSize:'10px', letterSpacing:'.5px', color:'var(--muted)'}}>SECTIONS</small><br /><strong>3</strong></div>
              <div className={styles.sheet} style={{textAlign:'center'}}><small style={{fontSize:'10px', letterSpacing:'.5px', color:'var(--muted)'}}>Qs</small><br /><strong>90</strong></div>
            </div>
          </div>
        </div>
        <div className={`${styles.step} ${styles.elev2}`}>
          <div className={`${styles['step-header']}`}><strong>03 — Attempt CBT</strong><span className={`${styles['badge-m3']}`}>▶</span></div>
          <div className={`${styles['step-body']}`}>
            <h3>Attempt like hall • FAB 3dp</h3>
            <p>Palette 1dp, app bar 2dp, FAB 3dp — tactile and true NTA.</p>
            <div className={styles.sheet}>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', fontWeight:'700', letterSpacing:'.5px'}}><span>Q14 / 90</span><span style={{background:'var(--ink)', color:'white', padding:'4px 8px', borderRadius:'8px'}}>01:42:11</span></div>
              <div style={{height:'8px', background:'var(--primary)', borderRadius:'4px', width:'72%', marginTop:'8px'}}></div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'10px'}}><span className={`${styles.pal} ${styles.filled}`}>1</span><span className={`${styles.pal} ${styles.tonal}`}>2</span><span className={styles.pal}>3</span><span className={styles.pal}>4</span><span className={styles.pal}>5</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
