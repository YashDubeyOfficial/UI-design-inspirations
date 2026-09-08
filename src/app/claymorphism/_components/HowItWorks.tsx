import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> PUFF → PRESS → PRACTICE</div>
        <h2>Drop. <em>We puff.</em> You press start.</h2>
        <p>Three inflated steps. No forms, no manual timers — just the softest path from PDF to exam hall.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>01 — DROP <span>↗</span></div>
          <h3>Drop any PDF</h3>
          <p>PYQs, scanned coaching sheets, bloated banks — even 300-page PDFs. The clay dropzone bounces.</p>
          <div className={`${styles['step-visual']}`}><div className={styles.upload}><div className={styles.ico}>↑</div><strong style={{fontFamily:'\'Nunito\',sans-serif'}}>Drop clay PDF here</strong><br /><span style={{fontSize:'11px', color:'var(--muted)', fontWeight:'700'}}>up to 50MB • any scan • bounces on drop</span></div><div className={`${styles['mini-row']}`}>NEET_2021.pdf <span style={{background:'var(--ink)', color:'white', padding:'3px 8px', borderRadius:'999px', border:'2px solid white'}}>18 MB</span></div></div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>02 — PUFF <span>✦</span></div>
          <h3>Clay reads & puffs</h3>
          <p>Duration, negatives, sections, instructions — all inflated into puffy pills in under 40 seconds.</p>
          <div className={`${styles['step-visual']}`}><div className={styles.grid2}><div className={`${styles['mini-card']}`}><small>DURATION</small><br /><strong>180 mins</strong></div><div className={`${styles['mini-card']}`}><small>MARKING</small><br /><strong>+4 −1</strong></div><div className={`${styles['mini-card']}`}><small>SECTIONS</small><br /><strong>3 puffs</strong></div><div className={`${styles['mini-card']}`}><small>QUESTIONS</small><br /><strong>90 puffed</strong></div></div><div style={{marginTop:'8px', fontSize:'11px', fontWeight:'800', padding:'8px 10px', borderRadius:'999px', background:'var(--ink)', color:'white', textAlign:'center'}}>♡ Instructions kept soft & verbatim</div></div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>03 — PRESS <span>▶</span></div>
          <h3>Press start, feel hall</h3>
          <p>Lifted palette, squishy timer, mark-for-review that wobbles — real exam nerves, soft edges.</p>
          <div className={`${styles['step-visual']}`}><div style={{display:'flex', justifyContent:'space-between', fontFamily:'\'Nunito\',sans-serif', fontWeight:'900', fontSize:'11px'}}><span>Q 14 / 90</span><span style={{background:'var(--ink)', color:'white', padding:'5px 10px', borderRadius:'999px', border:'2px solid white'}}>01:42:11</span></div><div style={{marginTop:'8px', height:'8px', background:'linear-gradient(90deg,#FFDCC3,#FFB88C)', borderRadius:'999px', width:'74%', border:'2px solid white'}}></div><div style={{height:'8px', background:'rgba(46,31,20,.07)', borderRadius:'999px', width:'88%', marginTop:'6px', border:'2px solid white'}}></div><div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'8px'}}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.mark}`}>2</span><span className={styles.pal}>3</span><span className={styles.pal}>4</span><span className={styles.pal}>5</span></div></div>
        </div>
      </div>
    </section>
  );
}
