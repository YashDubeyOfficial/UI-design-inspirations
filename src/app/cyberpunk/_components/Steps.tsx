import styles from "../page.module.css";

export default function Steps() {
  return (
    <div className={styles.steps}>
      <div className={styles.step}>
        <div className={`${styles['step-num']}`}>01 / DROP_ZONE <span>↗</span></div><h3>DROP ANY PDF</h3><p>PYQs since 2012, coaching zines, phone-scanned Xerox — even 300 pages. Drag to the neon tray.</p>
        <div className={`${styles['step-visual']}`}><div className={styles.upload}><div className={styles.ico}>↑</div><strong style={{fontFamily:'\'Orbitron\',sans-serif', fontSize:'12px', letterSpacing:'.06em'}}>DROP PDF TO DECK</strong><br /><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'rgba(232,234,240,.5)'}}>PDF up to 50MB • SCAN OK</span></div><div className={`${styles['mini-row']}`}>UPSC_2022.pdf <b>12.4 MB</b></div><div className={`${styles['mini-row']}`}>Allen_Major_07.pdf <b>8.1 MB</b></div></div>
      </div>
      <div className={styles.step}>
        <div className={`${styles['step-num']}`}>02 / NEURAL_PARSE <span>✦</span></div><h3>NEURAL RIPS IT</h3><p>Vision + LLM sniffs duration, marking, section rules — even when PDF is a bad photocopy.</p>
        <div className={`${styles['step-visual']}`}><div className={styles.grid2}><div className={`${styles['mini-card']}`}><small>DURATION</small><strong>180<span style={{fontSize:'10px', color:'var(--cyan)'}}>MINS</span></strong></div><div className={`${styles['mini-card']}`}><small>MARKING</small><strong>+4<span style={{color:'var(--mag)'}}> −1</span></strong></div><div className={`${styles['mini-card']}`}><small>SECTIONS</small><strong>3 <span style={{fontSize:'10px'}}>FOUND</span></strong></div><div className={`${styles['mini-card']}`}><small>QUESTIONS</small><strong>90</strong></div></div><div style={{marginTop:'8px', background:'var(--mag)', color:'#fff', textAlign:'center', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', padding:'6px', boxShadow:'0 0 10px var(--mag)'}}>✓ INSTRUCTIONS GHOSTED VERBATIM</div></div>
      </div>
      <div className={styles.step}>
        <div className={`${styles['step-num']}`}>03 / JACK_IN <span>▶</span></div><h3>JACK INTO HALL</h3><p>Countdown bleed, palette flicker, sectional locks, auto-submit — exactly like your centre&apos;s CRT.</p>
        <div className={`${styles['step-visual']}`} style={{padding:'10px'}}>
          <div style={{display:'flex', justifyContent:'space-between', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px'}}><span>Q 14/90</span><span style={{background:'var(--yellow)', color:'#000', padding:'3px 7px', fontWeight:'800'}}>01:42:11</span></div>
          <div style={{height:'7px', background:'linear-gradient(90deg,var(--cyan),var(--mag))', margin:'8px 0'}}></div><div style={{height:'6px', background:'rgba(255,255,255,.08)', marginBottom:'6px'}}></div><div className={styles.palette} style={{marginTop:'8px'}}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.mark}`}>2</span><span className={styles.pal}>3</span><span className={styles.pal}>4</span><span className={styles.pal}>5</span></div>
        </div>
      </div>
    </div>
  );
}
