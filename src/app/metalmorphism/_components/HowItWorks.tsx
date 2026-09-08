import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> FORGING — 3 STRIKES</div>
        <h2>Heat. <em>Hammer.</em> Harden into hall.</h2>
        <p>Three industrial strikes. No manual riveting — the forge reads every instruction, every marking, every section lock.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={`${styles.rivet} ${styles.r1}`}></div>
          <div className={`${styles['step-num']}`}>01 — LOAD <span>01</span></div>
          <h3>Load the plate</h3>
          <p>Drop any PDF — PYQs, coaching blueprints, scanned sheets. The hopper accepts 300 plates.</p>
          <div className={`${styles['step-visual']}`}><div className={styles.upload}><div className={styles.ico}>↑</div><strong style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'12px', color:'white'}}>DROP PLATE INTO FORGE</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>or browse • 50MB • brushed hopper</span></div><div className={`${styles['mini-row']}`}>GATE_ME_2024.pdf <b>9.2 MB</b></div></div>
        </div>
        <div className={styles.step}>
          <div className={`${styles.rivet} ${styles.r1}`}></div>
          <div className={`${styles['step-num']}`}>02 — FORGE <span>02</span></div>
          <h3>Forge reads steel</h3>
          <p>Temperature 1420°C: questions, options, NAT, marking +4 −1, duration, section locks — all cast.</p>
          <div className={`${styles['step-visual']}`}><div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}><div style={{background:'linear-gradient(180deg,#2A333E,#1C2228)', border:'1px solid #2E3A47', borderRadius:'8px', padding:'10px', textAlign:'center'}}><small style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'9px', color:'var(--muted)'}}>DURATION</small><br /><strong style={{fontFamily:'\'JetBrains Mono\',monospace', color:'white'}}>180 mins</strong></div><div style={{background:'linear-gradient(180deg,#2A333E,#1C2228)', border:'1px solid #2E3A47', borderRadius:'8px', padding:'10px', textAlign:'center'}}><small style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'9px', color:'var(--muted)'}}>MARKING</small><br /><strong style={{fontFamily:'\'JetBrains Mono\',monospace', color:'white'}}>+2 −0.66</strong></div><div style={{background:'linear-gradient(180deg,#2A333E,#1C2228)', border:'1px solid #2E3A47', borderRadius:'8px', padding:'10px', textAlign:'center'}}><small style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'9px', color:'var(--muted)'}}>SECTIONS</small><br /><strong style={{fontFamily:'\'JetBrains Mono\',monospace', color:'white'}}>3 cast</strong></div><div style={{background:'linear-gradient(180deg,#2A333E,#1C2228)', border:'1px solid #2E3A47', borderRadius:'8px', padding:'10px', textAlign:'center'}}><small style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'9px', color:'var(--muted)'}}>QUESTIONS</small><br /><strong style={{fontFamily:'\'JetBrains Mono\',monospace', color:'white'}}>65 set</strong></div></div><div style={{marginTop:'8px', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', fontWeight:'800', padding:'8px', borderRadius:'8px', background:'linear-gradient(135deg,#FF6B2C,#FF4D00)', color:'white', textAlign:'center'}}>✓ Instructions cold-pressed verbatim</div></div>
        </div>
        <div className={styles.step}>
          <div className={`${styles.rivet} ${styles.r1}`}></div>
          <div className={`${styles['step-num']}`}>03 — HARDEN <span>03</span></div>
          <h3>Harden into CBT</h3>
          <p>Riveted palette, hammered timer, mark-for-hold, auto-forge submit — true hall weight.</p>
          <div className={`${styles['step-visual']}`}><div style={{display:'flex', justifyContent:'space-between', fontFamily:'\'JetBrains Mono\',monospace', fontWeight:'800', fontSize:'11px', color:'white'}}><span>Q14 / 65</span><span style={{background:'#1C2228', border:'1px solid #2E3A47', padding:'4px 8px', borderRadius:'6px'}}>02:12:04</span></div><div style={{marginTop:'8px', height:'8px', background:'linear-gradient(90deg,#FF6B2C,#FF4D00)', borderRadius:'4px', width:'68%', border:'1px solid rgba(255,107,44,.3)'}}></div><div style={{height:'7px', background:'#1C2228', borderRadius:'4px', width:'88%', marginTop:'6px', border:'1px solid #2E3A47'}}></div><div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'10px'}}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.mark}`}>2</span><span className={styles.pal}>3</span><span className={styles.pal}>4</span><span className={styles.pal}>5</span></div></div>
        </div>
      </div>
    </section>
  );
}
