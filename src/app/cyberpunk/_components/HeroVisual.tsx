import styles from "../page.module.css";

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.crt} style={{borderRadius:'6px'}}>
        <div className={`${styles['crt-top']}`}><strong>◈ PARAKH_OS // PDF_DECK.exe</strong><span className={`${styles['timer-neon']}`}>● 02:47:12 REMAINING</span></div>
        <div className={`${styles['pdf-card-neon']}`}>
          <div className={`${styles['pdf-head']}`}><div className={`${styles['pdf-icon']}`}>▣</div><div><strong style={{fontFamily:'\'Orbitron\',sans-serif', fontSize:'12px', letterSpacing:'.06em'}}>JEE_MAIN_2023_S1.pdf</strong><br /><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'rgba(232,234,240,.5)'}}>18 PAGES • 6.2 MB • SCAN + TEXT LAYER</span></div><span style={{marginLeft:'auto', background:'var(--yellow)', color:'#000', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', fontWeight:'800', padding:'4px 7px'}}>PDF</span></div>
          <div className={`${styles.lines} w90 ${styles.cyan}`}></div><div className={`${styles.lines} w80`}></div><div className={`${styles.lines} w60`}></div>
          <div style={{border:'1px dashed rgba(0,255,240,.2)', padding:'8px', background:'rgba(0,255,240,.02)', margin:'8px 0'}}>
            <div style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'var(--cyan)', marginBottom:'6px'}}>Q.14 // SYSTEM OF EQUATIONS … [DECODED]</div>
            <div className={`${styles.lines} w70`} style={{height:'6px'}}></div><div className={`${styles.lines} w60 ${styles.cyan}`} style={{height:'6px'}}></div>
          </div>
          <div className={`${styles.lines} w80`} style={{height:'6px'}}></div>
        </div>
        <div className={`${styles['ai-bridge']}`}>
          <div className={`${styles['ai-head']}`}><span>◆ PARAKH NEURAL</span><span style={{background:'var(--cyan)', color:'#000', padding:'2px 6px', fontSize:'10px'}}>42s</span></div>
          <div style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px', color:'var(--cyan)', marginBottom:'6px'}}>SNIFFING MARKING SCHEME…</div>
          <div className={styles.scan}><i></i></div>
          <div className={styles.tags}><span className={styles.tag}>✓ 90 Qs</span><span className={`${styles.tag} ${styles.mag}`}>180 mins</span><span className={styles.tag}>+4 −1</span><span className={`${styles.tag} ${styles.mag}`}>3 SECTIONS</span></div>
        </div>
        <div className={`${styles['cbt-neon']}`}>
          <div className={`${styles['cbt-neon-head']}`}><span>JEE MAIN — MOCK_01 • CBT_MODE // ONLINE</span><span style={{color:'var(--yellow)'}}>● 02:47:12</span></div>
          <div className={`${styles['cbt-body']}`}>
            <div className={`${styles['cbt-q']}`}>
              <div className={styles.tabs}><span className={`${styles.tab} ${styles.active}`}>PHYSICS</span><span className={styles.tab}>CHEM</span><span className={styles.tab}>MATHS</span></div>
              <div className={styles.question}>Q14. If α and β are roots of x² − 6x + 4 = 0, then α³ + β³ = ?</div>
              <div className={styles.opt}><b>A</b> 144</div><div className={`${styles.opt} ${styles.sel}`}><b>B</b> 136 — LOCKED</div><div className={styles.opt}><b>C</b> 128</div><div className={styles.opt}><b>D</b> 120</div>
              <div style={{display:'flex', gap:'6px', marginTop:'10px'}}><span style={{flex:'1', border:'1px solid rgba(255,255,255,.1)', padding:'7px', textAlign:'center', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px'}}>← PREV</span><span style={{flex:'1', background:'var(--cyan)', color:'#000', padding:'7px', textAlign:'center', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px', fontWeight:'800'}}>SAVE & NEXT →</span></div>
            </div>
            <div className={`${styles['cbt-pal']}`}>
              <div className={`${styles['pal-head']}`}><span>PALETTE // 14/90</span><span style={{color:'var(--yellow)'}}>LIVE</span></div>
              <div className={styles.palette}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span><span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.ans}`}>7</span><span className={styles.pal}>8</span><span className={`${styles.pal} ${styles.ans}`} style={{background:'var(--yellow)'}}>14</span><span className={styles.pal}>10</span></div>
              <div style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'9px', color:'rgba(232,234,240,.5)'}}>● ANSWERED &nbsp; ● MARKED &nbsp; ○ NOT VISITED</div>
              <div style={{marginTop:'8px', border:'1px solid var(--yellow)', padding:'6px', textAlign:'center', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'var(--yellow)'}}>AUTO-SUBMIT AT 00:00 — NO MERCY</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.sticker} ${styles.s1}`}>◷ CHROME TIMER // DRIFT 0.02s</div>
      <div className={`${styles.sticker} ${styles.s2}`}>✓ NEGATIVE 1/4 — CAPTURED</div>
    </div>
  );
}
