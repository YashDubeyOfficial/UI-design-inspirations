import styles from "../page.module.css";

export default function HeroVisual() {
  return (
    <div className={`${styles['hero-visual']}`}>
      <div className={`${styles.card} ${styles.elev1} ${styles['pdf-card']}`}>
        <div className={`${styles['pdf-head']}`}><div className={`${styles['pdf-icon']}`}>◈</div><div className={`${styles['pdf-meta']}`}><strong>JEE_Main_2023_S1.pdf</strong><br /><span>18 pages • 6.2 MB • with elevation 1dp</span></div><span className={styles.badge}>PDF</span></div>
        <div className={`${styles.line} ${styles.w90}`}></div><div className={`${styles.line} ${styles.w80}`}></div><div className={`${styles.line} ${styles.w60}`}></div>
        <div className={`${styles['q-sheet']}`}><b>Q14. If α, β are roots of x² −6x+4=0 …</b><div className={`${styles.line} ${styles.w60}`} style={{marginTop:'8px'}}></div><div className={`${styles['q-opt']}`}></div><div className={`${styles['q-opt']} ${styles.fill}`}></div><div className={`${styles['q-opt']}`}></div></div>
        <div style={{display:'flex', gap:'8px', marginTop:'10px'}}><span className={styles.chip}>Instructions • 3 pages</span><span className={styles.chip}>+4 −1</span></div>
      </div>

      <div className={`${styles['elevated-bridge']}`}>
        <div className={`${styles['bridge-logo']}`}>✦</div>
        <div style={{flex:'1'}}><strong style={{fontSize:'14px'}}>PARAKH MATERIAL AI</strong><br /><span style={{fontSize:'12px', opacity:'.85'}}>Parsing • elevation 3dp • 40s</span></div>
        <div className={styles.linear}><i></i></div>
      </div>

      <div className={`${styles.card} ${styles.elev3} ${styles['cbt-card']}`}>
        <div className={`${styles['cbt-top']}`}><strong>MOCK 01 • MATERIAL CBT • JEE MAIN</strong><span className={`${styles['timer-m3']}`}>● 02:47:12 <b>left</b></span></div>
        <div className={`${styles['cbt-body']}`}>
          <div className={`${styles['cbt-left']}`}>
            <div className={styles.segmented}><span className={styles.active}>Physics</span><span>Chemistry</span><span>Maths</span></div>
            <div className={styles.question}>Q14. If α and β are roots of x² −6x+4=0, then α³+β³ = ?</div>
            <div className={styles.options}>
              <div className={styles.opt}><b>A</b> 144</div>
              <div className={`${styles.opt} ${styles.selected}`}><b>B</b> 136 — Selected</div>
              <div className={styles.opt}><b>C</b> 128</div>
              <div className={styles.opt}><b>D</b> 120</div>
            </div>
            <div className={`${styles['card-actions']}`}><button className={`${styles['btn-text']}`}>Previous</button><button className={`${styles['btn-filled']}`}>Save & Next</button><button className={`${styles['btn-text']}`}>Mark</button></div>
          </div>
          <div className={`${styles['cbt-right']}`}>
            <div className={`${styles['palette-label']}`}><span>Palette</span><span>14 / 90</span></div>
            <div className={styles.palette}>
              <span className={`${styles.pal} ${styles.filled}`}>1</span><span className={`${styles.pal} ${styles.filled}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.tonal}`}>4</span><span className={styles.pal}>5</span>
              <span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.current}`}>7</span><span className={`${styles.pal} ${styles.filled}`}>8</span><span className={styles.pal}>9</span><span className={`${styles.pal} ${styles.tonal}`}>10</span>
            </div>
            <div className={styles.legend}><span><i className={styles.a}></i>Answered</span><span><i className={styles.t}></i>Marked</span><span><i className={styles.o}></i>Not visited</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
