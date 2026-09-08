import styles from "../page.module.css";

export default function HeroStage() {
  return (
    <div style={{position:'relative', maxWidth:'1120px', margin:'0 auto', padding:'0 20px'}}>
      <div className={`${styles['hero-stage']}`}>
        <div className={`${styles['glass-card']} ${styles['pdf-glass']}`}>
          <div className={`${styles['pdf-head']}`}>
            <div className={`${styles['pdf-icon']}`}>◈</div>
            <div className={`${styles['pdf-meta']}`}><strong>JEE_Main_2023_S1.pdf</strong><span>18 pages • 7.1 MB • scan + text layer</span></div>
            <span className={`${styles['pdf-badge']}`}>PDF</span>
          </div>
          <div className={`${styles['pdf-lines']}`}>
            <div className={`${styles.line} ${styles.w90}`}></div><div className={`${styles.line} ${styles.w80}`}></div><div className={`${styles.line} ${styles.w65}`}></div>
          </div>
          <div className={`${styles['q-glass']}`}>
            <b>Q.14 &nbsp; If roots of x² − 6x + 4 = 0 are α, β …</b>
            <div className={`${styles.line} ${styles.w65}`} style={{marginBottom:'8px'}}></div>
            <div className={`${styles['q-opt']}`}></div><div className={`${styles['q-opt']} ${styles.fill}`}></div><div className={`${styles['q-opt']}`}></div><div className={`${styles['q-opt']}`}></div>
          </div>
          <div className={`${styles.line} ${styles.w80}`} style={{marginTop:'12px'}}></div><div className={`${styles.line} ${styles.w40}`}></div>
          <div className={`${styles['pdf-tags']}`}>
            <span className={styles.hl}>✦ Instructions • 3 pages</span>
            <span>OMR detected</span>
            <span>+4 −1 found</span>
          </div>
        </div>

        <div className={`${styles['glass-card']} ${styles['cbt-glass']}`}>
          <div className={`${styles['cbt-top']}`}>
            <div className={`${styles['cbt-top-left']}`}><div className={styles.dots}><i></i><i></i><i></i></div><span className={`${styles['cbt-title']}`}>JEE MAIN — MOCK 01 • GLASS CBT</span></div>
            <div className={styles.timer}><span style={{width:'6px', height:'6px', background:'#FF3B30', borderRadius:'50%', display:'inline-block', boxShadow:'0 0 8px rgba(255,59,48,.5)'}}></span> 02:47:12 <b>left</b></div>
          </div>
          <div className={`${styles['cbt-body']}`}>
            <div className={`${styles['cbt-left']}`}>
              <div className={styles.tabs}><span className={`${styles.tab} ${styles.active}`}>Physics</span><span className={styles.tab}>Chemistry</span><span className={styles.tab}>Maths</span></div>
              <div className={styles.question}>Q14. If α and β are roots of x² − 6x + 4 = 0, then α³ + β³ = ?</div>
              <div className={styles.options}>
                <div className={styles.opt}><b>A</b> 144</div>
                <div className={`${styles.opt} ${styles.sel}`}><b>B</b> 136 — Selected</div>
                <div className={styles.opt}><b>C</b> 128</div>
                <div className={styles.opt}><b>D</b> 120</div>
              </div>
              <div className={`${styles['cbt-actions']}`}><span className={`${styles['mini-btn']}`}>← Previous</span><span className={`${styles['mini-btn']} ${styles.dark}`}>Save & Next →</span></div>
            </div>
            <div className={`${styles['cbt-right']}`}>
              <div className={`${styles['palette-head']}`}><strong>Palette</strong><span>14 / 90</span></div>
              <div className={styles.palette}>
                <span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span>
                <span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.ans}`}>7</span><span className={`${styles.pal} ${styles.curr}`}>8</span><span className={styles.pal}>9</span><span className={`${styles.pal} ${styles.mark}`}>10</span>
                <span className={`${styles.pal} ${styles.ans}`}>11</span><span className={styles.pal}>12</span><span className={styles.pal}>13</span><span className={`${styles.pal} ${styles.ans}`} style={{background:'#1A1740', color:'white'}}>14</span><span className={styles.pal}>15</span>
              </div>
              <div className={styles.legend}>
                <span><i className={styles.ans}></i>Answered</span><span><i className={styles.mark}></i>Marked</span><span><i className={styles.not}></i>Not visited</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles['ai-float']}`}>
          <div className={`${styles['ai-top']}`}><div className={`${styles['ai-logo']}`}>✦</div><div><strong>PARAKH GLASS AI</strong><br /><span>Parsing • 42 seconds</span></div><span style={{marginLeft:'auto', fontSize:'10px', background:'var(--ink)', color:'white', padding:'4px 8px', borderRadius:'999px'}}>◈ 42s</span></div>
          <div className={styles.scan}><i></i></div>
          <div className={styles.tags}>
            <span className={`${styles.tag} ${styles.lime}`}><span className={styles.ck}>✓</span> 90 Questions</span>
            <span className={`${styles.tag} ${styles.lime}`}><span className={styles.ck}>✓</span> 180 mins</span>
            <span className={styles.tag}><span className={styles.ck}>✓</span> +4  −1</span>
            <span className={styles.tag}>3 Sections</span>
            <span className={styles.tag}>Physics • Chemistry • Maths</span>
          </div>
        </div>
        <div className={`${styles['float-badge']} ${styles.b1}`}><span className={styles.ic}>◷</span> Auto-submits at zero</div>
        <div className={`${styles['float-badge']} ${styles.b2}`}><span className={styles.ic}>✓</span> Negatives captured</div>
      </div>
    </div>
  );
}
