import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <div className={styles.eyebrow}><i></i> NEUBRUTALISM • COMIC • MAXIMAL ENERGY</div>
        <h1><span className={styles.line1}>TURN ANY</span><span className={styles.line2}>PDF INTO A</span><span className={styles.pop}>REAL EXAM!</span></h1>
        <p className={styles.sub}>Same exam-accurate Parakh AI — now with <b>POW!</b> Comic energy. Your PDF goes KAPOW and lands as a real CBT. Loud, fun, unforgettable — but still exam-serious where it counts.</p>
        <div className={`${styles['hero-actions']}`}>
          <a href="#" className={`${styles['btn-brutal']}`}>Upload PDF & BOOM! →</a>
          <a href="#" className={`${styles['btn-brutal']} ${styles.dark}`}>See how it works ▶</a>
          <a href="#" className={`${styles['btn-brutal']} ${styles.cyan}`}>★ Free to try</a>
        </div>
        <div className={styles.trust}><div className={`${styles['trust-pill']}`}><div className={styles.avatars}><span>A</span><span>S</span><span>R</span></div> 40,000+ aspirants</div><span className={`${styles['trust-pill']}`}>⚡ 2.3M Qs rendered</span><span className={`${styles['trust-pill']}`}>★ 4.8/5 love</span></div>
      </div>
      <div className={styles.visual}>
        <div className={`${styles['comic-card']} ${styles['pdf-card']} ${styles['halftone-yellow']}`}>
          <div className={`${styles['pdf-head']}`}><div className={`${styles['pdf-icon']}`}>💥</div><div className={`${styles['pdf-meta']}`}><strong>JEE_Main_2023.pdf</strong><span>18 pages • KAPOW scan</span></div><span className={`${styles['pdf-badge']}`}>PDF</span></div>
          <div className={`${styles.lines} ${styles.w90}`}></div><div className={`${styles.lines} ${styles.w80}`}></div><div className={`${styles.lines} ${styles.w60}`}></div>
          <div className={styles.qbox}><b>Q.14 &nbsp; System of equations … POW!</b><div className={`${styles.lines} ${styles.w60}`} style={{background:'white'}}></div><div className={styles.qopt}></div><div className={`${styles.qopt} ${styles.fill}`}></div><div className={styles.qopt}></div></div>
          <div className={`${styles.lines} ${styles.w80}`}></div>
        </div>
        <div className={`${styles['ai-burst']}`}>
          <div className={`${styles['ai-head']}`}><div className={`${styles['ai-logo']}`}>✦</div><div><strong style={{fontSize:'13px'}}>PARAKH AI</strong><br /><span style={{fontSize:'11px', fontWeight:'700'}}>KAPOWWW… 42s</span></div></div>
          <div className={`${styles['ai-bar']}`}><i></i></div>
          <div className={styles.tags}><span className={`${styles.tag} ${styles.lime}`}>✓ 90 Qs</span><span className={styles.tag}>180 mins</span><span className={styles.tag}>+4 −1</span><span className={styles.tag}>3 Sections!</span></div>
        </div>
        <div className={`${styles['comic-card']} ${styles['cbt-card']}`}>
          <div className={`${styles['cbt-top']}`}><strong>⚡ JEE MAIN — MOCK 01 • CBT MODE</strong><span className={`${styles['cbt-timer']}`}>● 02:47:12</span></div>
          <div className={`${styles['cbt-body']}`}>
            <div className={`${styles['cbt-left']}`}>
              <div className={styles.tabs}><span className={`${styles.tab} ${styles.active}`}>Physics</span><span className={styles.tab}>Chemistry</span><span className={styles.tab}>Maths</span></div>
              <div className={styles.question}>Q14. If α and β are roots of x² − 6x + 4 = 0, then α³ + β³ = ?</div>
              <div className={styles.options}>
                <div className={styles.opt}><b>A</b>144</div>
                <div className={`${styles.opt} ${styles.sel}`}><b>B</b>136 — Selected ✓</div>
                <div className={styles.opt}><b>C</b>128</div>
                <div className={styles.opt}><b>D</b>120</div>
              </div>
              <div className={`${styles['cbt-actions']}`}><span className={`${styles['mini-btn']}`}>← Prev</span><span className={`${styles['mini-btn']} ${styles.dark}`}>Save & Next →</span></div>
            </div>
            <div className={`${styles['cbt-right']}`}>
              <div className={`${styles['pal-head']}`}><span>PALETTE!</span><span>14 / 90</span></div>
              <div className={styles.palette}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span><span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.ans}`}>7</span><span className={styles.pal}>8</span><span className={`${styles.pal} ${styles.ans}`} style={{background:'var(--yellow)'}}>14</span><span className={styles.pal}>10</span></div>
              <div style={{fontWeight:'900', fontSize:'10px'}}>● Answered &nbsp; ● Marked &nbsp; ○ Not visited</div>
            </div>
          </div>
        </div>
        <div className={`${styles.sticker} ${styles.s1}`}>◷ Auto-submits! BAM!</div>
        <div className={`${styles.sticker} ${styles.s2}`}>✓ Negative 1/4 — ZAP!</div>
      </div>
    </section>
  );
}
