import styles from "../page.module.css";

export default function HeroVisual() {
  return (
    <div className={`${styles['visual-wrap']}`}>
      <div className={`${styles.card} ${styles['pdf-card']}`}>
        <div className={`${styles['pdf-head']}`}><div className={`${styles['pdf-icon']}`}>📄</div><div className={`${styles['pdf-meta']}`}><strong>JEE_Main_2023.pdf</strong><span>18 pages • soft scan</span></div><span className={`${styles['pdf-badge']}`}>PDF</span></div>
        <div className={`${styles.lines} ${styles.w90}`}></div><div className={`${styles.lines} ${styles.w80}`}></div><div className={`${styles.lines} ${styles.w60}`}></div>
        <div className={styles.qbox}><b>Q.14 &nbsp; System of equations …</b><div className={styles.opt}></div><div className={`${styles.opt} ${styles.fill}`}></div><div className={styles.opt}></div></div>
        <div className={`${styles.lines} ${styles.w80}`}></div>
      </div>
      <div className={`${styles['ai-card']}`}>
        <div className={`${styles['ai-head']}`}><div className={`${styles['ai-logo']}`}>✦</div><div><strong style={{fontSize:'13px'}}>PARAKH AI</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Extruding paper…</span></div></div>
        <div className={`${styles['ai-bar']}`}><i></i></div>
        <div className={styles.tags}><span className={`${styles.tag} ${styles.lime}`}>✓ 90 Qs</span><span className={styles.tag}>180 mins</span><span className={styles.tag}>+4 −1</span><span className={styles.tag}>3 Sections</span></div>
      </div>
      <div className={`${styles.card} ${styles['cbt-card']}`}>
        <div className={`${styles['cbt-top']}`}><span className={`${styles['cbt-title']}`}>JEE MAIN — MOCK 01 • CBT</span><span className={`${styles['cbt-timer']}`}>● 02:47:12</span></div>
        <div className={`${styles['cbt-body']}`}>
          <div className={`${styles['cbt-left']}`}>
            <div className={styles.tabs}><span className={`${styles.tab} ${styles.active}`}>Physics</span><span className={styles.tab}>Chemistry</span><span className={styles.tab}>Maths</span></div>
            <div className={styles.question}>Q14. If α and β are roots of x² − 6x + 4 = 0, then α³ + β³ = ?</div>
            <div className={styles.options}>
              <div className={`${styles['opt-row']}`}><b>A</b>144</div>
              <div className={`${styles['opt-row']} ${styles.sel}`}><b>B</b>136 — Selected</div>
              <div className={`${styles['opt-row']}`}><b>C</b>128</div>
              <div className={`${styles['opt-row']}`}><b>D</b>120</div>
            </div>
            <div style={{display:'flex', gap:'6px'}}><span className={`${styles['btn-neu']}`} style={{flex:'1', justifyContent:'center', padding:'8px', fontSize:'11px'}}>← Prev</span><span className={`${styles['btn-neu']} ${styles.dark}`} style={{flex:'1', justifyContent:'center', padding:'8px', fontSize:'11px'}}>Save & Next →</span></div>
          </div>
          <div className={`${styles['cbt-right']}`}>
            <div className={`${styles['pal-head']}`}><span>Palette</span><span>14 / 90</span></div>
            <div className={styles.palette}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span><span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.ans}`}>7</span><span className={styles.pal}>8</span><span className={`${styles.pal} ${styles.ans}`} style={{background:'var(--lime)'}}>14</span><span className={styles.pal}>10</span></div>
            <div style={{fontSize:'10px', color:'var(--muted)', fontWeight:'600'}}>● Answered &nbsp; ● Marked &nbsp; ○ Not visited</div>
          </div>
        </div>
      </div>
      <div className={`${styles.fbadge} ${styles.f1}`}>◷ Auto-submits at 00:00</div>
      <div className={`${styles.fbadge} ${styles.f2}`}>✓ Negative 1/4 detected</div>
    </div>
  );
}
