import styles from "../page.module.css";

export default function HeroDesk() {
  return (
    <div className={styles.desk}>
      <div className={`${styles['paper']} ${styles['pdf-paper']} ${styles.paper}`}>
        <div className={`${styles['pdf-head']}`}><div className={`${styles['pdf-icon']}`}>📄</div><div className={`${styles['pdf-meta']}`}><strong>JEE_Main_2023_Shift1.pdf</strong><span>18 pages • 6.2 MB • cotton paper</span></div><span className={styles.stamp}>PDF</span></div>
        <div className={`${styles.rule} ${styles.w90}`}></div><div className={`${styles.rule} ${styles.w80}`}></div><div className={`${styles.rule} ${styles.w60}`}></div>
        <div className={styles.qbox}><b>Q.14 &nbsp; System of equations …</b><div className={`${styles.rule} ${styles.w60}`}></div><div className={styles.qopt}></div><div className={`${styles.qopt} ${styles.fill}`}></div><div className={styles.qopt}></div></div>
        <div className={`${styles.rule} ${styles.w80}`}></div><div className={`${styles.rule} ${styles.w60}`}></div>
      </div>
      <div className={`${styles['ai-ledger']}`}>
        <div className={`${styles['ledger-head']}`}><div className={`${styles['ledger-logo']}`}>✦</div><div><strong style={{fontSize:'13px'}}>PARAKH AI</strong><br /><span style={{fontSize:'11px', opacity:'.7'}}>Reading ledger… 42s</span></div></div>
        <div className={`${styles['ledger-scan']}`}><i></i></div>
        <div className={`${styles['ledger-tags']}`}><span className={`${styles['ledger-tag']} ${styles.lime}`}>✓ 90 Questions</span><span className={`${styles['ledger-tag']}`}>180 mins</span><span className={`${styles['ledger-tag']}`}>+4 −1</span><span className={`${styles['ledger-tag']}`}>3 Sections</span></div>
      </div>
      <div className={`${styles['cbt-monitor']}`}>
        <div className={`${styles['monitor-bezel']}`}><span>● ● ● &nbsp; PARAKH CRT — 02:47:12</span><span style={{color:'#FFD88A'}}>● REC</span></div>
        <div className={`${styles['monitor-screen']}`}>
          <div className={`${styles['screen-top']}`}><span className={`${styles['screen-title']}`}>JEE MAIN — MOCK 01 • CBT MODE</span><span className={styles.timer}>● 02:47:12 left</span></div>
          <div className={`${styles['screen-body']}`}>
            <div className={`${styles['screen-left']}`}>
              <div className={styles.tabs}><span className={`${styles.tab} ${styles.active}`}>Physics</span><span className={styles.tab}>Chemistry</span><span className={styles.tab}>Maths</span></div>
              <div className={styles.question}>Q14. If α and β are roots of x² − 6x + 4 = 0, then α³ + β³ = ?</div>
              <div className={styles.options}>
                <div className={styles.opt}><b>A</b>144</div>
                <div className={`${styles.opt} ${styles.sel}`}><b>B</b>136 — Selected</div>
                <div className={styles.opt}><b>C</b>128</div>
                <div className={styles.opt}><b>D</b>120</div>
              </div>
              <div className={`${styles['mini-actions']}`}><span className={`${styles['mini-btn']}`}>← Previous</span><span className={`${styles['mini-btn']} ${styles.dark}`}>Save & Next →</span></div>
            </div>
            <div className={`${styles['screen-right']}`}>
              <div className={`${styles['pal-head']}`}><span>Palette</span><span>14 / 90</span></div>
              <div className={styles.palette}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span><span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.ans}`}>7</span><span className={styles.pal}>8</span><span className={`${styles.pal} ${styles.ans}`} style={{background:'linear-gradient(180deg,#FFD88A,#C9A86A)'}}>14</span><span className={styles.pal}>10</span></div>
              <div style={{fontSize:'10px', fontWeight:'700', color:'#7A6A54'}}>● Answered &nbsp; ● Marked</div>
            </div>
          </div>
        </div>
        <div style={{height:'14px', background:'linear-gradient(180deg, #1A1A1A, #0F0F0F)', display:'flex', justifyContent:'center', alignItems:'center', gap:'6px'}}><span style={{width:'40px', height:'4px', background:'#333', borderRadius:'999px'}}></span></div>
      </div>
      <div className={`${styles['sticky-note']} ${styles.note1}`}>✎ Auto-submits at 00:00</div>
      <div className={`${styles['sticky-note']} ${styles.note2}`}>✓ 1/4 negative detected</div>
    </div>
  );
}
