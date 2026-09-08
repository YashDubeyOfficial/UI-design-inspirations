import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`hero-copy`}>
        <div className={styles.eyebrow}><span className={`${styles['dot-live']}`}></span> <b>AI that understands Indian exam papers</b> • No manual setup needed</div>
        <h1>Turn any<br /><span className={styles.line2}>PDF into a</span><br /><span className={styles.accent}>real exam.</span></h1>
        <p className={styles.sub}>Drop your <strong>PYQs, coaching PDFs or question banks.</strong> Parakh reads every instruction — time, marks, negatives, sections — and instantly builds a true CBT you attempt exactly like NTA, TCS iON or UPSC.</p>
        <div className={`${styles['hero-actions']}`}>
          <a href="#try" className={`${styles['btn-primary']} ${styles['btn-lime']}`} style={{padding:'14px 22px', fontSize:'15px'}}>Upload PDF & Create Mock <span className={styles.arrow} style={{background:'var(--ink)', color:'var(--lime)'}}>→</span></a>
          <a href="#how" className={`${styles['btn-ghost']}`}>See how it works <span style={{width:'18px', height:'18px', borderRadius:'50%', border:'1px solid var(--line)', display:'grid', placeItems:'center', fontSize:'10px'}}>▶</span></a>
        </div>
        <div className={`${styles['meta-row']}`}>
          <div className={styles.avatars}><span>A</span><span>S</span><span>R</span><span style={{background:'var(--ink)', color:'var(--lime)', fontSize:'11px'}}>+40k</span></div>
          <span><b style={{color:'var(--ink)'}}>Trusted by 40,000+ aspirants</b> • 2.3M questions rendered • Free to start</span>
        </div>
      </div>

      <div className={`${styles['hero-visual']}`}>
        <div className={`${styles['visual-card']} ${styles['pdf-card']}`}>
          <div className={`${styles['pdf-head']}`}>
            <div className={`${styles['pdf-icon']}`}>📄</div>
            <div className={`${styles['pdf-meta']}`}><strong>JEE_Main_2023_Shift1.pdf</strong><span>18 pages • 6.2 MB • scanned + text</span></div>
            <span className={`${styles['pdf-badge']}`}>PDF</span>
          </div>
          <div className={`${styles.line} ${styles.w90}`}></div><div className={`${styles.line} ${styles.w80}`}></div><div className={`${styles.line} ${styles.w60}`}></div>
          <div className={`${styles['q-block']}`}>
            <b>Q.14 &nbsp; If the system of equations ...</b>
            <div className={`${styles.line} ${styles.w70}`}></div>
            <div className={`${styles['q-opt']}`}></div><div className={`${styles['q-opt']} ${styles.fill}`}></div><div className={`${styles['q-opt']}`}></div><div className={`${styles['q-opt']}`}></div>
          </div>
          <div className={`${styles.line} ${styles.w80}`}></div><div className={`${styles.line} ${styles.w40}`}></div>
          <div style={{display:'flex', gap:'6px', marginTop:'10px'}}>
            <span style={{fontSize:'10px', fontWeight:'800', padding:'4px 8px', borderRadius:'999px', background:'#FFF4CC', border:'1px solid #FFE9A8'}}>Instructions • 3 pages</span>
            <span style={{fontSize:'10px', fontWeight:'800', padding:'4px 8px', borderRadius:'999px', background:'#E6FFF0', border:'1px solid #B9F8C8'}}>OMR detected</span>
          </div>
        </div>

        <div className={`${styles['ai-bridge']}`}>
          <div className={`${styles['ai-top']}`}><div className={`${styles['ai-logo']}`}>✦</div><div><strong>PARAKH AI</strong><br /><span>Understanding paper…</span></div><span style={{marginLeft:'auto', fontSize:'10px', background:'rgba(255,255,255,.14)', padding:'4px 7px', borderRadius:'999px'}}>42s</span></div>
          <div className={styles.scan}><i></i></div>
          <div className={styles.tags}>
            <span className={`${styles.tag} ${styles.lime}`}><span className={styles.ck}>✓</span> 90 Questions</span>
            <span className={`${styles.tag} ${styles.lime}`}><span className={styles.ck}>✓</span> 180 mins</span>
            <span className={styles.tag}><span className={styles.ck}>✓</span> +4  −1</span>
            <span className={styles.tag}>3 Sections</span>
            <span className={styles.tag}>Physics • Chemistry • Maths</span>
          </div>
        </div>

        <div className={`${styles['visual-card']} ${styles['cbt-card']}`}>
          <div className={`${styles['cbt-top']}`}>
            <div style={{display:'flex', gap:'8px', alignItems:'center'}}><div className={`${styles['cbt-dots']}`}><i></i><i></i><i></i></div><span className={`${styles['cbt-title']}`}>JEE MAIN — MOCK 01 • CBT MODE</span></div>
            <div className={`${styles['cbt-timer']}`}><span style={{width:'6px', height:'6px', background:'#FF3B30', borderRadius:'50%', display:'inline-block'}}></span> 02:47:12 <b>left</b></div>
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
              <div className={`${styles['palette-head']}`}><strong>Question Palette</strong><span>14 / 90</span></div>
              <div className={styles.palette}>
                <span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span>
                <span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.curr}`}>7</span><span className={`${styles.pal} ${styles.ans}`}>8</span><span className={styles.pal}>9</span><span className={`${styles.pal} ${styles.mark}`}>10</span>
                <span className={`${styles.pal} ${styles.ans}`}>11</span><span className={styles.pal}>12</span><span className={styles.pal}>13</span><span className={`${styles.pal} ${styles.ans}`} style={{background:'var(--lime)', color:'var(--ink)'}}>14</span><span className={styles.pal}>15</span>
              </div>
              <div className={styles.legend}>
                <span><i className={styles.ans}></i>Answered</span><span><i className={styles.mark}></i>Marked</span><span><i className={styles.not}></i>Not visited</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles['float-badge']} ${styles.badge1}`}><span className={styles.icon}>◷</span> Auto-submits when time ends</div>
        <div className={`${styles['float-badge']} ${styles.badge2}`}><span className={styles.icon}>✓</span> Negative marking: 1/4 detected</div>
      </div>
    </section>
  );
}
