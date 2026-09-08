import styles from "../page.module.css";

export default function HeroVisual() {
  return (
    <div className={`${styles['hero-visual']}`}>
      <div className={`${styles['visual-card']} ${styles['pdf-card']}`}>
        <div className={`${styles['pdf-head']}`}>
          <div className={`${styles['pdf-icon']}`}>◈</div>
          <div className={`${styles['pdf-meta']}`}><strong>JEE_Main_2023_Shift1.pdf</strong><span>18 pages • 6.2 MB • scan + text</span></div>
          <span className={`${styles['pdf-badge']}`}>PDF</span>
        </div>
        <div className={`${styles['line-dark']} ${styles.w90} ${styles.lime}`}></div><div className={`${styles['line-dark']} ${styles.w80}`}></div><div className={`${styles['line-dark']} ${styles.w60}`}></div>
        <div className={`${styles['q-block']}`}>
          <b>Q.14 &nbsp; System of equations …</b>
          <div className={`${styles['line-dark']} ${styles.w70}`} style={{marginTop:'8px'}}></div>
          <div className={`${styles['q-opt']}`}></div><div className={`${styles['q-opt']} ${styles.fill}`}></div><div className={`${styles['q-opt']}`}></div>
        </div>
        <div className={`${styles['line-dark']} ${styles.w80}`}></div><div className={`${styles['line-dark']} ${styles.w40}`}></div>
        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.lime}`}>Instructions • 3p</span><span className={styles.tag}>OMR detected</span>
        </div>
      </div>

      <div className={`${styles['ai-bridge']}`}>
        <div className={`${styles['ai-top']}`}><div className={`${styles['ai-logo']}`}>✦</div><div><strong>PARAKH AI</strong><br /><span>Parsing in dark…</span></div><span className={`${styles['time-pill']}`}>42s</span></div>
        <div className={styles.scan}><i></i></div>
        <div className={`${styles['ai-tags']}`}>
          <span className={styles.lime}>✓ 90 Qs</span><span>180 mins</span><span>+4 −1</span><span>3 Sections</span>
        </div>
      </div>

      <div className={`${styles['visual-card']} ${styles['cbt-card']}`}>
        <div className={`${styles['cbt-top']}`}>
          <div style={{display:'flex', gap:'8px', alignItems:'center'}}><div className={`${styles['cbt-dots']}`}><i></i><i></i><i></i></div><span className={`${styles['cbt-title']}`}>JEE MAIN — MOCK 01 • DARK CBT</span></div>
          <div className={`${styles['cbt-timer']}`}><i></i> 02:47:12</div>
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
              <span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.curr}`}>7</span><span className={`${styles.pal} ${styles.ans}`}>8</span><span className={styles.pal}>9</span><span className={`${styles.pal} ${styles.mark}`}>10</span>
              <span className={`${styles.pal} ${styles.ans}`}>11</span><span className={styles.pal}>12</span><span className={styles.pal}>13</span><span className={`${styles.pal} ${styles.ans}`}>14</span><span className={styles.pal}>15</span>
            </div>
            <div className={styles.legend}><span><i className={styles.ans}></i>Answered</span><span><i className={styles.mark}></i>Marked</span><span><i className={styles.not}></i>Not visited</span></div>
          </div>
        </div>
      </div>

      <div className={`${styles['f-badge']} ${styles['badge-tr']}`}><span className={styles.icon}>◷</span> Glow timer</div>
      <div className={`${styles['f-badge']} ${styles['badge-bl']}`}><span className={styles.icon}>✓</span> Negative 1/4 caught</div>
    </div>
  );
}
