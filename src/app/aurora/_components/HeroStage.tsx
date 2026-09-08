import styles from "../page.module.css";

export default function HeroStage() {
  return (
    <div style={{position:'relative', maxWidth:'1120px', margin:'0 auto', padding:'0 20px'}}>
      <div className={`${styles['hero-stage']}`}>
        <div className={`${styles['frost-card']} ${styles['pdf-aurora']} ${styles['glow-green']}`}>
          <div className={`${styles['pdf-head']}`}><div className={`${styles['pdf-icon']}`}>◈</div><div className={`${styles['pdf-meta']}`}><strong style={{color:'white'}}>CAT_2023_Slot2.pdf</strong><span>24 pages • 8.4 MB • low-light scan</span></div><span className={`${styles['pdf-badge']}`}>PDF</span></div>
          <div className={`${styles.lines} ${styles.w90}`}></div><div className={`${styles.lines} ${styles.w80}`}></div><div className={`${styles.lines} ${styles.w65}`}></div>
          <div className={`${styles['q-frost']}`}><b>Q.19 &nbsp; A mixture of milk and water …</b><div className={`${styles.lines} ${styles.w65}`} style={{marginBottom:'8px', opacity:'.6'}}></div><div className={`${styles['q-opt']}`}></div><div className={`${styles['q-opt']} ${styles.fill}`}></div><div className={`${styles['q-opt']}`}></div></div>
          <div className={`${styles.lines} ${styles.w80}`} style={{marginTop:'14px'}}></div><div className={`${styles.lines} ${styles.w40}`}></div>
          <div style={{display:'flex', gap:'6px', marginTop:'12px', flexWrap:'wrap'}}><span style={{fontSize:'11px', fontWeight:'700', padding:'5px 9px', borderRadius:'999px', background:'rgba(34,197,94,.12)', border:'1px solid rgba(34,197,94,.18)', color:'#BBF7D0'}}>✦ 3 sections • aurora read</span><span style={{fontSize:'11px', fontWeight:'700', padding:'5px 9px', borderRadius:'999px', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.07)', color:'var(--muted)'}}>+3 −1 detected</span></div>
        </div>
        <div className={`${styles['frost-card']} ${styles['cbt-aurora']} ${styles['glow-violet']}`}>
          <div className={`${styles['cbt-top']}`}><div className={`${styles['cbt-top-left']}`}><div className={styles.dots}><i></i><i></i><i></i></div><span className={`${styles['cbt-title']}`}>CAT 2023 — MOCK 01 • AURORA CBT</span></div><div className={styles.timer}><span style={{width:'6px', height:'6px', background:'#22C55E', borderRadius:'50%', display:'inline-block', boxShadow:'0 0 8px rgba(34,197,94,.5)'}}></span> 01:44:22 <b>left</b></div></div>
          <div className={`${styles['cbt-body']}`}>
            <div className={`${styles['cbt-left']}`}>
              <div className={styles.tabs}><span className={`${styles.tab} ${styles.active}`}>VARC</span><span className={styles.tab}>DILR</span><span className={styles.tab}>QA</span></div>
              <div className={styles.question}>Q19. A container has milk and water in ratio 5:1. If 12L mixture is replaced …</div>
              <div className={styles.options}>
                <div className={styles.opt}><b>A</b> 3:1</div>
                <div className={`${styles.opt} ${styles.sel}`}><b>B</b> 7:2 — Selected</div>
                <div className={styles.opt}><b>C</b> 5:2</div>
                <div className={styles.opt}><b>D</b> 9:2</div>
              </div>
              <div className={`${styles['cbt-actions']}`}><span className={`${styles['mini-btn']}`}>← Previous</span><span className={`${styles['mini-btn']} ${styles.dark}`}>Save & Next →</span></div>
            </div>
            <div className={`${styles['cbt-right']}`}>
              <div className={`${styles['palette-head']}`}><strong>Palette</strong><span>19 / 66</span></div>
              <div className={styles.palette}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span><span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.curr}`}>7</span><span className={`${styles.pal} ${styles.ans}`}>8</span><span className={styles.pal}>9</span><span className={`${styles.pal} ${styles.mark}`}>10</span><span className={styles.pal}>11</span><span className={styles.pal}>12</span><span className={`${styles.pal} ${styles.ans}`}>13</span><span className={styles.pal} style={{background:'linear-gradient(135deg,#22C55E,#4ADE80)', color:'#052e16'}}>14</span><span className={styles.pal}>15</span></div>
              <div className={styles.legend}><span><i className={styles.ans}></i>Answered</span><span><i className={styles.mark}></i>Marked</span><span><i className={styles.not}></i>Not visited</span></div>
            </div>
          </div>
        </div>
        <div className={`${styles['ai-aurora']}`}>
          <div className={`${styles['ai-top']}`}><div className={`${styles['ai-logo']}`}>✦</div><div><strong>AURORA AI</strong><br /><span>Reading through lights • 41s</span></div><span style={{marginLeft:'auto', fontSize:'10px', background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.09)', padding:'4px 8px', borderRadius:'999px', color:'white'}}>◎ 41s</span></div>
          <div className={styles.scan}><i></i></div>
          <div className={styles.tags}><span className={`${styles.tag} ${styles.aurora}`}><span className={styles.ck}>✓</span> 66 Questions</span><span className={`${styles.tag} ${styles.aurora}`}><span className={styles.ck}>✓</span> 120 mins</span><span className={styles.tag}>+3 −1</span><span className={styles.tag}>3 Sections</span><span className={styles.tag}>VARC • DILR • QA</span></div>
        </div>
        <div className={`${styles['float-badge']} ${styles.b1}`}><span className={styles.ic}>◷</span> Auto-submits at zero</div>
        <div className={`${styles['float-badge']} ${styles.b2}`}><span className={styles.ic}>✓</span> Negatives captured</div>
      </div>
    </div>
  );
}
