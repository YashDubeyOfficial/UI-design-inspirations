import styles from "../page.module.css";

export default function Stage() {
  return (
    <div className={styles.stage}>
      <div className={styles.dashboard}>
        <div className={`${styles['dash-top']}`}>
          <div className={`${styles['dash-top-left']}`}><div className={styles.dots}><i></i><i></i><i></i></div><span className={`${styles['dash-title']}`}>PARAKH CBT • JEE Main 2024 — Mock 01</span></div>
          <div className={styles.timer}><span style={{width:'6px', height:'6px', background:'#22C55E', borderRadius:'50%', display:'inline-block', boxShadow:'0 0 8px rgba(34,197,94,.4)'}}></span> 02:28:14 <b>left</b></div>
        </div>
        <div className={`${styles['dash-body']}`}>
          <div className={`${styles['dash-left']}`}>
            <div className={styles.tabs}><span className={`${styles.tab} ${styles.active}`}>Physics • 30</span><span className={styles.tab}>Chemistry • 30</span><span className={styles.tab}>Maths • 30</span></div>
            <div className={styles.question}>Q14. If α, β are roots of x² −6x+4=0, α³+β³ = ?</div>
            <div className={styles.options}>
              <div className={styles.opt}><b>A</b> 144</div>
              <div className={`${styles.opt} ${styles.sel}`}><b>B</b> 136 — Selected</div>
              <div className={styles.opt}><b>C</b> 128</div>
              <div className={styles.opt}><b>D</b> 120</div>
            </div>
            <div className={`${styles['dash-actions']}`}><span className={styles.mini}>← Previous</span><span className={`${styles.mini} ${styles.dark}`}>Save & Next →</span><span className={styles.mini} style={{background:'#FEF3C7', borderColor:'#FDE68A'}}>Mark for Review</span></div>
          </div>
          <div className={`${styles['dash-right']}`}>
            <div className={`${styles['palette-head']}`}><strong>PALETTE</strong><span>14 / 90</span></div>
            <div className={styles.palette}>
              <span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span>
              <span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.curr}`}>7</span><span className={`${styles.pal} ${styles.ans}`}>8</span><span className={styles.pal}>9</span><span className={`${styles.pal} ${styles.mark}`}>10</span>
              <span className={`${styles.pal} ${styles.ans}`}>11</span><span className={styles.pal}>12</span><span className={styles.pal}>13</span><span className={`${styles.pal} ${styles.ans}`} style={{background:'var(--indigo)', color:'white'}}>14</span><span className={styles.pal}>15</span>
            </div>
            <div className={styles.legend}><span><i className={styles.ans}></i>Answered</span><span><i className={styles.mark}></i>Marked</span><span><i className={styles.not}></i>Not visited</span></div>
            <div style={{marginTop:'14px', background:'white', border:'1px solid var(--line)', borderRadius:'12px', padding:'12px', boxShadow:'var(--soft)'}}>
              <div style={{fontSize:'11px', fontWeight:'800', letterSpacing:'.06em', marginBottom:'8px'}}>INSTRUCTIONS</div>
              <div style={{height:'6px', background:'var(--bg)', border:'1px solid var(--line)', borderRadius:'999px', marginBottom:'6px'}}></div>
              <div style={{height:'6px', background:'var(--bg)', border:'1px solid var(--line)', borderRadius:'999px', width:'80%'}}></div>
              <div style={{marginTop:'8px', fontSize:'11px', fontWeight:'700', color:'var(--indigo)'}}>+4 −1 • 180 mins • 3 sections</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bridge}>
        <div className={`${styles['bridge-top']}`}><div className={`${styles['bridge-logo']}`}>✦</div><div><strong style={{fontSize:'13px'}}>PARAKH 2.0 AI</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Parsing • 38s • soft</span></div><span style={{marginLeft:'auto', fontSize:'11px', background:'var(--ink)', color:'white', padding:'5px 8px', borderRadius:'999px'}}>39s</span></div>
        <div className={styles.scan}><i></i></div>
        <div className={styles.tags}><span className={`${styles.tag} ${styles.fill}`}><span className={styles.ck}>✓</span> 90 Qs</span><span className={`${styles.tag} ${styles.fill}`}><span className={styles.ck}>✓</span> 180 mins</span><span className={styles.tag}>+4 −1</span><span className={styles.tag}>3 Sections</span><span className={styles.tag}>PCM</span></div>
      </div>
    </div>
  );
}
