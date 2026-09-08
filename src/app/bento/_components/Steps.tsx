import styles from "../page.module.css";

export default function Steps() {
  return (
    <div className={`${styles['bento-grid']}`}>
      <div className={`${styles['bento-card']}`}>
        <div className={`${styles['step-num']}`}>01 / UPLOAD <span className={styles.terra}>↗</span></div>
        <h3>Drop any PDF</h3>
        <p>PYQs, coaching sheets, scanned Xerox — up to 300 pages. Each page becomes a tile we sort.</p>
        <div className={`${styles['bento-visual']}`}>
          <div className={`${styles['upload-box']}`}><div className={styles.up}>↑</div><strong>Drop PDF into bento</strong><span>PDF up to 50MB • any scan</span></div>
          <div className={`${styles['mini-list']}`}>
            <div className={`${styles['mini-row']}`}>UPSC_2022_GS1.pdf <b>12.4 MB</b></div>
            <div className={`${styles['mini-row']}`}>Allen_Test_07.pdf <b>8.1 MB</b></div>
          </div>
        </div>
      </div>
      <div className={`${styles['bento-card']} ${styles.terra}`}>
        <div className={`${styles['step-num']}`}>02 / AI SORTS <span className={styles.sage}>✦</span></div>
        <h3>AI boxes everything</h3>
        <p>Finds 90 questions, 4 options, section breaks, duration and +4 −1 — even when numbering restarts.</p>
        <div className={`${styles['bento-visual']}`}>
          <div className={`${styles['extract-grid']}`}>
            <div className={`${styles['extract-card']}`}><small>DURATION</small><strong>180<small> m</small></strong></div>
            <div className={`${styles['extract-card']}`}><small>MARKING</small><strong>+4 −1</strong></div>
            <div className={`${styles['extract-card']}`}><small>SECTIONS</small><strong>3</strong></div>
            <div className={`${styles['extract-card']}`}><small>QUESTIONS</small><strong>90</strong></div>
          </div>
          <div className={`${styles['badge-verbatim']}`}>✓ Instructions boxed verbatim</div>
        </div>
      </div>
      <div className={`${styles['bento-card']}`}>
        <div className={`${styles['step-num']}`}>03 / SERVE <span className={styles.terra}>▶</span></div>
        <h3>Serve exam hot</h3>
        <p>A true CBT bento: timer, palette, mark-for-review, sectional locks and auto-submit.</p>
        <div className={`${styles['bento-visual']}`} style={{padding:'0', overflow:'hidden'}}>
          <div style={{display:'flex', justifyContent:'space-between', padding:'10px 12px', borderBottom:'1px solid var(--line)', fontSize:'11px', fontWeight:'800'}}><span>Q 14 / 90</span><span style={{background:'var(--ink)', color:'white', padding:'4px 8px', borderRadius:'999px'}}>01:42:11</span></div>
          <div style={{padding:'12px'}}>
            <div style={{height:'8px', background:'var(--sage)', borderRadius:'999px', width:'74%', marginBottom:'8px'}}></div>
            <div style={{height:'7px', background:'#EEE6D8', borderRadius:'999px', width:'90%', marginBottom:'6px'}}></div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'12px'}}>
              <span className={`${styles.pal} ${styles.ans}`} style={{height:'24px'}}>1</span><span className={`${styles.pal} ${styles.mark}`} style={{height:'24px'}}>2</span><span className={styles.pal} style={{height:'24px'}}>3</span><span className={styles.pal} style={{height:'24px'}}>4</span><span className={styles.pal} style={{height:'24px'}}>5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
