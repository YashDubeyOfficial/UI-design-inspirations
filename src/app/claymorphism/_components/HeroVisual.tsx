import styles from "../page.module.css";

export default function HeroVisual() {
  return (
    <div className={`${styles['hero-visual']}`}>
      <div className={`${styles.clay} ${styles['pdf-clay']} ${styles['clay-peach']}`}>
        <div className={`${styles['pdf-head']}`}><div className={`${styles['pdf-icon']}`}>📄</div><div className={`${styles['pdf-meta']}`}><strong>UPSC_2022_GS1.pdf</strong><span>16 pages • 6.8 MB • slightly crumpled</span></div><span className={`${styles['pdf-badge']}`}>PDF</span></div>
        <div className={`${styles.lines} ${styles.w90}`}></div><div className={`${styles.lines} ${styles.w80}`}></div><div className={`${styles.lines} ${styles.w60}`}></div>
        <div className={`${styles['q-clay']}`}><b>Q.07 &nbsp; Consider the following statements …</b><div className={`${styles.lines} ${styles.w60}`} style={{marginTop:'8px'}}></div><div className={`${styles['q-opt']}`}></div><div className={`${styles['q-opt']} ${styles.fill}`}></div><div className={`${styles['q-opt']}`}></div></div>
        <div className={`${styles.lines} ${styles.w80}`}></div>
      </div>

      <div className={`${styles.clay} ${styles['ai-bubble']} ${styles['clay-lav']}`}>
        <div className={`${styles['ai-logo']}`}>✦</div>
        <div style={{flex:'1', textAlign:'left'}}>
          <strong style={{fontFamily:'\'Nunito\',sans-serif', fontSize:'13px'}}>PARAKH CLAY AI</strong><br /><span style={{fontSize:'11px', color:'var(--muted)', fontWeight:'700'}}>Squishing • 38s • puff puff…</span>
          <div className={`${styles['ai-tags']}`}><span className={`${styles.tag} ${styles.peach}`}>✓ 100 Qs</span><span className={`${styles.tag} ${styles.mint}`}>✓ 120 mins</span><span className={styles.tag}>+2 −0.66</span></div>
        </div>
        <div className={styles.scan}><i></i></div>
      </div>

      <div className={`${styles.clay} ${styles['cbt-monitor']}`}>
        <div className={`${styles['cbt-top']}`}><strong>UPSC CSE — MOCK 01 • CLAY CBT</strong><span className={styles.timer}>◷ 01:52:18</span></div>
        <div className={`${styles['cbt-body']}`}>
          <div className={`${styles['cbt-left']}`}>
            <div className={styles.tabs}><span className={`${styles.tab} ${styles.active}`}>GS I</span><span className={styles.tab}>GS II</span><span className={styles.tab}>Aptitude</span></div>
            <div className={styles.question}>Q07. With reference to Indian history, consider the statements …</div>
            <div className={styles.options}>
              <div className={styles.opt}><b>A</b> 1 only</div>
              <div className={`${styles.opt} ${styles.sel}`}><b>B</b> 1 and 2 only — puffed ✓</div>
              <div className={styles.opt}><b>C</b> 2 and 3 only</div>
              <div className={styles.opt}><b>D</b> 1, 2 and 3</div>
            </div>
            <div className={`${styles['cbt-actions']}`}><span className={`${styles['mini-btn']}`}>← Back</span><span className={`${styles['mini-btn']} ${styles.dark}`}>Save & Next →</span></div>
          </div>
          <div className={`${styles['cbt-right']}`}>
            <div className={`${styles['pal-head']}`}><span>Palette</span><span style={{background:'white', border:'3px solid white', padding:'3px 7px', borderRadius:'999px', boxShadow:'2px 2px 6px rgba(0,0,0,.06)'}}>7 / 100</span></div>
            <div className={styles.palette}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={styles.pal}>2</span><span className={`${styles.pal} ${styles.mark}`}>3</span><span className={styles.pal}>4</span><span className={`${styles.pal} ${styles.ans}`}>5</span><span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.ans}`}>7</span><span className={styles.pal}>8</span><span className={styles.pal}>9</span><span className={styles.pal}>10</span></div>
            <div className={styles.legend}><span><i className={styles.ans}></i>Answered</span><span><i className={styles.mark}></i>Marked</span><span><i className={styles.not}></i>Left</span></div>
          </div>
        </div>
      </div>
      <div className={`${styles['float-clay']} ${styles.fc1}`}><span className={styles.ic}>◷</span> Puffy timer, real pressure</div>
      <div className={`${styles['float-clay']} ${styles.fc2}`}><span className={styles.ic}>✓</span> Clay captures negatives</div>
    </div>
  );
}
