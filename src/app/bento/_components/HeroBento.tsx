import styles from "../page.module.css";

export default function HeroBento() {
  return (
    <div className={`${styles['hero-bento']}`}>
      <div className={`${styles['bento-box']} ${styles['bento-pdf']}`}>
        <div className={`${styles['pdf-head']}`}>
          <div className={`${styles['pdf-icon']}`}>📄</div>
          <div className={`${styles['pdf-meta']}`}><strong>JEE_Main_2023.pdf</strong><span>18 pages • 6.2 MB • mixed</span></div>
          <span className={`${styles['pdf-badge']}`}>PDF</span>
        </div>
        <div className={`${styles['bento-line']} ${styles.w90}`}></div><div className={`${styles['bento-line']} ${styles.w80}`}></div><div className={`${styles['bento-line']} ${styles.w60}`}></div>
        <div className={`${styles['q-mini']}`}>
          <b>Q.14 &nbsp; System of equations …</b>
          <div className={`${styles['bento-line']} ${styles.w70}`}></div>
          <div className={`${styles['q-opt']}`}></div><div className={`${styles['q-opt']} ${styles.fill}`}></div><div className={`${styles['q-opt']}`}></div>
        </div>
        <div className={`${styles['bento-line']} ${styles.w80}`}></div><div className={`${styles['bento-line']} ${styles.w40}`}></div>
        <div className={styles.tags}>
          <span className={`${styles['tag-pill']} ${styles.sage}`}>Instructions • 3p</span>
          <span className={`${styles['tag-pill']}`}>OMR found</span>
        </div>
      </div>

      <div className={`${styles['bento-box']} ${styles['bento-ai']}`}>
        <div>
          <div className={`${styles['ai-top']}`}><div className={`${styles['ai-logo']}`}>✦</div><div><strong>PARAKH AI</strong><br /><span>Boxing paper…</span></div><span className={`${styles['time-pill']}`}>42s</span></div>
          <div className={styles.scan}><i></i></div>
        </div>
        <div className={`${styles['ai-stats']}`}>
          <div className={`${styles['ai-stat']}`}><strong>90</strong><span>QUESTIONS</span></div>
          <div className={`${styles['ai-stat']}`}><strong>180<span style={{fontSize:'10px'}}>M</span></strong><span>DURATION</span></div>
          <div className={`${styles['ai-stat']} ${styles.wide}`}>+4 −1 • 3 Sections boxed ✓</div>
        </div>
        <div className={`${styles['f-badge']} ${styles['badge-bl']}`} style={{position:'relative', bottom:'auto', left:'auto', marginTop:'12px', transform:'none', background:'white', color:'var(--ink)'}}><span className={styles.icon}>✓</span> Negative boxed</div>
      </div>

      <div className={`${styles['bento-box']} ${styles['bento-cbt']}`}>
        <div className={`${styles['cbt-top']}`}>
          <div style={{display:'flex', gap:'8px', alignItems:'center'}}><div className={`${styles['cbt-dots']}`}><i></i><i></i><i></i></div><span className={`${styles['cbt-title']}`}>JEE MAIN — MOCK 01 • BENTO CBT</span></div>
          <div className={`${styles['cbt-timer']}`}><i></i> 02:47:12 <b>left</b></div>
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
              <span className={`${styles.pal} ${styles.ans}`}>11</span><span className={styles.pal}>12</span><span className={styles.pal}>13</span><span className={`${styles.pal} ${styles.ans}`} style={{background:'var(--sage)', borderColor:'var(--sage)', color:'white'}}>14</span><span className={styles.pal}>15</span>
            </div>
            <div className={styles.legend}><span><i className={styles.ans}></i>Answered</span><span><i className={styles.mark}></i>Marked</span><span><i className={styles.not}></i>Not visited</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
