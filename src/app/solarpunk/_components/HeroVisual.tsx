import styles from "../page.module.css";

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <div className={`${styles['organic-card']} ${styles.pdf}`}>
        <div className={`${styles['pdf-head']}`}><div className={`${styles['pdf-icon']}`}>🌾</div><div className={`${styles['pdf-meta']}`}><strong>JEE_Main_2023_Shift1.pdf</strong><span>18 pages • 6.2 MB • sun scan</span></div><span className={`${styles['pdf-badge']}`}>PDF</span></div>
        <div className={`${styles.lines} w90 ${styles.green}`}></div><div className={`${styles.lines} w80`}></div><div className={`${styles.lines} w60`}></div>
        <div className={styles.qbox}><b>Q.14 &nbsp; System of equations … 🌿</b><div className={`${styles.lines} w70`} style={{marginTop:'6px'}}></div><div className={`${styles.lines} w60 ${styles.green}`} style={{height:'6px', marginTop:'6px'}}></div></div>
        <div className={`${styles.lines} w80`}></div><div className={`${styles.lines} w40`}></div>
        <div style={{display:'flex', gap:'6px', marginTop:'8px'}}><span style={{fontSize:'10px', fontWeight:'700', padding:'4px 8px', borderRadius:'999px', background:'var(--lime)', border:'1px solid #fff'}}>Instructions • 3p</span><span style={{fontSize:'10px', fontWeight:'700', padding:'4px 8px', borderRadius:'999px', background:'#fff', border:'1px solid rgba(46,125,50,.1)'}}>Solar OMR</span></div>
      </div>
      <div className={`${styles['ai-sprout']}`}>
        <div style={{display:'flex', gap:'8px', alignItems:'center', marginBottom:'8px', marginTop:'6px'}}><div style={{width:'28px', height:'28px', borderRadius:'50%', background:'#fff', color:'var(--green)', display:'grid', placeItems:'center', fontWeight:'900'}}>✦</div><div><strong style={{fontSize:'13px'}}>PARAKH SEED AI</strong><br /><span style={{fontSize:'11px', opacity:'.8'}}>Germinating … 42s</span></div></div>
        <div className={styles.scan}><i></i></div>
        <div className={styles.tags}><span className={`${styles.tag} ${styles.lime}`}>✓ 90 Qs</span><span className={styles.tag}>180 mins</span><span className={styles.tag}>+4 −1</span><span className={styles.tag}>3 Roots</span></div>
      </div>
      <div className={`${styles['organic-card']} ${styles['cbt-organic']}`}>
        <div className={`${styles['cbt-top']}`}><strong>🌿 JEE MAIN — MOCK 01 • LIVING CBT</strong><span className={`${styles['timer-leaf']}`}><i></i> 02:47:12</span></div>
        <div className={`${styles['cbt-body']}`}>
          <div className={`${styles['cbt-left']}`}>
            <div className={styles.tabs}><span className={`${styles.tab} ${styles.active}`}>Physics</span><span className={styles.tab}>Chemistry</span><span className={styles.tab}>Maths</span></div>
            <div className={styles.question}>Q14. If α and β are roots of x² − 6x +4 =0, then α³+β³ = ?</div>
            <div className={styles.options}>
              <div className={styles.opt}><b>A</b> 144</div><div className={`${styles.opt} ${styles.sel}`}><b>B</b> 136 — Rooted ✓</div><div className={styles.opt}><b>C</b> 128</div><div className={styles.opt}><b>D</b> 120</div>
            </div>
            <div style={{display:'flex', gap:'6px'}}><span style={{flex:'1', padding:'7px', textAlign:'center', border:'1px solid rgba(46,125,50,.12)', borderRadius:'999px', background:'#fff', fontWeight:'700', fontSize:'12px'}}>← Prev</span><span style={{flex:'1', padding:'7px', textAlign:'center', borderRadius:'999px', background:'var(--green)', color:'#fff', fontWeight:'800', fontSize:'12px'}}>Save & Next →</span></div>
          </div>
          <div className={`${styles['cbt-right']}`}>
            <div className={`${styles['pal-head']}`}><span>SEED PALETTE</span><span style={{background:'var(--lime)', padding:'2px 7px', borderRadius:'999px'}}>14/90</span></div>
            <div className={styles.palette}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span><span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.ans}`}>7</span><span className={styles.pal}>8</span><span className={`${styles.pal} ${styles.ans}`} style={{background:'var(--lime)'}}>14</span><span className={styles.pal}>10</span></div>
            <div style={{fontSize:'10px', color:'var(--earth)'}}>● Rooted ● Sprouted ○ Dormant</div>
            <div style={{marginTop:'8px', background:'var(--green)', color:'#fff', textAlign:'center', padding:'6px', borderRadius:'999px', fontSize:'11px', fontWeight:'700'}}>Auto-harvest at 00:00</div>
          </div>
        </div>
      </div>
      <div className={`${styles['sticker-leaf']} ${styles.s1}`}><span>◷</span> Auto-harvest at zero</div>
      <div className={`${styles['sticker-leaf']} ${styles.s2}`}><span>✓</span> Negative 1/4 — composted</div>
    </div>
  );
}
