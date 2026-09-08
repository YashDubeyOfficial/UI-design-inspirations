import styles from "../page.module.css";

export default function Stage() {
  return (
    <div className={styles.stage}>
      <div className={styles.device}>
        <div className={`${styles['device-top']}`}>
          <div className={`${styles['device-left']}`}><div className={styles.traffic}><i></i><i></i><i></i></div><span className={`${styles['device-title']}`}>Parakh CBT • JEE Main 2024 — Mock 01</span></div>
          <span className={`${styles['timer-pill']}`}><span style={{width:'6px', height:'6px', background:'#FF3B30', borderRadius:'50%', display:'inline-block'}}></span> 02:18:45 <b>remaining</b></span>
        </div>
        <div className={`${styles['device-body']}`}>
          <div className={`${styles['device-left-pane']}`}>
            <div className={styles.segments}><span className={styles.active}>Physics • 30</span><span>Chemistry</span><span>Mathematics</span></div>
            <div className={`${styles['question-hig']}`}>Q14. If α and β are roots of x² − 6x + 4 = 0, then α³ + β³ = ?</div>
            <div className={`${styles['options-hig']}`}>
              <div className={`${styles['opt-hig']}`}><b>A</b> 144</div>
              <div className={`${styles['opt-hig']} ${styles.sel}`}><b>B</b> 136 — Selected</div>
              <div className={`${styles['opt-hig']}`}><b>C</b> 128</div>
              <div className={`${styles['opt-hig']}`}><b>D</b> 120</div>
            </div>
            <div className={`${styles['device-actions']}`}><span className={`${styles['mini-hig']}`}>← Previous</span><span className={`${styles['mini-hig']} ${styles.dark}`}>Save & Next →</span><span className={`${styles['mini-hig']}`} style={{background:'#FFF9C4', borderColor:'#FFE082'}}>Mark for Review</span></div>
          </div>
          <div className={`${styles['device-right-pane']}`}>
            <div className={`${styles['palette-head-hig']}`}><span>Question Palette</span><span>14 / 90</span></div>
            <div className={`${styles['palette-hig']}`}>
              <span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span>
              <span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.cur}`}>7</span><span className={`${styles.pal} ${styles.ans}`}>8</span><span className={styles.pal}>9</span><span className={`${styles.pal} ${styles.mark}`}>10</span>
              <span className={`${styles.pal} ${styles.ans}`}>11</span><span className={styles.pal}>12</span><span className={styles.pal}>13</span><span className={`${styles.pal} ${styles.ans}`} style={{background:'var(--blue)', color:'white', borderColor:'var(--blue)'}}>14</span><span className={styles.pal}>15</span>
            </div>
            <div className={`${styles['legend-hig']}`}><span><i className={styles.a}></i>Answered</span><span><i className={styles.m}></i>Marked</span><span><i className={styles.n}></i>Not visited</span></div>
            <div style={{marginTop:'14px', background:'white', border:'1px solid var(--border2)', borderRadius:'12px', padding:'12px', boxShadow:'var(--shadow)'}}>
              <div style={{fontSize:'11px', fontWeight:'700', letterSpacing:'.06em', textTransform:'uppercase', color:'var(--muted2)', marginBottom:'8px'}}>Instructions</div>
              <div style={{height:'6px', background:'var(--fill)', borderRadius:'999px', marginBottom:'6px'}}></div>
              <div style={{height:'6px', background:'var(--fill)', borderRadius:'999px', width:'80%'}}></div>
              <div style={{marginTop:'8px', fontSize:'11px', fontWeight:'600', color:'var(--blue)'}}>+4 −1 • 180 mins • 3 sections</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles['bridge-hig']}`}>
        <div className={`${styles['bridge-top-hig']}`}><div className={`${styles['bridge-logo']}`}>✦</div><div><strong style={{fontSize:'13px'}}>PARAKH HIG AI</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Quiet parsing • 39s</span></div><span style={{marginLeft:'auto', fontSize:'11px', background:'var(--ink)', color:'white', padding:'5px 8px', borderRadius:'999px'}}>39s</span></div>
        <div className={`${styles['progress-hig']}`}><i></i></div>
        <div className={`${styles['tags-hig']}`}><span className={`${styles['tag-hig']} ${styles.fill}`}><span className={styles.ck}>✓</span> 90 Qs</span><span className={`${styles['tag-hig']} ${styles.fill}`}><span className={styles.ck}>✓</span> 180 min</span><span className={`${styles['tag-hig']}`}>+4 −1</span><span className={`${styles['tag-hig']}`}>3 Sections</span></div>
      </div>
    </div>
  );
}
