import styles from "../page.module.css";

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <div className={`${styles['bubble-card']} ${styles['pdf-bubble']}`}>
        <div className={`${styles['pdf-head']}`}><div className={`${styles['pdf-icon']}`}>💧</div><div className={`${styles['pdf-meta']}`}><strong>JEE_Main_2023_Shift1.pdf</strong><span>18 pages • 6.2 MB • aqua scan</span></div><span className={`${styles['pdf-badge']}`}>PDF</span></div>
        <div className={`${styles.lines} w90 ${styles.aqua}`}></div><div className={`${styles.lines} w80`}></div><div className={`${styles.lines} w60`}></div>
        <div className={styles.qbox}><b>Q.14  If system of equations … 💦</b><div className={`${styles.lines} w70`} style={{marginTop:'6px'}}></div><div className={`${styles['q-opt']}`}></div><div className={`${styles['q-opt']} ${styles.fill}`}></div><div className={`${styles['q-opt']}`}></div></div>
        <div className={`${styles.lines} w80`}></div><div className={`${styles.lines} w40`}></div>
        <div style={{display:'flex', gap:'6px', marginTop:'8px'}}><span style={{fontSize:'10px', fontWeight:'700', padding:'4px 8px', borderRadius:'999px', background:'#C8FF00', border:'1px solid #fff'}}>Instructions • 3p</span><span style={{fontSize:'10px', fontWeight:'700', padding:'4px 8px', borderRadius:'999px', background:'#E6FCFF', border:'1px solid #fff'}}>OMR glossy</span></div>
      </div>
      <div className={`${styles['ai-bubble']}`}>
        <div className={`${styles['ai-top']}`}><div className={`${styles['ai-logo']}`}>✦</div><div><strong style={{fontSize:'13px'}}>PARAKH AERO AI</strong><br /><span style={{fontSize:'11px', color:'var(--ink2)'}}>Popping… 42s</span></div><span style={{marginLeft:'auto', fontSize:'10px', background:'linear-gradient(135deg,#C8FF00,#FFE600)', padding:'4px 7px', borderRadius:'999px', border:'1px solid #fff', fontWeight:'800'}}>◈ 42s</span></div>
        <div className={styles.scan}><i></i></div>
        <div className={styles.tags}><span className={`${styles.tag} ${styles.lime}`}>✓ 90 Qs</span><span className={`${styles.tag} ${styles.lime}`} style={{background:'linear-gradient(135deg,#7DF9FF,#00D4FF)', color:'#fff'}}>180 mins</span><span className={styles.tag}>+4 −1</span><span className={styles.tag}>3 Sections</span></div>
      </div>
      <div className={`${styles['bubble-card']} ${styles['cbt-bubble']}`}>
        <div className={`${styles['cbt-top']}`}><strong>◈ JEE MAIN — MOCK 01 • AQUA CBT</strong><span className={`${styles['timer-bubble']}`}>● 02:47:12</span></div>
        <div className={`${styles['cbt-body']}`}>
          <div className={`${styles['cbt-left']}`}>
            <div className={styles.tabs}><span className={`${styles.tab} ${styles.active}`}>Physics</span><span className={styles.tab}>Chemistry</span><span className={styles.tab}>Maths</span></div>
            <div className={styles.question}>Q14. If α and β are roots of x² − 6x +4 =0, then α³+β³ = ?</div>
            <div className={styles.options}>
              <div className={styles.opt}><b>A</b> 144</div><div className={`${styles.opt} ${styles.sel}`}><b>B</b> 136 — Selected ✨</div><div className={styles.opt}><b>C</b> 128</div><div className={styles.opt}><b>D</b> 120</div>
            </div>
            <div style={{display:'flex', gap:'6px'}}><span style={{flex:'1', padding:'7px', textAlign:'center', border:'1px solid rgba(14,36,64,.08)', borderRadius:'999px', background:'rgba(255,255,255,.8)', fontWeight:'700', fontSize:'12px'}}>← Prev</span><span style={{flex:'1', padding:'7px', textAlign:'center', borderRadius:'999px', background:'linear-gradient(135deg,#00D4FF,#0097B2)', color:'#fff', fontWeight:'800', fontSize:'12px', boxShadow:'0 4px 12px rgba(0,212,255,.2)'}}>Save & Next →</span></div>
          </div>
          <div className={`${styles['cbt-right']}`}>
            <div className={`${styles['pal-head']}`}><span>BUBBLE PALETTE</span><span style={{background:'#C8FF00', padding:'2px 7px', borderRadius:'999px', border:'1px solid #fff'}}>14/90</span></div>
            <div className={styles.palette}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span><span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.ans}`}>7</span><span className={styles.pal}>8</span><span className={`${styles.pal} ${styles.ans}`} style={{background:'linear-gradient(135deg,#C8FF00,#FFE600)'}}>14</span><span className={styles.pal}>10</span></div>
            <div style={{fontSize:'10px', color:'var(--ink2)'}}>● Answered ● Marked ○ Not visited</div>
            <div style={{marginTop:'8px', background:'linear-gradient(135deg,#00D4FF,#7DF9FF)', color:'#fff', textAlign:'center', padding:'6px', borderRadius:'999px', fontSize:'11px', fontWeight:'700', border:'1px solid #fff'}}>Auto-bubbles at 00:00</div>
          </div>
        </div>
      </div>
      <div className={`${styles['sticker-bubble']} ${styles.s1}`}><span>◷</span> Auto-submits at zero</div>
      <div className={`${styles['sticker-bubble']} ${styles.s2}`}><span>✓</span> Negative 1/4 — glossed!</div>
    </div>
  );
}
